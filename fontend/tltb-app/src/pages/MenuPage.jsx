import React, { useState, useEffect } from 'react';
import '../components/MenuPage.css';
import BookCard from '../components/BookCard';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8080';

function MenuPage({ onAddToCart }) {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState(['all']);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchMenu(); }, []);

  async function fetchMenu() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/v1/menu`);
      if (!res.ok) throw new Error('fetch error');
      const data = await res.json();
      setItems(data || []);
      const cats = ['all', ...Array.from(new Set((data || []).map(it => it.category).filter(Boolean)))];
      setCategories(cats);
    } catch (err) {
      console.error('Failed to fetch menu for menu page', err);
      setItems([]);
      setCategories(['all']);
    } finally {
      setLoading(false);
    }
  }

  const handleAdd = (item) => {
    try {
      window.dispatchEvent(new CustomEvent('tltb:add-to-cart', { detail: { id: item.id, qty: 1, item } }));
    } catch (err) {
      // ignore if CustomEvent isn't available
    }

    if (onAddToCart) onAddToCart(item);
    else console.log('add to cart (menu):', item);
  };

  const itemsByCategory = category === 'all' ? items : items.filter(it => it.category === category || it.subCategory === category);
  const filteredItems = (itemsByCategory || []).filter((item) =>
    (item.name || '').toLowerCase().includes(searchTerm.toLowerCase())
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
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`category-pill ${category === c ? 'active' : ''}`}
                >
                  {c === 'all' ? 'ทั้งหมด' : c}
                </button>
              ))}
            </div>

            <div className="menu-grid">
              {loading ? <div>กำลังโหลด...</div> : (
                filteredItems.map((item) => (
                  <BookCard key={item.id} item={item} onAction={() => handleAdd(item)} />
                ))
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default MenuPage;