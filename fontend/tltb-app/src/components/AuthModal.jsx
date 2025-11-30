import React, { useState } from 'react';
import './AuthModal.css';

function AuthModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('signup');
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // no real auth: just simulate
    alert(`${tab === 'signup' ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ'}: ` + form.email);
    onClose();
  };

  return (
    <div className="auth-backdrop" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <div className="auth-header">
          <button className={`tab ${tab === 'signup' ? 'active' : ''}`} onClick={() => setTab('signup')}>สมัคร</button>
          <button className={`tab ${tab === 'login' ? 'active' : ''}`} onClick={() => setTab('login')}>เข้าสู่ระบบ</button>
          <button className="close" onClick={onClose}>×</button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {tab === 'signup' && (
            <label>
              ชื่อ
              <input name="name" value={form.name} onChange={handleChange} placeholder="ชื่อของคุณ" />
            </label>
          )}

          <label>
            อีเมล
            <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
          </label>

          <label>
            รหัสผ่าน
            <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="รหัสผ่าน" />
          </label>

          <div className="auth-actions">
            <button type="submit" className="order-btn">{tab === 'signup' ? 'สมัคร' : 'เข้าสู่ระบบ'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthModal;
