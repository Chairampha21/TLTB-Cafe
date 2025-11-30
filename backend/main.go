package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"
	
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"

	// Swagger
	docs "backend/docs"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

var db *sql.DB

// ======================= STRUCTS =======================

type Drink struct {
	ID            int      `json:"id"`
	Section       string   `json:"section"`      // "drink"
	SubCategory   string   `json:"subCategory"`  // เช่น นม / กาแฟ / โซดา / มัทฉะ / สมูทตี้
	Name          string   `json:"name"`
	Category      string   `json:"category"`     // ใช้ subCategory เป็น category ไปก่อน
	Price         *float64 `json:"price,omitempty"`
	OriginalPrice float64  `json:"originalPrice"`
	Image         string   `json:"image"`
	Description   *string  `json:"description,omitempty"`
	IsAvailable   bool     `json:"isAvailable"`
	Tags          []string `json:"tags"`
	Featured      bool     `json:"featured"`
}

// ใช้เฉพาะ PUT /drinks/:name (อัปเดตได้แค่ name + price)
type UpdateDrinkRequest struct {
	Name  *string  `json:"name,omitempty"`
	Price *float64 `json:"price,omitempty"`
}

type Food struct {
	ID            int      `json:"id"`
	Section       string   `json:"section"`      // "food"
	SubCategory   string   `json:"subCategory"`  // อาหารจานเดียว / เส้น / ของทานเล่น
	Name          string   `json:"name"`
	Category      string   `json:"category"`
	Price         *float64 `json:"price,omitempty"`
	OriginalPrice float64  `json:"originalPrice"`
	Image         string   `json:"image"`
	Description   *string  `json:"description,omitempty"`
	IsAvailable   bool     `json:"isAvailable"`
	Tags          []string `json:"tags"`
	Featured      bool     `json:"featured"`
}

type Dessert struct {
	ID            int      `json:"id"`
	Section       string   `json:"section"`      // "dessert"
	SubCategory   string   `json:"subCategory"`  // โทสต์ / ปังเย็น / ขนมปังปิ้ง
	Name          string   `json:"name"`
	Category      string   `json:"category"`
	Price         *float64 `json:"price,omitempty"`
	OriginalPrice float64  `json:"originalPrice"`
	Image         string   `json:"image"`
	Description   *string  `json:"description,omitempty"`
	IsAvailable   bool     `json:"isAvailable"`
	Tags          []string `json:"tags"`
	Featured      bool     `json:"featured"`
}

// ใช้สำหรับ /api/v1/menu (รวมทุกอย่าง)
type MenuItem struct {
	ID            int      `json:"id"`
	Section       string   `json:"section"`      // "drink" / "food" / "dessert"
	SubCategory   string   `json:"subCategory"`
	Name          string   `json:"name"`
	Category      string   `json:"category"`
	Price         *float64 `json:"price,omitempty"`
	OriginalPrice float64  `json:"originalPrice"`
	Image         string   `json:"image"`
	Description   *string  `json:"description,omitempty"`
	IsAvailable   bool     `json:"isAvailable"`
	Tags          []string `json:"tags"`
	Featured      bool     `json:"featured"`
}

type ErrorResponse struct {
	Error string `json:"error"`
}

// ======================= MAIN =======================

