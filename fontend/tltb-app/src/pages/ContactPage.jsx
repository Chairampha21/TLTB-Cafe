import React, { useState } from 'react';
import '../components/ContactPage.css';

function ContactPage({ onAddToCart }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', text: 'กรุณากรอกข้อมูลให้ครบทุกช่อง' });
      return;
    }
    // simulate send
    setStatus({ type: 'sending', text: 'กำลังส่ง...' });
    setTimeout(() => {
      setStatus({ type: 'success', text: 'ส่งข้อความเรียบร้อยแล้ว ขอบคุณค่ะ!' });
      setForm({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <main className="contact-page min-h-screen px-4 py-8">
      <div className="contact-container max-w-5xl mx-auto">
        <header className="contact-hero">
          <h1>ติดต่อ TLTB Café</h1>
          <p className="lead">เรายินดีรับฟังคำถาม สั่งซื้อ หรือขอความช่วยเหลือ — ติดต่อได้ตามช่องทางด้านล่าง</p>
        </header>

        <section className="contact-grid">
          <div className="contact-card contact-info">
            <h2>ข้อมูลติดต่อ</h2>
            <p className="muted">มาเยี่ยมเราได้ที่ร้าน หรือส่งข้อความหาเรา</p>

            <div className="info-row">
              <strong>ที่อยู่</strong>
              <span>123/4 ถนนกาแฟสด ต.ตัวอย่าง อ.เมือง จ.กรุงเทพ 10110</span>
            </div>

            <div className="info-row">
              <strong>โทร</strong>
              <a href="tel:+66000000000">+66 0-0000-0000</a>
            </div>

            <div className="info-row">
              <strong>อีเมล</strong>
              <a href="mailto:hello@tltb-cafe.example">hello@tltb-cafe.example</a>
            </div>

            <div className="hours">
              <h3>เวลาทำการ</h3>
              <ul>
                <li>จันทร์–ศุกร์: 08:00 — 20:00</li>
                <li>เสาร์–อาทิตย์: 09:00 — 22:00</li>
              </ul>
            </div>

            <a className="map-link" href="https://www.google.com/maps/search/TLTB+Cafe" target="_blank" rel="noreferrer">เปิดแผนที่บน Google Maps</a>
          </div>

          <div className="contact-card contact-form">
            <h2>ส่งข้อความหาเรา</h2>
            <form onSubmit={handleSubmit} className="form">
              <label>
                ชื่อ
                <input name="name" value={form.name} onChange={handleChange} placeholder="ชื่อของคุณ" />
              </label>

              <label>
                อีเมล
                <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
              </label>

              <label>
                ข้อความ
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="พิมพ์ข้อความของคุณที่นี่" rows={6} />
              </label>

              <div className="form-row">
                <button type="submit" className="order-btn">สั่งเลย</button>
                <div className="status">
                  {status && <span className={status.type}>{status.text}</span>}
                </div>
              </div>
            </form>
          </div>
        </section>

        <footer className="contact-footer">
          <p>ติดตามเราได้ที่ช่องทางโซเชียล — Facebook / Instagram / Line (ลิงก์ตัวอย่าง)</p>
        </footer>
      </div>
    </main>
  );
}

export default ContactPage;
