// src/data/menuData.js
// ข้อมูลเมนูทั้งหมดสำหรับร้าน TLTB Café (เวอร์ชันไม่มี drinkType แล้ว)

export const menuItems = [
  // ======================
  // DRINKS : นม + ชา/โกโก้/โอวัลติน/ไมโล/มอลต์ (sub_category = 'นม')
  // ======================
  {
    id: 1001,
    section: "drink",
    subCategory: "นม",
    name: "นมสด",
    category: "ชา / โกโก้ / โอวัลติน / ไมโล / มอลต์",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "นมสดเย็น หวานมันกำลังดี ดื่มง่ายระหว่างอ่านหนังสือ",
    isAvailable: true,
    tags: ["นม", "นมสด"],
    featured: true
  },
  {
    id: 1002,
    section: "drink",
    subCategory: "นม",
    name: "นมชมพู",
    category: "ชา / โกโก้ / โอวัลติน / ไมโล / มอลต์",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "นมชมพูสไตล์เด็กโรงเรียน หวานหอมอม nostalgic",
    isAvailable: true,
    tags: ["นม", "นมชมพู"],
    featured: false
  },
  {
    id: 1003,
    section: "drink",
    subCategory: "นม",
    name: "นมคาราเมล",
    category: "ชา / โกโก้ / โอวัลติน / ไมโล / มอลต์",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "นมคาราเมล หวานมัน หอมกลิ่นคาราเมลสุด ๆ",
    isAvailable: true,
    tags: ["นม", "คาราเมล"],
    featured: false
  },
  {
    id: 1004,
    section: "drink",
    subCategory: "นม",
    name: "นมสดสตรอเบอรี่",
    category: "ชา / โกโก้ / โอวัลติน / ไมโล / มอลต์",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "นมสดรสสตรอว์เบอร์รี่ สีชมพูละมุน",
    isAvailable: true,
    tags: ["นม", "สตรอว์เบอร์รี่"],
    featured: false
  },

  // ชา / โกโก้ / โอวัลติน / ไมโล / มอลต์ (ยังใช้ subCategory = 'นม' ตาม SQL)
  {
    id: 1005,
    section: "drink",
    subCategory: "นม",
    name: "ชาไทย",
    category: "ชา / โกโก้ / โอวัลติน / ไมโล / มอลต์",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "ชาไทยหอม ๆ รสนมเข้มข้น ดื่มแล้วตื่น",
    isAvailable: true,
    tags: ["ชาไทย", "ชา"],
    featured: true
  },
  {
    id: 1006,
    section: "drink",
    subCategory: "นม",
    name: "ชาเขียว",
    category: "ชา / โกโก้ / โอวัลติน / ไมโล / มอลต์",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "ชาเขียวรสนม หอมละมุน ดื่มง่าย",
    isAvailable: true,
    tags: ["ชาเขียว", "ชา"],
    featured: false
  },
  {
    id: 1007,
    section: "drink",
    subCategory: "นม",
    name: "โกโก้",
    category: "ชา / โกโก้ / โอวัลติน / ไมโล / มอลต์",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "โกโก้เข้มข้น ช่วยปลุกสมองเวลาอ่านหนังสือดึก ๆ",
    isAvailable: true,
    tags: ["โกโก้"],
    featured: true
  },
  {
    id: 1008,
    section: "drink",
    subCategory: "นม",
    name: "โอวัลติน",
    category: "ชา / โกโก้ / โอวัลติน / ไมโล / มอลต์",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "โอวัลตินสุดคลาสสิก หอมมัน",
    isAvailable: true,
    tags: ["โอวัลติน"],
    featured: false
  },
  {
    id: 1009,
    section: "drink",
    subCategory: "นม",
    name: "ไมโล",
    category: "ชา / โกโก้ / โอวัลติน / ไมโล / มอลต์",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "ไมโลหวานกลมกล่อมสายกีฬา",
    isAvailable: true,
    tags: ["ไมโล"],
    featured: false
  },
  {
    id: 1010,
    section: "drink",
    subCategory: "นม",
    name: "ไวท์มอลต์",
    category: "ชา / โกโก้ / โอวัลติน / ไมโล / มอลต์",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "ไวท์มอลต์หอม ๆ หวานละมุน",
    isAvailable: true,
    tags: ["มอลต์"],
    featured: false
  },

  // ======================
  // DRINKS : กาแฟ
  // ======================
  {
    id: 1101,
    section: "drink",
    subCategory: "กาแฟ",
    name: "อเมริกาโน่",
    category: "กาแฟ",
    price: 70,
    originalPrice: 0,
    image: "",
    description: "อเมริกาโน่สำหรับสายเข้ม ไม่ใส่นม",
    isAvailable: true,
    tags: ["กาแฟดำ", "อเมริกาโน่"],
    featured: true
  },
  {
    id: 1102,
    section: "drink",
    subCategory: "กาแฟ",
    name: "อเมริกาโน่น้ำผึ้งมะนาว",
    category: "กาแฟ",
    price: 70,
    originalPrice: 0,
    image: "",
    description: "อเมริกาโน่ผสมน้ำผึ้งมะนาว สดชื่น หวานอมเปรี้ยว",
    isAvailable: true,
    tags: ["กาแฟ", "น้ำผึ้งมะนาว"],
    featured: false
  },
  {
    id: 1103,
    section: "drink",
    subCategory: "กาแฟ",
    name: "อเมริกาโน่น้ำส้ม",
    category: "กาแฟ",
    price: 70,
    originalPrice: 0,
    image: "",
    description: "อเมริกาโน่ผสมน้ำส้ม สายคาเฟอีนแบบสดใส",
    isAvailable: true,
    tags: ["กาแฟ", "น้ำส้ม"],
    featured: false
  },
  {
    id: 1104,
    section: "drink",
    subCategory: "กาแฟ",
    name: "ลาเต้",
    category: "กาแฟ",
    price: 70,
    originalPrice: 0,
    image: "",
    description: "ลาเต้รสนมนุ่มละมุน เหมาะสำหรับนั่งทำรายงานยาว ๆ",
    isAvailable: true,
    tags: ["กาแฟนม", "ลาเต้"],
    featured: true
  },
  {
    id: 1105,
    section: "drink",
    subCategory: "กาแฟ",
    name: "คาปูชิโน่",
    category: "กาแฟ",
    price: 70,
    originalPrice: 0,
    image: "",
    description: "คาปูชิโน่ฟองนมหนา ๆ สำหรับสายคาเฟ่",
    isAvailable: true,
    tags: ["กาแฟนม", "คาปูชิโน่"],
    featured: false
  },
  {
    id: 1106,
    section: "drink",
    subCategory: "กาแฟ",
    name: "เอสเพรสโซ",
    category: "กาแฟ",
    price: 70,
    originalPrice: 0,
    image: "",
    description: "ช็อตเอสเพรสโซเข้มข้น ปลุกให้ตาสว่างทันที",
    isAvailable: true,
    tags: ["กาแฟดำ", "เอสเพรสโซ"],
    featured: false
  },

  // ======================
  // DRINKS : โซดา
  // ======================
  {
    id: 1201,
    section: "drink",
    subCategory: "โซดา",
    name: "แดงมะนาวโซดา",
    category: "โซดา",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "แดงมะนาวโซดาซ่า ๆ เปรี้ยวหวานสดชื่น",
    isAvailable: true,
    tags: ["โซดา", "แดงมะนาว"],
    featured: true
  },
  {
    id: 1202,
    section: "drink",
    subCategory: "โซดา",
    name: "บ๊วยโซดา",
    category: "โซดา",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "บ๊วยโซดา เปรี้ยวเค็มนิด ๆ ซ่ากำลังดี",
    isAvailable: true,
    tags: ["โซดา", "บ๊วย"],
    featured: false
  },
  {
    id: 1203,
    section: "drink",
    subCategory: "โซดา",
    name: "อัญชันน้ำผึ้งมะนาว",
    category: "โซดา",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "อัญชันผสมน้ำผึ้งมะนาว สีสวย ถ่ายรูปสวย",
    isAvailable: true,
    tags: ["โซดา", "อัญชัน"],
    featured: false
  },
  {
    id: 1204,
    section: "drink",
    subCategory: "โซดา",
    name: "น้ำผึ้งมะนาวโซดา",
    category: "โซดา",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "น้ำผึ้งมะนาวโซดา สดชื่น หวานอมเปรี้ยว",
    isAvailable: true,
    tags: ["โซดา", "น้ำผึ้งมะนาว"],
    featured: false
  },
  {
    id: 1205,
    section: "drink",
    subCategory: "โซดา",
    name: "น้ำแดงน้ำผึ้งมะนาว",
    category: "โซดา",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "น้ำแดงพูนความหวาน ผสมน้ำผึ้งมะนาวแก้ง่วง",
    isAvailable: true,
    tags: ["โซดา", "น้ำแดง"],
    featured: false
  },
  {
    id: 1206,
    section: "drink",
    subCategory: "โซดา",
    name: "อิตาเลี่ยนโซดา",
    category: "โซดา",
    price: 50,
    originalPrice: 0,
    image: "",
    description: "อิตาเลียนโซดา สไตล์คาเฟ่ ฟีลสดชื่น",
    isAvailable: true,
    tags: ["โซดา", "อิตาเลียนโซดา"],
    featured: false
  },

  // ======================
  // DRINKS : มัทฉะ
  // ======================
  {
    id: 1301,
    section: "drink",
    subCategory: "มัทฉะ",
    name: "มัทฉะลาเต้",
    category: "มัทฉะ",
    price: 70,
    originalPrice: 0,
    image: "",
    description: "มัทฉะผสมนม หอมแบบญี่ปุ่น",
    isAvailable: true,
    tags: ["มัทฉะ", "ชาเขียว"],
    featured: true
  },
  {
    id: 1302,
    section: "drink",
    subCategory: "มัทฉะ",
    name: "มัทฉะโฟมมะพร้าว",
    category: "มัทฉะ",
    price: 70,
    originalPrice: 0,
    image: "",
    description: "มัทฉะท็อปโฟมมะพร้าว หอมมัน",
    isAvailable: true,
    tags: ["มัทฉะ", "มะพร้าว"],
    featured: false
  },
  {
    id: 1303,
    section: "drink",
    subCategory: "มัทฉะ",
    name: "มัทฉะสตอเบอรี่",
    category: "มัทฉะ",
    price: 70,
    originalPrice: 0,
    image: "",
    description: "มัทฉะผสมสตรอว์เบอร์รี่ หวานอมเปรี้ยว",
    isAvailable: true,
    tags: ["มัทฉะ", "สตรอว์เบอร์รี่"],
    featured: false
  },
  {
    id: 1304,
    section: "drink",
    subCategory: "มัทฉะ",
    name: "เพียวมัทฉะ",
    category: "มัทฉะ",
    price: 70,
    originalPrice: 0,
    image: "",
    description: "เพียวมัทฉะ เข้ม ๆ สำหรับสายชาเขียวแท้",
    isAvailable: true,
    tags: ["มัทฉะ"],
    featured: false
  },

  // ======================
  // DRINKS : สมูทตี้
  // ======================
  {
    id: 1401,
    section: "drink",
    subCategory: "สมูทตี้",
    name: "สมูทตี้สตรอว์เบอร์รี่",
    category: "สมูทตี้",
    price: 65,
    originalPrice: 0,
    image: "",
    description: "สมูทตี้สตรอว์เบอร์รี่ เปรี้ยวหวานเย็นชื่นใจ",
    isAvailable: true,
    tags: ["สมูทตี้", "สตรอว์เบอร์รี่"],
    featured: true
  },
  {
    id: 1402,
    section: "drink",
    subCategory: "สมูทตี้",
    name: "สมูทตี้บลูเบอร์รี่",
    category: "สมูทตี้",
    price: 65,
    originalPrice: 0,
    image: "",
    description: "สมูทตี้บลูเบอร์รี่ หอมผลไม้ตระกูลเบอร์รี่",
    isAvailable: true,
    tags: ["สมูทตี้", "บลูเบอร์รี่"],
    featured: false
  },
  {
    id: 1403,
    section: "drink",
    subCategory: "สมูทตี้",
    name: "ส้มโยเกิร์ตสมูทตี้",
    category: "สมูทตี้",
    price: 65,
    originalPrice: 0,
    image: "",
    description: "สมูทตี้ส้มโยเกิร์ต เปรี้ยวหวานสดชื่น",
    isAvailable: true,
    tags: ["สมูทตี้", "โยเกิร์ต"],
    featured: false
  },
  {
    id: 1404,
    section: "drink",
    subCategory: "สมูทตี้",
    name: "สมูทตี้รวมเบอร์รี่",
    category: "สมูทตี้",
    price: 65,
    originalPrice: 0,
    image: "",
    description: "สมูทตี้รวมเบอร์รี่ หลากรสในแก้วเดียว",
    isAvailable: true,
    tags: ["สมูทตี้", "เบอร์รี่"],
    featured: false
  },
  {
    id: 1405,
    section: "drink",
    subCategory: "สมูทตี้",
    name: "โอริโอ้ปั่น",
    category: "สมูทตี้",
    price: 65,
    originalPrice: 0,
    image: "",
    description: "โอริโอ้ปั่น หวานครีมมี่ ขวัญใจสายขนม",
    isAvailable: true,
    tags: ["สมูทตี้", "โอริโอ้"],
    featured: false
  },
  {
    id: 1406,
    section: "drink",
    subCategory: "สมูทตี้",
    name: "เนสวีต้าปั่น",
    category: "สมูทตี้",
    price: 65,
    originalPrice: 0,
    image: "",
    description: "เนสวีต้าปั่น หอมธัญพืชละมุน ๆ",
    isAvailable: true,
    tags: ["สมูทตี้", "เนสวีต้า"],
    featured: false
  },

  // ======================
  // DRINKS : น้ำเปล่า / น้ำอัดลม / เบียร์ / น้ำแข็ง (sub_category = NULL)
  // ======================
  {
    id: 1501,
    section: "drink",
    subCategory: null,
    name: "น้ำเปล่า",
    category: "น้ำเปล่า / น้ำอัดลม / เบียร์",
    price: 15,
    originalPrice: 0,
    image: "",
    description: "น้ำเปล่าบรรจุขวด",
    isAvailable: true,
    tags: ["น้ำเปล่า"],
    featured: false
  },
  {
    id: 1502,
    section: "drink",
    subCategory: null,
    name: "โค้ก",
    category: "น้ำเปล่า / น้ำอัดลม / เบียร์",
    price: 20,
    originalPrice: 0,
    image: "",
    description: "น้ำอัดลมโค้กซ่า ๆ",
    isAvailable: true,
    tags: ["น้ำอัดลม", "โค้ก"],
    featured: false
  },
  {
    id: 1503,
    section: "drink",
    subCategory: null,
    name: "เบียร์สิงห์",
    category: "น้ำเปล่า / น้ำอัดลม / เบียร์",
    price: 90,
    originalPrice: 0,
    image: "",
    description: "เบียร์สิงห์เย็น ๆ (จำหน่ายเฉพาะลูกค้าที่บรรลุนิติภาวะแล้ว)",
    isAvailable: true,
    tags: ["เบียร์"],
    featured: false
  },
  {
    id: 1504,
    section: "drink",
    subCategory: null,
    name: "เบียร์ลีโอ",
    category: "น้ำเปล่า / น้ำอัดลม / เบียร์",
    price: 80,
    originalPrice: 0,
    image: "",
    description: "เบียร์ลีโอ (จำหน่ายเฉพาะลูกค้าที่บรรลุนิติภาวะแล้ว)",
    isAvailable: true,
    tags: ["เบียร์"],
    featured: false
  },
  {
    id: 1505,
    section: "drink",
    subCategory: null,
    name: "สโนวี่ ไวเซ่น",
    category: "น้ำเปล่า / น้ำอัดลม / เบียร์",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "เบียร์สไตล์ไวเซ่น (จำหน่ายเฉพาะลูกค้าที่บรรลุนิติภาวะแล้ว)",
    isAvailable: true,
    tags: ["เบียร์"],
    featured: false
  },
  {
    id: 1506,
    section: "drink",
    subCategory: null,
    name: "สโนวี่ โรเซ่",
    category: "น้ำเปล่า / น้ำอัดลม / เบียร์",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "เบียร์รสผลไม้ (จำหน่ายเฉพาะลูกค้าที่บรรลุนิติภาวะแล้ว)",
    isAvailable: true,
    tags: ["เบียร์"],
    featured: false
  },
  {
    id: 1507,
    section: "drink",
    subCategory: null,
    name: "น้ำแข็งเปล่า(แก้ว)",
    category: "น้ำเปล่า / น้ำอัดลม / เบียร์",
    price: 5,
    originalPrice: 0,
    image: "",
    description: "น้ำแข็งใส่แก้ว",
    isAvailable: true,
    tags: ["น้ำแข็ง"],
    featured: false
  },
  {
    id: 1508,
    section: "drink",
    subCategory: null,
    name: "น้ำแข็งเปล่า(ถัง)",
    category: "น้ำเปล่า / น้ำอัดลม / เบียร์",
    price: 20,
    originalPrice: 0,
    image: "",
    description: "น้ำแข็งแบบถัง สำหรับหลายคน",
    isAvailable: true,
    tags: ["น้ำแข็ง"],
    featured: false
  },

  // ======================
  // DESSERTS : โทสต์ / ปังเย็น / ขนมปังปิ้ง
  // ======================

  // โทสต์
  {
    id: 2001,
    section: "dessert",
    subCategory: "โทสต์",
    name: "โทสต์สตรอว์เบอร์รี่",
    category: "โทสต์",
    price: null,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["โทสต์", "สตรอว์เบอร์รี่"],
    featured: true
  },
  {
    id: 2002,
    section: "dessert",
    subCategory: "โทสต์",
    name: "โทสต์ช็อกโกแลต",
    category: "โทสต์",
    price: null,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["โทสต์", "ช็อกโกแลต"],
    featured: false
  },
  {
    id: 2003,
    section: "dessert",
    subCategory: "โทสต์",
    name: "โทสต์โอรีโอ้",
    category: "โทสต์",
    price: null,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["โทสต์", "โอรีโอ้"],
    featured: false
  },
  {
    id: 2004,
    section: "dessert",
    subCategory: "โทสต์",
    name: "โทสต์คาราเมล",
    category: "โทสต์",
    price: null,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["โทสต์", "คาราเมล"],
    featured: false
  },
  {
    id: 2005,
    section: "dessert",
    subCategory: "โทสต์",
    name: "โทสต์ฮันนี่",
    category: "โทสต์",
    price: null,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["โทสต์", "ฮันนี่"],
    featured: false
  },

  // ปังเย็น
  {
    id: 2101,
    section: "dessert",
    subCategory: "ปังเย็น",
    name: "ปังเย็นช็อกโกแลต",
    category: "ปังเย็น",
    price: null,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ปังเย็น", "ช็อกโกแลต"],
    featured: false
  },
  {
    id: 2102,
    section: "dessert",
    subCategory: "ปังเย็น",
    name: "ปังเย็นโอรีโอ้",
    category: "ปังเย็น",
    price: null,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ปังเย็น", "โอรีโอ้"],
    featured: false
  },
  {
    id: 2103,
    section: "dessert",
    subCategory: "ปังเย็น",
    name: "ปังเย็นสตรอว์เบอร์รี่",
    category: "ปังเย็น",
    price: null,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ปังเย็น", "สตรอว์เบอร์รี่"],
    featured: false
  },
  {
    id: 2104,
    section: "dessert",
    subCategory: "ปังเย็น",
    name: "ปังเย็นคาราเมล",
    category: "ปังเย็น",
    price: null,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ปังเย็น", "คาราเมล"],
    featured: false
  },
  {
    id: 2105,
    section: "dessert",
    subCategory: "ปังเย็น",
    name: "ปังเย็นนมฮันนี่",
    category: "ปังเย็น",
    price: null,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ปังเย็น", "นมฮันนี่"],
    featured: false
  },

  // ขนมปังปิ้ง
  {
    id: 2201,
    section: "dessert",
    subCategory: "ขนมปังปิ้ง",
    name: "ขนมปังปิ้งชาไทย",
    category: "ขนมปังปิ้ง",
    price: 25,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ขนมปังปิ้ง", "ชาไทย"],
    featured: false
  },
  {
    id: 2202,
    section: "dessert",
    subCategory: "ขนมปังปิ้ง",
    name: "ขนมปังปิ้งช็อกโกแลต",
    category: "ขนมปังปิ้ง",
    price: 25,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ขนมปังปิ้ง", "ช็อกโกแลต"],
    featured: false
  },
  {
    id: 2203,
    section: "dessert",
    subCategory: "ขนมปังปิ้ง",
    name: "ขนมปังปิ้งช็อกโกแลตกล้วย",
    category: "ขนมปังปิ้ง",
    price: 25,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ขนมปังปิ้ง", "ช็อกโกแลต", "กล้วย"],
    featured: false
  },
  {
    id: 2204,
    section: "dessert",
    subCategory: "ขนมปังปิ้ง",
    name: "ขนมปังปิ้งนมสด",
    category: "ขนมปังปิ้ง",
    price: 25,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ขนมปังปิ้ง", "นม"],
    featured: false
  },
  {
    id: 2205,
    section: "dessert",
    subCategory: "ขนมปังปิ้ง",
    name: "ขนมปังปิ้งสตรอเบอร์รี่",
    category: "ขนมปังปิ้ง",
    price: 25,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ขนมปังปิ้ง", "สตรอว์เบอร์รี่"],
    featured: false
  },
  {
    id: 2206,
    section: "dessert",
    subCategory: "ขนมปังปิ้ง",
    name: "ขนมปังปิ้งเนยนม",
    category: "ขนมปังปิ้ง",
    price: 25,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ขนมปังปิ้ง", "เนยนม"],
    featured: false
  },
  {
    id: 2207,
    section: "dessert",
    subCategory: "ขนมปังปิ้ง",
    name: "ขนมปังปิ้งเนยน้ำตาล",
    category: "ขนมปังปิ้ง",
    price: 25,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ขนมปังปิ้ง", "น้ำตาล"],
    featured: false
  },

  // ======================
  // FOODS : อาหารจานเดียว
  // ======================
  {
    id: 3001,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวกะเพราหมู",
    category: "อาหารจานเดียว",
    price: 69,
    originalPrice: 0,
    image: "",
    description: "กะเพราหมูรสจัดจ้าน เสิร์ฟพร้อมข้าวสวยร้อน ๆ",
    isAvailable: true,
    tags: ["ข้าว", "กะเพรา"],
    featured: true
  },
  {
    id: 3002,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวกะเพราทะเล",
    category: "อาหารจานเดียว",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "กะเพรา", "ทะเล"],
    featured: false
  },
  {
    id: 3003,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวหมูกระเทียม",
    category: "อาหารจานเดียว",
    price: 69,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "หมูกระเทียม"],
    featured: false
  },
  {
    id: 3004,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวทะเลกระเทียม",
    category: "อาหารจานเดียว",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "ทะเล"],
    featured: false
  },
  {
    id: 3005,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวคะน้าหมูกรอบ",
    category: "อาหารจานเดียว",
    price: 79,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "หมูกรอบ"],
    featured: false
  },
  {
    id: 3006,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวยำไก่แซ่บ",
    category: "อาหารจานเดียว",
    price: 79,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "ยำ"],
    featured: false
  },
  {
    id: 3007,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวไก่กรอบซอสพะแนง",
    category: "อาหารจานเดียว",
    price: 79,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "ไก่กรอบ"],
    featured: false
  },
  {
    id: 3008,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวห่อหมกทะเลไข่ข้น",
    category: "อาหารจานเดียว",
    price: 99,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "ทะเล"],
    featured: false
  },
  {
    id: 3009,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวผัดพริกแกงหมู",
    category: "อาหารจานเดียว",
    price: 69,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "ผัดพริกแกง"],
    featured: false
  },
  {
    id: 3010,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวผัดพริกแกงทะเล",
    category: "อาหารจานเดียว",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "ผัดพริกแกง", "ทะเล"],
    featured: false
  },
  {
    id: 3011,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวหมูกรอบผัดพริกเกลือ",
    category: "อาหารจานเดียว",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "หมูกรอบ"],
    featured: false
  },
  {
    id: 3012,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวกุ้งผัดพริกเกลือ",
    category: "อาหารจานเดียว",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "กุ้ง"],
    featured: false
  },
  {
    id: 3013,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวกุ้งผัดพริกขี้หนู+ไข่ข้น",
    category: "อาหารจานเดียว",
    price: 99,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "กุ้ง"],
    featured: false
  },
  {
    id: 3014,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวผัดเขียวหวาน",
    category: "อาหารจานเดียว",
    price: 69,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "เขียวหวาน"],
    featured: false
  },
  {
    id: 3015,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวผัด",
    category: "อาหารจานเดียว",
    price: 69,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "ข้าวผัด"],
    featured: false
  },
  {
    id: 3016,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวผัดต้มยำ",
    category: "อาหารจานเดียว",
    price: 69,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "ต้มยำ"],
    featured: false
  },
  {
    id: 3017,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวผัดมันเนื้อ",
    category: "อาหารจานเดียว",
    price: 189,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "เนื้อ"],
    featured: false
  },
  {
    id: 3018,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวหน้าหมูทอด",
    category: "อาหารจานเดียว",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "หมูทอด"],
    featured: false
  },
  {
    id: 3019,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวหน้าไก่ทอด",
    category: "อาหารจานเดียว",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "ไก่ทอด"],
    featured: false
  },
  {
    id: 3020,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "คัตสึด้ง",
    category: "อาหารจานเดียว",
    price: 99,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["คัตสึด้ง"],
    featured: false
  },
  {
    id: 3021,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวหน้าไก่ซอสเทอริยากิ",
    category: "อาหารจานเดียว",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "เทอริยากิ"],
    featured: false
  },
  {
    id: 3022,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวหน้าหมูสามชั้นสไลด์",
    category: "อาหารจานเดียว",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "หมูสามชั้น"],
    featured: false
  },
  {
    id: 3023,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวหน้าหมูสันนอกสไลด์",
    category: "อาหารจานเดียว",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว", "หมูสันนอก"],
    featured: false
  },
  {
    id: 3024,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวไข่เจียว",
    category: "อาหารจานเดียว",
    price: 39,
    originalPrice: 0,
    image: "",
    description: "เมนูประหยัดสำหรับมื้อดึกของเด็กมหาลัย",
    isAvailable: true,
    tags: ["ข้าว", "ไข่เจียว", "โปรมื้อดึก"],
    featured: true
  },
  {
    id: 3025,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ต้มยำน้ำข้น",
    category: "อาหารจานเดียว",
    price: 79,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ต้มยำ"],
    featured: false
  },
  {
    id: 3026,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ต้มยำน้ำใส",
    category: "อาหารจานเดียว",
    price: 79,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ต้มยำ"],
    featured: false
  },
  {
    id: 3027,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ลาบทอด",
    category: "อาหารจานเดียว",
    price: 99,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ลาบ"],
    featured: false
  },
  {
    id: 3028,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "หมูคลุกฝุ่น",
    category: "อาหารจานเดียว",
    price: 99,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["หมู"],
    featured: false
  },
  {
    id: 3029,
    section: "food",
    subCategory: "อาหารจานเดียว",
    name: "ข้าวเปล่า",
    category: "อาหารจานเดียว",
    price: 10,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ข้าว"],
    featured: false
  },

  // ======================
  // FOODS : อาหารประเภทเส้น
  // ======================
  {
    id: 3101,
    section: "food",
    subCategory: "อาหารประเภทเส้น",
    name: "สปาเกตตีไวท์ซอส",
    category: "อาหารประเภทเส้น",
    price: 99,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["เส้น", "สปาเกตตี"],
    featured: false
  },
  {
    id: 3102,
    section: "food",
    subCategory: "อาหารประเภทเส้น",
    name: "สปาเกตตีไวท์ซอส + ไข่กุ้ง",
    category: "อาหารประเภทเส้น",
    price: 119,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["เส้น", "สปาเกตตี"],
    featured: false
  },
  {
    id: 3103,
    section: "food",
    subCategory: "อาหารประเภทเส้น",
    name: "สปาเกตตีเบคอนผัดพริกแห้ง",
    category: "อาหารประเภทเส้น",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["เส้น", "สปาเกตตี"],
    featured: false
  },
  {
    id: 3104,
    section: "food",
    subCategory: "อาหารประเภทเส้น",
    name: "สปาเกตตีขี้เมาทะเลรวม",
    category: "อาหารประเภทเส้น",
    price: 99,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["เส้น", "ทะเล"],
    featured: false
  },
  {
    id: 3105,
    section: "food",
    subCategory: "อาหารประเภทเส้น",
    name: "มาม่าต้มยำหมูกรอบ",
    category: "อาหารประเภทเส้น",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["มาม่า", "ต้มยำ"],
    featured: true
  },
  {
    id: 3106,
    section: "food",
    subCategory: "อาหารประเภทเส้น",
    name: "มาม่าต้มยำทะเล",
    category: "อาหารประเภทเส้น",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["มาม่า", "ทะเล"],
    featured: false
  },
  {
    id: 3107,
    section: "food",
    subCategory: "อาหารประเภทเส้น",
    name: "มาม่าต้มยำหมูสับ",
    category: "อาหารประเภทเส้น",
    price: 79,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["มาม่า"],
    featured: false
  },
  {
    id: 3108,
    section: "food",
    subCategory: "อาหารประเภทเส้น",
    name: "มาม่าขี้เมาหมู",
    category: "อาหารประเภทเส้น",
    price: 79,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["มาม่า"],
    featured: false
  },
  {
    id: 3109,
    section: "food",
    subCategory: "อาหารประเภทเส้น",
    name: "มาม่าขี้เมาไก่",
    category: "อาหารประเภทเส้น",
    price: 79,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["มาม่า"],
    featured: false
  },
  {
    id: 3110,
    section: "food",
    subCategory: "อาหารประเภทเส้น",
    name: "มาม่าขี้เมาทะเล",
    category: "อาหารประเภทเส้น",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["มาม่า", "ทะเล"],
    featured: false
  },
  {
    id: 3111,
    section: "food",
    subCategory: "อาหารประเภทเส้น",
    name: "มาม่ากะเพราหมู",
    category: "อาหารประเภทเส้น",
    price: 79,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["มาม่า", "กะเพรา"],
    featured: false
  },
  {
    id: 3112,
    section: "food",
    subCategory: "อาหารประเภทเส้น",
    name: "บะหมี่ไก่ซอสเทอริยากิ",
    category: "อาหารประเภทเส้น",
    price: 79,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["เส้น", "เทอริยากิ"],
    featured: false
  },

  // ======================
  // FOODS : ของทานเล่น
  // ======================
  {
    id: 3201,
    section: "food",
    subCategory: "ของทานเล่น",
    name: "เฟรนช์ฟรายส์",
    category: "ของทานเล่น",
    price: 59,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ของทานเล่น"],
    featured: false
  },
  {
    id: 3202,
    section: "food",
    subCategory: "ของทานเล่น",
    name: "ไก่ป๊อป",
    category: "ของทานเล่น",
    price: 79,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ของทานเล่น"],
    featured: false
  },
  {
    id: 3203,
    section: "food",
    subCategory: "ของทานเล่น",
    name: "ชีสบอล",
    category: "ของทานเล่น",
    price: 89,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ของทานเล่น"],
    featured: false
  },
  {
    id: 3204,
    section: "food",
    subCategory: "ของทานเล่น",
    name: "เซ็ทรวม",
    category: "ของทานเล่น",
    price: 99,
    originalPrice: 0,
    image: "",
    description: "",
    isAvailable: true,
    tags: ["ของทานเล่น", "เซ็ต"],
    featured: false
  }
];

