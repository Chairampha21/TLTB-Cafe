import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../components/AllFoodPage.css';
import { menuItems } from '../data/menuData';

function EditFoodPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const itemId = Number(id);

  const [form, setForm] = useState({
    name: '',
    category: '',
    price: 0,
    description: '',
  });

  useEffect(() => {
    const item = menuItems.find((m) => m.id === itemId);
    if (!item) {
      Swal.fire({ title: 'ไม่พบข้อมูล', text: 'ไม่พบเมนูที่ต้องการแก้ไข', icon: 'error' });
      navigate(-1);
      return;
    }

    setForm({
      name: item.name || '',
      category: item.category || '',
      price: item.price || 0,
      description: item.description || '',
    });
  }, [itemId, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: name === 'price' ? Number(value) : value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // ask for confirmation before updating
    Swal.fire({
      title: 'ยืนยันการบันทึก',
      html: `<strong>${form.name || '(ไม่มีชื่อ)'}</strong><br/>หมวดหมู่: ${form.category || '-'}<br/>ราคา: ฿${form.price || 0}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'บันทึก',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (!result.isConfirmed) return;

      const idx = menuItems.findIndex((m) => m.id === itemId);
      if (idx === -1) {
        Swal.fire({ title: 'ผิดพลาด', text: 'ไม่สามารถบันทึกข้อมูล', icon: 'error' });
        return;
      }

      // Preserve existing isAvailable value; update other fields
      menuItems[idx] = {
        ...menuItems[idx],
        name: form.name,
        category: form.category,
        price: form.price,
        isAvailable: typeof menuItems[idx].isAvailable === 'boolean' ? menuItems[idx].isAvailable : true,
        description: form.description,
      };

      Swal.fire({ title: 'บันทึกสำเร็จ', icon: 'success', timer: 1200, showConfirmButton: false });
      navigate(-1);
    });
  };

  return (
    <div className="min-h-screen all-food-page">
      <main className="homepage">
        <section style={{ paddingTop: '0.25rem', paddingBottom: '1rem' }}>
          <div className="menu-container max-w-4xl mx-auto px-4">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <button onClick={() => navigate(-1)} className="btn btn-primary back-btn">← กลับ</button>
              <h1 style={{ margin: 0, color: 'var(--cafe-espresso)' }}>แก้ไขเมนู</h1>
            </div>

            <form onSubmit={handleSave} className="form-card">
              <label style={{ display: 'block', marginBottom: '0.75rem' }}>
                ชื่อเมนู
                <input className="form-input" name="name" value={form.name} onChange={handleChange} required />
              </label>

              <label style={{ display: 'block', marginBottom: '0.75rem' }}>
                หมวดหมู่
                <input className="form-input" name="category" value={form.category} onChange={handleChange} required />
              </label>

              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <label style={{ flex: 1 }}>
                  ราคา
                  <input className="form-input" name="price" type="number" value={form.price} onChange={handleChange} required />
                </label>
              </div>

              <label style={{ display: 'block', marginBottom: '0.75rem' }}>
                รายละเอียด
                <textarea className="form-textarea" name="description" value={form.description} onChange={handleChange} rows={4} />
              </label>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => navigate(-1)} className="btn btn-ghost">ยกเลิก</button>
                <button type="submit" className="btn btn-primary">บันทึก</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EditFoodPage;