// @title       TLTB Cafe API
// @version     1.0
// @description Simple API for cafe menu
// @BasePath    /api/v1
func main() {
	initDB()

    docs.SwaggerInfo.BasePath = "/api/v1"

    r := gin.Default()

    // ✅ อนุญาตให้ frontend (localhost:3000) เรียก backend ได้
    r.Use(cors.Default())
	// CORS: อนุญาตให้ frontend เรียกจาก localhost
	// r.Use(cors.New(cors.Config{
	// 	AllowOrigins:     []string{"http://localhost:3000", "http://localhost:5173"},
	// 	AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
	// 	AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
	// 	AllowCredentials: true,
	// }))

	// Healthcheck
	r.GET("/health", HealthCheck)

	// Swagger UI
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	// ================= API GROUP =================
	api := r.Group("/api/v1")
	{
		// api.GET("/drinks", getDrinksHandler)
    	// api.GET("/foods", getFoodsHandler)
    	// api.GET("/desserts", getDessertsHandler)

		// รวมเมนูทั้งหมด (โครงคล้าย menuData.js)
		api.GET("/menu", GetAllMenu)

		// Drinks
		api.GET("/drinks", GetDrinks)
		api.POST("/drinks", CreateDrink)
		api.GET("/drinks/:name", GetDrinksByName)
		api.PUT("/drinks/:name", UpdateDrinksByName)
		api.DELETE("/drinks/:name", DeleteDrinksByName)

		// Foods
		api.GET("/foods", GetFoods)
		api.POST("/foods", CreateFood)
		api.GET("/foods/:name", GetFoodsByName)
		api.PUT("/foods/:name", UpdateFoodsByName)
		api.DELETE("/foods/:name", DeleteFoodsByName)

		// Desserts
		api.GET("/desserts", GetDesserts)
		api.POST("/desserts", CreateDessert)
		api.GET("/desserts/:name", GetDessertsByName)
		api.PUT("/desserts/:name", UpdateDessertsByName)
		api.DELETE("/desserts/:name", DeleteDessertsByName)
	}

	log.Println("🚀 Server running at :8080")
	r.Run(":8080")
}

// ======================= HEALTHCHECK =======================

func HealthCheck(c *gin.Context) {
	if err := db.Ping(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "db error"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": "ok"})
}

// ======================= DATABASE =======================

func initDB() {
	// Support both DB_* and POSTGRES_* environment variable names.
	// Priority: DB_* -> POSTGRES_* -> defaults
	host := os.Getenv("DB_HOST")
	if host == "" {
		host = os.Getenv("POSTGRES_HOST")
	}
	if host == "" {
		host = "localhost"
	}

	port := os.Getenv("DB_PORT")
	if port == "" {
		port = os.Getenv("POSTGRES_PORT")
	}
	if port == "" {
		port = "5432"
	}

	user := os.Getenv("DB_USER")
	if user == "" {
		user = os.Getenv("POSTGRES_USER")
	}
	if user == "" {
		user = "drinks_user"
	}

	password := os.Getenv("DB_PASSWORD")
	if password == "" {
		password = os.Getenv("POSTGRES_PASSWORD")
	}
	if password == "" {
		password = "your_strong_password"
	}

	name := os.Getenv("DB_NAME")
	if name == "" {
		name = os.Getenv("POSTGRES_DB")
	}
	if name == "" {
		name = "drinks"
	}

	dsn := fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=disable",
		user, password, host, port, name)

	var err error
	db, err = sql.Open("postgres", dsn)
	if err != nil {
		log.Fatal("❌ Open DB error:", err)
	}

	if err = db.Ping(); err != nil {
		log.Fatal("❌ Cannot connect DB:", err)
	}

	log.Println("✅ Connected to PostgreSQL")
}

// ======================= MENU (COMBINED) =======================

