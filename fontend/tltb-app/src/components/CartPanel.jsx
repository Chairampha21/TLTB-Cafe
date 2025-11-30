import React from 'react';
import './CartPanel.css';

function CartPanel({ cart = [], onClose, onIncrement, onDecrement, onRemove }) {
  const total = cart.reduce((s, it) => s + (it.price || 0) * (it.qty || 0), 0);

  return (
    <aside className="cart-panel" role="dialog" aria-label="Cart panel">
      <div className="cart-panel-header">
        <h3>ตะกร้าของฉัน 🧺</h3>
        <button className="close-cart" onClick={onClose} aria-label="ปิดตะกร้า">×</button>
      </div>

      <div className="cart-panel-body">
        {cart.length === 0 ? (
          <div className="empty-cart">ยังไม่มีสินค้าในตะกร้า</div>
        ) : (
          <ul className="cart-list">
            {cart.map((it) => (
              <li key={it.id} className="cart-item">
                <img src={(process.env.PUBLIC_URL || '') + (it.image || '/images/food-cover/toast_milk.png')} alt={it.name} className="cart-item-img" />
                <div className="cart-item-meta">
                  <div className="cart-item-name">{it.name}</div>
                  <div className="cart-item-price">{it.price ? `${it.price} บาท` : '-'}</div>
                </div>

                <div className="cart-item-controls">
                  <button className="qty-btn" onClick={() => onDecrement(it.id)} aria-label={`ลด ${it.name}`}>−</button>
                  <div className="qty-value">{it.qty}</div>
                  <button className="qty-btn" onClick={() => onIncrement(it.id)} aria-label={`เพิ่ม ${it.name}`}>+</button>
                  <button className="remove-btn" onClick={() => onRemove(it.id)} aria-label={`ลบ ${it.name}`}>ลบ</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="cart-panel-footer">
        <div className="cart-total">รวมทั้งหมด: <strong>{total} บาท</strong></div>
        <div className="cart-actions">
          <button className="checkout-btn" disabled={cart.length === 0}>ชำระเงิน</button>
        </div>
      </div>
    </aside>
  );
}

export default CartPanel;
