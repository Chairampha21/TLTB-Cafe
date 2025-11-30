import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './AuthModal.css';

// Example accounts — change email/password here if you want different test accounts
const BUYER_ACCOUNT = {
  role: 'buyer',
  email: 'buyer@tltb.cafe',
  password: 'buyer123',
};

const ADMIN_ACCOUNT = {
  role: 'admin',
  email: 'admin@tltb.cafe',
  password: 'admin123',
};

function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const navigate = useNavigate();
  const [tab, setTab] = useState('signup');
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'สมัครสมาชิกสำเร็จ!',
      text: 'ลองเข้าสู่ระบบด้วยอีเมลและรหัสผ่านที่คุณตั้งไว้ได้เลย',
      icon: 'success',
      confirmButtonText: 'ตกลง',
    });

    onClose();
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const loginEmail = (form.email || '').trim();
    const loginPassword = form.password || '';

    // check admin
    if (loginEmail === ADMIN_ACCOUNT.email && loginPassword === ADMIN_ACCOUNT.password) {
      if (onLoginSuccess) onLoginSuccess({ role: 'admin', email: loginEmail });
      onClose();
      navigate('/admin/all-food');
      return;
    }

    // check buyer
    if (loginEmail === BUYER_ACCOUNT.email && loginPassword === BUYER_ACCOUNT.password) {
      Swal.fire({
        title: 'เข้าสู่ระบบสำเร็จ!',
        text: 'โหมดลูกค้า (Buyer)',
        icon: 'success',
        confirmButtonText: 'ตกลง',
      });
      if (onLoginSuccess) onLoginSuccess({ role: 'buyer', email: loginEmail });
      onClose();
      return;
    }

    // fallback: bad credentials
    Swal.fire({
      title: 'เข้าสู่ระบบไม่สำเร็จ',
      text: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
      icon: 'error',
      confirmButtonText: 'ลองใหม่',
    });
  };

  return (
    <div className="auth-backdrop" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <div className="auth-header">
          <button className={`tab ${tab === 'signup' ? 'active' : ''}`} onClick={() => setTab('signup')}>สมัคร</button>
          <button className={`tab ${tab === 'login' ? 'active' : ''}`} onClick={() => setTab('login')}>เข้าสู่ระบบ</button>
          <button className="close" onClick={onClose}>×</button>
        </div>

        <form className="auth-form" onSubmit={tab === 'signup' ? handleRegister : handleLogin}>
          {tab === 'signup' && (
            <label>
              ชื่อ
              <input name="name" value={form.name} onChange={handleChange} placeholder="ชื่อของคุณ" />
            </label>
          )}

          <label>
            อีเมล
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            รหัสผ่าน
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="รหัสผ่าน"
              required
            />
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