// GetAllMenu godoc
// @Summary      List all menu items (drinks + foods + desserts)
// @Tags         Menu
// @Produce      json
// @Success      200  {array}   MenuItem
// @Router       /menu [get]
func GetAllMenu(c *gin.Context) {
	var menu []MenuItem

	// ---- DRINKS ----
	rows, err := db.Query(`
		SELECT id, sub_category, name, price, description
		FROM drinks
		ORDER BY id`,
	)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "query drinks error"})
		return
	}
	for rows.Next() {
		var (
			id          int
			subCategory string
			name        string
			price       sql.NullFloat64
			desc        sql.NullString
		)
		if err := rows.Scan(&id, &subCategory, &name, &price, &desc); err != nil {
			continue
		}
		var p *float64
		if price.Valid {
			v := price.Float64
			p = &v
		}
		var d *string
		if desc.Valid {
			txt := desc.String
			d = &txt
		}

		menu = append(menu, MenuItem{
			ID:            id,
			Section:       "drink",
			SubCategory:   subCategory,
			Name:          name,
			Category:      subCategory, // mapping ง่าย ๆ: ใช้ subCategory เป็น category
			Price:         p,
			OriginalPrice: 0,
			Image:         "",
			Description:   d,
			IsAvailable:   true,
			Tags:          []string{},
			Featured:      false,
		})
	}
	rows.Close()

	// ---- FOODS ----
	rows, err = db.Query(`
		SELECT id, sub_category, name, price, description
		FROM foods
		ORDER BY id`,
	)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "query foods error"})
		return
	}
	for rows.Next() {
		var (
			id          int
			subCategory string
			name        string
			price       sql.NullFloat64
			desc        sql.NullString
		)
		if err := rows.Scan(&id, &subCategory, &name, &price, &desc); err != nil {
			continue
		}
		var p *float64
		if price.Valid {
			v := price.Float64
			p = &v
		}
		var d *string
		if desc.Valid {
			txt := desc.String
			d = &txt
		}

		menu = append(menu, MenuItem{
			ID:            id,
			Section:       "food",
			SubCategory:   subCategory,
			Name:          name,
			Category:      subCategory,
			Price:         p,
			OriginalPrice: 0,
			Image:         "",
			Description:   d,
			IsAvailable:   true,
			Tags:          []string{},
			Featured:      false,
		})
	}
	rows.Close()

	// ---- DESSERTS ----
	rows, err = db.Query(`
		SELECT id, sub_category, name, price, description
		FROM desserts
		ORDER BY id`,
	)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "query desserts error"})
		return
	}
	for rows.Next() {
		var (
			id          int
			subCategory string
			name        string
			price       sql.NullFloat64
			desc        sql.NullString
		)
		if err := rows.Scan(&id, &subCategory, &name, &price, &desc); err != nil {
			continue
		}
		var p *float64
		if price.Valid {
			v := price.Float64
			p = &v
		}
		var d *string
		if desc.Valid {
			txt := desc.String
			d = &txt
		}

		menu = append(menu, MenuItem{
			ID:            id,
			Section:       "dessert",
			SubCategory:   subCategory,
			Name:          name,
			Category:      subCategory,
			Price:         p,
			OriginalPrice: 0,
			Image:         "",
			Description:   d,
			IsAvailable:   true,
			Tags:          []string{},
			Featured:      false,
		})
	}
	rows.Close()

	c.JSON(http.StatusOK, menu)
}

// ======================= DRINKS HANDLERS =======================

// GetDrinks godoc
// @Summary      List drinks
// @Tags         Drinks
// @Produce      json
// @Success      200  {array}   Drink
// @Router       /drinks [get]
func GetDrinks(c *gin.Context) {
	rows, err := db.Query(`
		SELECT id, sub_category, name, price, description
		FROM drinks
		ORDER BY id`,
	)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "query error"})
		return
	}
	defer rows.Close()

	var drinks []Drink

	for rows.Next() {
		var (
			id          int
			subCategory string
			name        string
			price       sql.NullFloat64
			desc        sql.NullString
		)

		if err := rows.Scan(&id, &subCategory, &name, &price, &desc); err != nil {
			continue
		}

		var p *float64
		if price.Valid {
			v := price.Float64
			p = &v
		}
		var d *string
		if desc.Valid {
			txt := desc.String
			d = &txt
		}

		drinks = append(drinks, Drink{
			ID:            id,
			Section:       "drink",
			SubCategory:   subCategory,
			Name:          name,
			Category:      subCategory,
			Price:         p,
			OriginalPrice: 0,
			Image:         "",
			Description:   d,
			IsAvailable:   true,
			Tags:          []string{},
			Featured:      false,
		})
	}

	c.JSON(http.StatusOK, drinks)
}

// CreateDrink godoc
// @Summary      Create drink
// @Tags         Drinks
// @Accept       json
// @Produce      json
// @Param        data  body      Drink  true  "drink data"
// @Success      201   {object}  Drink
// @Router       /drinks [post]
func CreateDrink(c *gin.Context) {
	var d Drink

	if err := c.ShouldBindJSON(&d); err != nil {
		c.JSON(400, ErrorResponse{Error: "invalid json"})
		return
	}

	if d.Name == "" || d.SubCategory == "" {
		c.JSON(400, ErrorResponse{Error: "name and subCategory required"})
		return
	}

	var id int
	err := db.QueryRow(`
		INSERT INTO drinks (sub_category, name, price, description)
		VALUES ($1, $2, $3, $4)
		RETURNING id
	`, d.SubCategory, d.Name, d.Price, d.Description).Scan(&id)

	if err != nil {
		c.JSON(500, ErrorResponse{Error: "insert error"})
		return
	}

	d.ID = id
	d.Section = "drink"
	if d.Category == "" {
		d.Category = d.SubCategory
	}
	d.OriginalPrice = 0
	if d.Image == "" {
		d.Image = ""
	}
	d.IsAvailable = true
	if d.Tags == nil {
		d.Tags = []string{}
	}

	c.JSON(201, d)
}

