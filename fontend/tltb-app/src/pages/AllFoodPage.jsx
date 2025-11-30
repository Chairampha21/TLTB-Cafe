import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/AllFoodPage.css';
import Swal from 'sweetalert2';
import { menuItems as localMenuItems } from '../data/menuData';

// API base can be overridden via `REACT_APP_API_URL` env var
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8080';

function AllFoodPage({ onAddToCart }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch menu from backend; callable on demand
  useEffect(() => { fetchMenu();
    // listen for global menu updates (add/edit elsewhere)
    const onMenuUpdated = () => { fetchMenu(); };
    window.addEventListener('menuUpdated', onMenuUpdated);
    return () => window.removeEventListener('menuUpdated', onMenuUpdated);
  }, []);

  async function fetchMenu() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/v1/menu`);
      if (!res.ok) throw new Error('fetch error');
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error('Failed to fetch menu', err);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  // Get all unique categories from items (DB) and include known categories
  // from the local sample as a fallback so the top pills stay complete.
  const dbCategories = items.map(item => item.category).filter(Boolean);
  const sampleCategories = localMenuItems.map(item => item.category).filter(Boolean);
  const categories = ['all', ...new Set([...dbCategories, ...sampleCategories])];

  // Filter items based on search and category
  const filteredItems = items.filter((item) => {
    const matchesSearch = (item.name || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen all-food-page">
      <main className="homepage">
        <section style={{ paddingTop: '0.25rem', paddingBottom: '1rem' }}>
          <div className="menu-container max-w-6xl mx-auto px-4">
            {/* Header Section */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', gap: '1rem' }}>
              <button onClick={() => navigate(-1)} className="btn btn-primary back-btn">← กลับ</button>

              <div>
                <h1 style={{ margin: 0, color: 'var(--cafe-espresso)', fontSize: '2rem' }}>อาหารทั้งหมด</h1>
                <p className="menu-sub" style={{ margin: '0.25rem 0 0' }}>ค้นหาอาหารที่ต้องการ หรือเลือกจากหมวดหมู่ (Admin)</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="search-input-wrapper" style={{ width: '320px' }}>
                  <span className="search-icon">🔍</span>
                  <input
                    type="text"
                    placeholder="ค้นหาอาหาร..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="result-badge">
                  {loading ? 'กำลังโหลด...' : `พบ `}<span>{filteredItems.length}</span> / <span>{items.length}</span>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="categories" style={{ marginBottom: '1.5rem' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category === 'all' ? 'ทั้งหมด' : category}
                </button>
              ))}
            </div>

            {/* Food Table */}
            <div className="table-top-controls" style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <button onClick={() => navigate('/admin/add-food')} className="btn btn-primary add-btn">＋ เพิ่มเมนู</button>
            </div>


            <div className="table-card" style={{ overflowX: 'auto', borderRadius: '0.75rem', boxShadow: '0 4px 12px rgba(84, 51, 16, 0.1)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--cafe-mocha)', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', borderBottom: '2px solid var(--cafe-espresso)' }}>ชื่อเมนู</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', borderBottom: '2px solid var(--cafe-espresso)' }}>หมวดหมู่</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', borderBottom: '2px solid var(--cafe-espresso)' }}>ราคา</th>
                      <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '700', borderBottom: '2px solid var(--cafe-espresso)' }}>จัดการ</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                      <tr 
                        key={item.id}
                        style={{ 
                          backgroundColor: index % 2 === 0 ? '#fdfaf0' : 'white',
                          borderBottom: '1px solid rgba(175, 143, 111, 0.2)',
                          transition: 'background-color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(175, 143, 111, 0.08)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#fdfaf0' : 'white'}
                      >
                        <td style={{ padding: '1rem', color: 'var(--cafe-espresso)', fontWeight: '600' }}>{item.name}</td>
                        <td style={{ padding: '1rem', color: 'var(--cafe-mocha)' }}>{item.category}</td>
                        <td style={{ padding: '1rem', color: 'var(--cafe-mocha)', fontWeight: '600' }}>฿{item.price ?? '-'}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                          <button onClick={() => navigate(`/admin/edit-food/${item.id}`)} className="btn btn-primary small-btn">แก้ไข</button>
                          <button
                            onClick={() => {
                              Swal.fire({
                                title: 'ต้องการลบเมนูนี้ใช่หรือไม่?',
                                text: `${item.name} จะถูกลบออกจากระบบ`,
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#d32f2f',
                                cancelButtonColor: 'gray',
                                confirmButtonText: 'ลบ',
                                cancelButtonText: 'ยกเลิก',
                              }).then(async (result) => {
                                if (result.isConfirmed) {
                                  // Optimistic UI: remove item immediately, call DELETE in background
                                  const snapshot = items;
                                  setItems((prev) => prev.filter((it) => !(it.id === item.id && it.name === item.name)));

                                  const section = item.section || item.Section || 'food';
                                  let endpoint = '/api/v1/foods';
                                  if (section === 'drink') endpoint = '/api/v1/drinks';
                                  if (section === 'dessert') endpoint = '/api/v1/desserts';

                                  try {
                                    const res = await fetch(`${API_BASE}${endpoint}/${encodeURIComponent(item.name)}`, { method: 'DELETE' });
                                    if (!res.ok) throw new Error('delete failed');
                                    // notify other pages that menu changed
                                    window.dispatchEvent(new Event('menuUpdated'));
                                    Swal.fire({
                                      title: 'ลบสำเร็จ',
                                      text: `${item.name} ถูกลบออกแล้ว`,
                                      icon: 'success',
                                      timer: 1500,
                                    });
                                  } catch (err) {
                                    console.error('Delete failed', err);
                                    // restore previous items
                                    setItems(snapshot);
                                    Swal.fire({ title: 'เกิดข้อผิดพลาด', text: 'ไม่สามารถลบได้', icon: 'error' });
                                  }
                                }
                              });
                            }}
                            className="btn btn-danger small-btn"
                          >
                            ลบ
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                        <td colSpan="4" style={{ padding: '2rem', textAlign: 'center', color: 'var(--cafe-mocha)' }}>
                        {loading ? 'กำลังโหลดข้อมูล...' : 'ไม่พบอาหารที่ค้นหา'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AllFoodPage;
