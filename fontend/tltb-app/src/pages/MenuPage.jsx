import React, { useState } from 'react';
import '../components/MenuPage.css';
import BookCard from '../components/BookCard';
import { menuCategories, getMenuByCategory } from '../data/menuData';

function MenuPage({ onAddToCart }) {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const items = getMenuByCategory(category);
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen menu-page">
      <main className="homepage">
        <section style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
          <div className="menu-container max-w-6xl mx-auto px-4">
            <div className="menu-header-top" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h1 style={{ margin: 0, color: 'var(--cafe-espresso)' }}>เมนูทั้งหมด</h1>
                <p className="menu-sub" style={{ margin: '0.25rem 0 0' }}>เลือกเมนูจากหมวดหมู่ด้านล่าง หรือค้นหาชื่อเมนูที่ต้องการ</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="search-input-wrapper" style={{ width: '320px' }}>
                  <span className="search-icon">🔍</span>
                  <input
                    type="text"
                    placeholder="ค้นหาเมนู เช่น ลาเต้, โซดา, มาม่า..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="result-badge">
                  พบ <span>{filteredItems.length}</span> / <span>{items.length}</span>
                </div>
              </div>
            </div>

            <div className="categories" style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>
              {menuCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategory(c.id)}
                  className={`category-pill ${category === c.id ? 'active' : ''}`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            <div className="menu-grid">
              {filteredItems.map((item) => (
                <BookCard key={item.id} item={item} onAction={() => onAddToCart && onAddToCart(item)} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default MenuPage;