// GetDrinksByName godoc
// @Summary      Get drinks by name
// @Tags         Drinks
// @Produce      json
// @Param        name   path      string  true  "Drink name"
// @Success      200    {array}   Drink
// @Router       /drinks/{name} [get]
func GetDrinksByName(c *gin.Context) {
	name := c.Param("name")

	rows, err := db.Query(`
		SELECT id, sub_category, name, price, description
		FROM drinks
		WHERE name = $1
		ORDER BY id
	`, name)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "query error"})
		return
	}
	defer rows.Close()

	var drinks []Drink

	for rows.Next() {
		var (
			id          int
			subCategory string
			nm          string
			price       sql.NullFloat64
			desc        sql.NullString
		)

		if err := rows.Scan(&id, &subCategory, &nm, &price, &desc); err != nil {
			continue
		}

		var p *float64
		if price.Valid {
			v := price.Float64
			p = &v
		}
		var dsc *string
		if desc.Valid {
			txt := desc.String
			dsc = &txt
		}

		drinks = append(drinks, Drink{
			ID:            id,
			Section:       "drink",
			SubCategory:   subCategory,
			Name:          nm,
			Category:      subCategory,
			Price:         p,
			OriginalPrice: 0,
			Image:         "",
			Description:   dsc,
			IsAvailable:   true,
			Tags:          []string{},
			Featured:      false,
		})
	}

	if len(drinks) == 0 {
		c.JSON(http.StatusNotFound, ErrorResponse{Error: "not found"})
		return
	}

	c.JSON(http.StatusOK, drinks)
}

// UpdateDrinksByName godoc
// @Summary      Update drinks by name (only name & price)
// @Description  อัปเดตเฉพาะช่อง name และ/หรือ price ของทุกแถวที่มีชื่อตรงกับพารามิเตอร์
// @Tags         Drinks
// @Accept       json
// @Produce      json
// @Param        name   path      string              true  "Current drink name"
// @Param        data   body      UpdateDrinkRequest  true  "Fields to update (name and/or price)"
// @Success      200    {object}  map[string]int      "Number of rows updated"
// @Failure      400    {object}  ErrorResponse       "Invalid request body"
// @Failure      404    {object}  ErrorResponse       "Drink not found"
// @Failure      500    {object}  ErrorResponse       "Update error"
// @Router       /drinks/{name} [put]
func UpdateDrinksByName(c *gin.Context) {
	nameParam := c.Param("name")

	var req UpdateDrinkRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, ErrorResponse{Error: "invalid json"})
		return
	}

	res, err := db.Exec(`
        UPDATE drinks
        SET name  = COALESCE($1, name),
            price = COALESCE($2, price)
        WHERE name = $3
    `,
		req.Name,
		req.Price,
		nameParam,
	)

	if err != nil {
		c.JSON(500, ErrorResponse{Error: "update error"})
		return
	}

	affected, _ := res.RowsAffected()
	if affected == 0 {
		c.JSON(http.StatusNotFound, ErrorResponse{Error: "not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"updated": affected})
}



// DeleteDrinksByName godoc
// @Summary      Delete drinks by name
// @Tags         Drinks
// @Produce      json
// @Param        name   path      string  true  "Drink name"
// @Success      200    {object}  map[string]int
// @Router       /drinks/{name} [delete]
func DeleteDrinksByName(c *gin.Context) {
	name := c.Param("name")

	res, err := db.Exec(`
		DELETE FROM drinks
		WHERE name = $1
	`, name)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "delete error"})
		return
	}

	affected, _ := res.RowsAffected()
	if affected == 0 {
		c.JSON(http.StatusNotFound, ErrorResponse{Error: "not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"deleted": affected})
}

// ======================= FOODS HANDLERS =======================

// GetFoods godoc
// @Summary      List foods
// @Tags         Foods
// @Produce      json
// @Success      200  {array}   Food
// @Router       /foods [get]
func GetFoods(c *gin.Context) {
	rows, err := db.Query(`
		SELECT id, sub_category, name, price, description
		FROM foods
		ORDER BY id`,
	)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "query error"})
		return
	}
	defer rows.Close()

	var foods []Food

	for rows.Next() {
		var (
			id          int
			subCategory string
			name        string
			price       sql.NullFloat64
			desc        sql.NullString
		)

		if err := rows.Scan(&id, &subCategory, &name, &price, &desc); err != nil {
			continue
		}

		var p *float64
		if price.Valid {
			v := price.Float64
			p = &v
		}
		var d *string
		if desc.Valid {
			txt := desc.String
			d = &txt
		}

		foods = append(foods, Food{
			ID:            id,
			Section:       "food",
			SubCategory:   subCategory,
			Name:          name,
			Category:      subCategory,
			Price:         p,
			OriginalPrice: 0,
			Image:         "",
			Description:   d,
			IsAvailable:   true,
			Tags:          []string{},
			Featured:      false,
		})
	}

	c.JSON(http.StatusOK, foods)
}

