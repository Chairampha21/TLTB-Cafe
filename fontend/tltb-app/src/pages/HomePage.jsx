import { Link } from 'react-router-dom';
import "../components/HomePage.css";
import heroBg from "../coffee-shop-1448x543.webp";
import { getFeaturedMenu } from "../data/menuData";
import BookCard from '../components/BookCard';
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
                <BookCard key={item.id} item={item} onAction={() => handleAdd(item)} actionLabel="สั่งเลย" />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;