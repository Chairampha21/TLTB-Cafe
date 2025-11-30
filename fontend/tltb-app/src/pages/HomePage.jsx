// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../components/HomePage.css";
import heroBg from "../coffee-shop-1448x543.webp";
import BookCard from '../components/BookCard';
import ReviewsSection from '../components/ReviewsSection';
import SiteFooter from '../components/SiteFooter';
import "../components/MenuPage.css"; // reuse card/grid styles for recommended

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8080';

function HomePage({ onAddToCart, onOpenAuth }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchMenu(); }, []);

  async function fetchMenu() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/v1/menu`);
      if (!res.ok) throw new Error('fetch error');
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error('Failed to fetch menu for homepage', err);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  // Deterministic recommended selection:
  // - Prefer items with `featured === true`, sorted by newest (`id` desc)
  // - If less than 4 featured items, fill remaining slots with newest available non-featured items
  // Only consider drinks for the recommended section
  const available = items.filter((i) => i.isAvailable && i.section === 'drink');
  const featuredItems = available
    .filter((i) => i.featured)
    .sort((a, b) => (b.id || 0) - (a.id || 0));

  let recommended = featuredItems.slice(0, 4);
  if (recommended.length < 4) {
    const need = 4 - recommended.length;
    const fill = available
      .filter((i) => !i.featured)
      .sort((a, b) => (b.id || 0) - (a.id || 0))
      .slice(0, need);
    recommended = recommended.concat(fill);
  }

  const newest = [...items]
    .filter((i) => i.isAvailable)
    .sort((a, b) => (b.id || 0) - (a.id || 0))
    .slice(0, 4);

  const handleAdd = (item) => {
    if (onAddToCart) onAddToCart(item);
    else console.log('add to cart (homepage fallback):', item);
  };

  return (
    <div className="min-h-screen menu-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main className="homepage" style={{ flex: 1 }}>
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
              {loading ? <div>กำลังโหลด...</div> : (
                recommended.map((item) => (
                  <BookCard
                    key={item.id}
                    item={item}
                    onAddToCart={handleAdd}
                    actionLabel="สั่งเลย"
                  />
                ))
              )}
            </div>
          </div>
        </section>

        {/* New menu section (เมนูใหม่) */}
        <section className="menu-grid-wrapper" style={{ marginTop: '1.25rem' }}>
          <div className="menu-container max-w-6xl mx-auto px-4">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
              <h2 style={{ margin: 0, color: 'var(--cafe-espresso)', fontSize: '1.15rem' }}>เมนูใหม่</h2>
            </div>

            <div className="menu-grid">
              {loading ? <div>กำลังโหลด...</div> : (
                newest.map((item) => {
                  const itemWithNew = { ...item, isNew: true };
                  return (
                    <BookCard
                      key={item.id}
                      item={itemWithNew}
                      onAddToCart={handleAdd}
                      actionLabel="สั่งเลย"
                    />
                  );
                })
              )}
            </div>
          </div>
        </section>

        {/* Reviews section shown under New menu */}
        <ReviewsSection onOpenAuth={onOpenAuth} />
      </main>

      {/* Footer placed at page bottom */}
      <SiteFooter />
    </div>
  );
}

export default HomePage;