// CreateFood godoc
// @Summary      Create food
// @Tags         Foods
// @Accept       json
// @Produce      json
// @Param        data  body      Food  true  "food data"
// @Success      201   {object}  Food
// @Router       /foods [post]
func CreateFood(c *gin.Context) {
	var f Food

	if err := c.ShouldBindJSON(&f); err != nil {
		c.JSON(400, ErrorResponse{Error: "invalid json"})
		return
	}

	if f.Name == "" || f.SubCategory == "" {
		c.JSON(400, ErrorResponse{Error: "name and subCategory required"})
		return
	}

	var id int
	err := db.QueryRow(`
		INSERT INTO foods (sub_category, name, price, description)
		VALUES ($1, $2, $3, $4)
		RETURNING id
	`, f.SubCategory, f.Name, f.Price, f.Description).Scan(&id)

	if err != nil {
		c.JSON(500, ErrorResponse{Error: "insert error"})
		return
	}

	f.ID = id
	f.Section = "food"
	if f.Category == "" {
		f.Category = f.SubCategory
	}
	f.OriginalPrice = 0
	if f.Image == "" {
		f.Image = ""
	}
	f.IsAvailable = true
	if f.Tags == nil {
		f.Tags = []string{}
	}

	c.JSON(201, f)
}

// GetFoodsByName godoc
// @Summary      Get foods by name
// @Tags         Foods
// @Produce      json
// @Param        name   path      string  true  "Food name"
// @Success      200    {array}   Food
// @Router       /foods/{name} [get]
func GetFoodsByName(c *gin.Context) {
	name := c.Param("name")

	rows, err := db.Query(`
		SELECT id, sub_category, name, price, description
		FROM foods
		WHERE name = $1
		ORDER BY id
	`, name)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "query error"})
		return
	}
	defer rows.Close()

	var foods []Food

	for rows.Next() {
		var (
			id          int
			subCategory string
			nm          string
			price       sql.NullFloat64
			desc        sql.NullString
		)

		if err := rows.Scan(&id, &subCategory, &nm, &price, &desc); err != nil {
			continue
		}

		var p *float64
		if price.Valid {
			v := price.Float64
			p = &v
		}
		var d *string
		if desc.Valid {
			txt := desc.String
			d = &txt
		}

		foods = append(foods, Food{
			ID:            id,
			Section:       "food",
			SubCategory:   subCategory,
			Name:          nm,
			Category:      subCategory,
			Price:         p,
			OriginalPrice: 0,
			Image:         "",
			Description:   d,
			IsAvailable:   true,
			Tags:          []string{},
			Featured:      false,
		})
	}

	if len(foods) == 0 {
		c.JSON(http.StatusNotFound, ErrorResponse{Error: "not found"})
		return
	}

	c.JSON(http.StatusOK, foods)
}