// ======================
// หมวดหมู่หลักในหน้าเมนู
// ======================

export const menuCategories = [
  { id: "all", name: "ทั้งหมด", description: "ดูทุกเมนูของร้าน TLTB Café" },
  { id: "ชา / โกโก้ / โอวัลติน / ไมโล / มอลต์", name: "ชา / โกโก้ / โอวัลติน / ไมโล / มอลต์", description: "เครื่องดื่มกลุ่มชา โกโก้ ไมโล มอลต์ และนมต่าง ๆ" },
  { id: "กาแฟ", name: "กาแฟ", description: "กาแฟร้อน–เย็น ครบรูปแบบ" },
  { id: "โซดา", name: "โซดา", description: "เครื่องดื่มซ่า โซดาและ Italian soda" },
  { id: "มัทฉะ", name: "มัทฉะ", description: "เมนูมัทฉะและชาเขียว" },
  { id: "สมูทตี้", name: "สมูทตี้", description: "สมูทตี้และเครื่องดื่มปั่น" },
  { id: "น้ำเปล่า / น้ำอัดลม / เบียร์", name: "น้ำเปล่า / น้ำอัดลม / เบียร์", description: "เครื่องดื่มเย็นพร้อมเสิร์ฟ" },
  { id: "โทสต์", name: "โทสต์", description: "ขนมปังโทสต์ท็อปปิ้งต่าง ๆ" },
  { id: "ปังเย็น", name: "ปังเย็น", description: "ปังเย็นและเมนูน้ำแข็งไส" },
  { id: "ขนมปังปิ้ง", name: "ขนมปังปิ้ง", description: "ขนมปังปิ้งสไตล์ร้านกาแฟ" },
  { id: "อาหารจานเดียว", name: "อาหารจานเดียว", description: "จานหลักที่ทานคนเดียวอิ่ม" },
  { id: "อาหารประเภทเส้น", name: "อาหารประเภทเส้น", description: "เมนูเส้น เช่น มาม่า สปาเกตตี" },
  { id: "ของทานเล่น", name: "ของทานเล่น", description: "ขนมทานเล่นและของว่าง" }
];

