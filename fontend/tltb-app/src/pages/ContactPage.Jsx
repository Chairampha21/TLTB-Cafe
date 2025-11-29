import { Link } from 'react-router-dom';
import "../components/HomePage.css";
import heroBg from "../coffee-shop-1448x543.webp";
import { getFeaturedMenu } from "../data/menuData";
import "../components/MenuPage.css"; // reuse card/grid styles for recommended

function HomePage({ onAddToCart }) {
  // recommended: pull featured items from data file
  const recommended = getFeaturedMenu(4);

  const handleAdd = (item) => {
    if (onAddToCart) onAddToCart(item);
    else console.log('add to cart (homepage):', item);
  };

  return (
    <div className="min-h-screen menu-page">
      <main className="homepage">
        <section
          className="homepage-hero hero-banner"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >

          <h1 className="hero-top-title">สั่งเครื่องดื่มและอาหารง่าย ๆ ที่ TLTB Café</h1>
          <Link to="/menu" className="order-btn hero-cta">ดูเมนูทั้งหมด</Link>
        </section>

        {/* Recommended section */}
        <section className="menu-grid-wrapper" style={{ marginTop: '1.25rem' }}>
          <div className="menu-container max-w-6xl mx-auto px-4">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
              <h2 style={{ margin: 0, color: 'var(--cafe-espresso)', fontSize: '1.15rem' }}>เมนูแนะนำ</h2>
            </div>

            <div className="menu-grid">
              {recommended.map((item) => (
                <article key={item.id} className="menu-item-card">
                  <div className="menu-card-image" aria-hidden>
                    <div className="image-surface" />
                    <span className="category-badge">แนะนำ</span>
                  </div>

                  <div className="card-body">
                    <div className="card-title-row">
                      <h3 className="card-title">{item.name}</h3>
                    </div>
                    <p className="card-desc">ราคา {item.price} บาท</p>

                    <div className="price-row">
                      <div className="price-block">
                        <span className="price-main">{item.price} <span className="price-unit">บาท</span></span>
                      </div>
                      <button onClick={() => handleAdd(item)} className="order-btn">สั่งเลย</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;