// UpdateFoodsByName godoc
// @Summary      Update foods by name
// @Tags         Foods
// @Accept       json
// @Produce      json
// @Param        name   path      string  true  "Food name"
// @Param        food   body      Food    true  "Updated food data (อัปเดตทุกแถวที่ชื่อนี้)"
// @Success      200    {object}  map[string]int
// @Router       /foods/{name} [put]
func UpdateFoodsByName(c *gin.Context) {
	nameParam := c.Param("name")
	var f Food

	if err := c.ShouldBindJSON(&f); err != nil {
		c.JSON(400, ErrorResponse{Error: "invalid json"})
		return
	}

	res, err := db.Exec(`
		UPDATE foods
		SET sub_category = COALESCE($1, sub_category),
		    name          = COALESCE($2, name),
		    price         = $3,
		    description   = $4
		WHERE name = $5
	`,
		nullableString(f.SubCategory),
		nullableString(f.Name),
		f.Price,
		f.Description,
		nameParam,
	)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "update error"})
		return
	}

	affected, _ := res.RowsAffected()
	if affected == 0 {
		c.JSON(http.StatusNotFound, ErrorResponse{Error: "not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"updated": affected})
}

 
// DeleteFoodsByName godoc
// @Summary      Delete foods by name
// @Tags         Foods
// @Produce      json
// @Param        name   path      string  true  "Food name"
// @Success      200    {object}  map[string]int
// @Router       /foods/{name} [delete]
func DeleteFoodsByName(c *gin.Context) {
	name := c.Param("name")

	res, err := db.Exec(`
		DELETE FROM foods
		WHERE name = $1
	`, name)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "delete error"})
		return
	}

	affected, _ := res.RowsAffected()
	if affected == 0 {
		c.JSON(http.StatusNotFound, ErrorResponse{Error: "not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"deleted": affected})
}

// ======================= DESSERTS HANDLERS =======================

// GetDesserts godoc
// @Summary      List desserts
// @Tags         Desserts
// @Produce      json
// @Success      200  {array}   Dessert
// @Router       /desserts [get]
func GetDesserts(c *gin.Context) {
	rows, err := db.Query(`
		SELECT id, sub_category, name, price, description
		FROM desserts
		ORDER BY id`,
	)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "query error"})
		return
	}
	defer rows.Close()

	var desserts []Dessert

	for rows.Next() {
		var (
			id          int
			subCategory string
			name        string
			price       sql.NullFloat64
			desc        sql.NullString
		)

		if err := rows.Scan(&id, &subCategory, &name, &price, &desc); err != nil {
			continue
		}

		var p *float64
		if price.Valid {
			v := price.Float64
			p = &v
		}
		var d *string
		if desc.Valid {
			txt := desc.String
			d = &txt
		}

		desserts = append(desserts, Dessert{
			ID:            id,
			Section:       "dessert",
			SubCategory:   subCategory,
			Name:          name,
			Category:      subCategory,
			Price:         p,
			OriginalPrice: 0,
			Image:         "",
			Description:   d,
			IsAvailable:   true,
			Tags:          []string{},
			Featured:      false,
		})
	}

	c.JSON(http.StatusOK, desserts)
}

// CreateDessert godoc
// @Summary      Create dessert
// @Tags         Desserts
// @Accept       json
// @Produce      json
// @Param        data  body      Dessert  true  "dessert data"
// @Success      201   {object}  Dessert
// @Router       /desserts [post]
func CreateDessert(c *gin.Context) {
	var d Dessert

	if err := c.ShouldBindJSON(&d); err != nil {
		c.JSON(400, ErrorResponse{Error: "invalid json"})
		return
	}

	if d.Name == "" || d.SubCategory == "" {
		c.JSON(400, ErrorResponse{Error: "name and subCategory required"})
		return
	}

	var id int
	err := db.QueryRow(`
		INSERT INTO desserts (sub_category, name, price, description)
		VALUES ($1, $2, $3, $4)
		RETURNING id
	`, d.SubCategory, d.Name, d.Price, d.Description).Scan(&id)

	if err != nil {
		c.JSON(500, ErrorResponse{Error: "insert error"})
		return
	}

	d.ID = id
	d.Section = "dessert"
	if d.Category == "" {
		d.Category = d.SubCategory
	}
	d.OriginalPrice = 0
	if d.Image == "" {
		d.Image = ""
	}
	d.IsAvailable = true
	if d.Tags == nil {
		d.Tags = []string{}
	}

	c.JSON(201, d)
}