// ======================
// ฟังก์ชันช่วย
// ======================

export const getMenuItemById = (id) => {
  return menuItems.find((item) => item.id === Number(id));
};

export const getMenuByCategory = (categoryId) => {
  // dedupe helper: keep first occurrence per exact name
  const dedupeByName = (arr) => {
    const map = new Map();
    for (const it of arr) {
      const key = (it.name || "").trim();
      if (!map.has(key)) map.set(key, it);
    }
    return Array.from(map.values());
  };

  if (categoryId === "all") return dedupeByName(menuItems);

  const byTextMatch = (item, keywords = []) => {
    const text = (
      (item.name || "") +
      " " +
      (item.subCategory || "") +
      " " +
      (item.category || "") +
      " " +
      (item.tags || []).join(" ")
    ).toLowerCase();
    return keywords.some((k) => text.includes(k.toLowerCase()));
  };

  let results = [];
  switch (categoryId) {
    case "ชา / โกโก้ / โอวัลติน / ไมโล / มอลต์":
      results = menuItems.filter(
        (it) =>
          it.subCategory === "นม" ||
          byTextMatch(it, ["ชา", "โกโก้", "โอวัลติน", "ไมโล", "มอลต์", "นม"])
      );
      break;

    case "กาแฟ":
      results = menuItems.filter(
        (it) => it.subCategory === "กาแฟ" || byTextMatch(it, ["กาแฟ"])
      );
      break;

    case "โซดา":
      results = menuItems.filter(
        (it) => it.subCategory === "โซดา" || byTextMatch(it, ["โซดา"])
      );
      break;

    case "มัทฉะ":
      results = menuItems.filter(
        (it) =>
          it.subCategory === "มัทฉะ" ||
          byTextMatch(it, ["มัทฉะ", "ชาเขียว", "matcha"])
      );
      break;

    case "สมูทตี้":
      results = menuItems.filter(
        (it) =>
          it.subCategory === "สมูทตี้" ||
          byTextMatch(it, ["สมูทตี้", "smoothie"])
      );
      break;

    case "น้ำเปล่า / น้ำอัดลม / เบียร์":
      results = menuItems.filter((it) =>
        byTextMatch(it, ["น้ำเปล่า", "น้ำอัดลม", "เบียร์", "cola", "water"])
      );
      break;

    case "โทสต์":
      results = menuItems.filter(
        (it) =>
          (it.subCategory || "").includes("โทสต์") ||
          byTextMatch(it, ["โทสต์", "toast"])
      );
      break;

    case "ปังเย็น":
      results = menuItems.filter(
        (it) => it.subCategory === "ปังเย็น" || byTextMatch(it, ["ปังเย็น"])
      );
      break;

    case "ขนมปังปิ้ง":
      results = menuItems.filter((it) =>
        byTextMatch(it, ["ขนมปังปิ้ง", "ขนมปัง"])
      );
      break;

    case "อาหารจานเดียว":
      results = menuItems.filter(
        (it) =>
          it.subCategory === "อาหารจานเดียว" ||
          byTextMatch(it, ["อาหารจานเดียว", "ข้าว"])
      );
      break;

    case "อาหารประเภทเส้น":
      results = menuItems.filter(
        (it) =>
          it.subCategory === "อาหารประเภทเส้น" ||
          byTextMatch(it, ["มาม่า", "สปาเกตตี", "เส้น"])
      );
      break;

    case "ของทานเล่น":
      results = menuItems.filter((it) =>
        byTextMatch(it, ["ของทานเล่น", "ทานเล่น", "ของว่าง", "snack"])
      );
      break;

    default:
      results = menuItems.filter((item) => item.category === categoryId);
  }

  return dedupeByName(results);
};

export const getFeaturedMenu = (count = 4) => {
  return menuItems.filter((item) => item.featured && item.isAvailable).slice(0, count);
};

export const searchMenuItems = (query) => {
  const q = query.toLowerCase();
  return menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      (item.description || "").toLowerCase().includes(q) ||
      (item.tags || []).some((tag) => tag.toLowerCase().includes(q))
  );
};