// GetDessertsByName godoc
// @Summary      Get desserts by name
// @Tags         Desserts
// @Produce      json
// @Param        name   path      string  true  "Dessert name"
// @Success      200    {array}   Dessert
// @Router       /desserts/{name} [get]
func GetDessertsByName(c *gin.Context) {
	name := c.Param("name")

	rows, err := db.Query(`
		SELECT id, sub_category, name, price, description
		FROM desserts
		WHERE name = $1
		ORDER BY id
	`, name)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "query error"})
		return
	}
	defer rows.Close()

	var desserts []Dessert

	for rows.Next() {
		var (
			id          int
			subCategory string
			nm          string
			price       sql.NullFloat64
			desc        sql.NullString
		)

		if err := rows.Scan(&id, &subCategory, &nm, &price, &desc); err != nil {
			continue
		}

		var p *float64
		if price.Valid {
			v := price.Float64
			p = &v
		}
		var d *string
		if desc.Valid {
			txt := desc.String
			d = &txt
		}

		desserts = append(desserts, Dessert{
			ID:            id,
			Section:       "dessert",
			SubCategory:   subCategory,
			Name:          nm,
			Category:      subCategory,
			Price:         p,
			OriginalPrice: 0,
			Image:         "",
			Description:   d,
			IsAvailable:   true,
			Tags:          []string{},
			Featured:      false,
		})
	}

	if len(desserts) == 0 {
		c.JSON(http.StatusNotFound, ErrorResponse{Error: "not found"})
		return
	}

	c.JSON(http.StatusOK, desserts)
}

// UpdateDessertsByName godoc
// @Summary      Update desserts by name
// @Tags         Desserts
// @Accept       json
// @Produce      json
// @Param        name    path      string   true  "Dessert name"
// @Param        dessert body      Dessert  true  "Updated dessert data (อัปเดตทุกแถวที่ชื่อนี้)"
// @Success      200     {object}  map[string]int
// @Router       /desserts/{name} [put]
func UpdateDessertsByName(c *gin.Context) {
	nameParam := c.Param("name")
	var d Dessert

	if err := c.ShouldBindJSON(&d); err != nil {
		c.JSON(400, ErrorResponse{Error: "invalid json"})
		return
	}

	res, err := db.Exec(`
		UPDATE desserts
		SET sub_category = COALESCE($1, sub_category),
		    name          = COALESCE($2, name),
		    price         = $3,
		    description   = $4
		WHERE name = $5
	`,
		nullableString(d.SubCategory),
		nullableString(d.Name),
		d.Price,
		d.Description,
		nameParam,
	)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "update error"})
		return
	}

	affected, _ := res.RowsAffected()
	if affected == 0 {
		c.JSON(http.StatusNotFound, ErrorResponse{Error: "not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"updated": affected})
}

 
// DeleteDessertsByName godoc
// @Summary      Delete desserts by name
// @Tags         Desserts
// @Produce      json
// @Param        name   path      string  true  "Dessert name"
// @Success      200    {object}  map[string]int
// @Router       /desserts/{name} [delete]
func DeleteDessertsByName(c *gin.Context) {
	name := c.Param("name")

	res, err := db.Exec(`
		DELETE FROM desserts
		WHERE name = $1
	`, name)
	if err != nil {
		c.JSON(500, ErrorResponse{Error: "delete error"})
		return
	}

	affected, _ := res.RowsAffected()
	if affected == 0 {
		c.JSON(http.StatusNotFound, ErrorResponse{Error: "not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"deleted": affected})
}

// ======================= HELPERS =======================

// แปลง string เป็น pointer สำหรับใช้กับ COALESCE
func nullableString(s string) *string {
	if s == "" {
		return nil
	}
	return &s
}
