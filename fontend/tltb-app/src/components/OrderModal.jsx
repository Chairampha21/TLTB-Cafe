import React, { useEffect, useState } from 'react';
import '../components/OrderModal.css';
import { menuItems } from '../data/menuData';

function OrderModal({ item, isOpen, onClose, onConfirm }) {
  const [qty, setQty] = useState(1);
  const [selectedVariantId, setSelectedVariantId] = useState(item ? item.id : null);

  useEffect(() => {
    setQty(1);
    setSelectedVariantId(item ? item.id : null);
  }, [item]);

  if (!isOpen || !item) return null;

  // Gather possible variants: items with same name or same base name
  const nameBase = item.name;
  const variants = menuItems.filter((m) => m.name === nameBase || m.name.includes(nameBase));
  const options = variants.length ? variants : [item];

  const price = (() => {
    const v = options.find((o) => o.id === Number(selectedVariantId));
    return v ? v.price : item.price;
  })();

  return (
    <div className="order-modal-backdrop" onClick={onClose}>
      <div className="order-modal" onClick={(e) => e.stopPropagation()}>
        <h3>{item.name}</h3>
        <div className="order-modal-body">
          <div className="variants">
            <label>เลือกประเภท</label>
            {options.map((opt) => (
              <div key={opt.id} className="variant-row">
                <input
                  type="radio"
                  id={`v-${opt.id}`}
                  name="variant"
                  checked={Number(selectedVariantId) === Number(opt.id)}
                  onChange={() => setSelectedVariantId(opt.id)}
                />
                <label htmlFor={`v-${opt.id}`}>{opt.drinkType || 'ปกติ'} — {opt.price}฿</label>
              </div>
            ))}
          </div>

          <div className="qty">
            <label>จำนวน</label>
            <div className="qty-controls">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
          </div>

          <div className="preview">รวม: <strong>{price * qty} ฿</strong></div>
        </div>

        <div className="order-modal-actions">
          <button className="btn btn-outline" onClick={onClose}>ยกเลิก</button>
          <button
            className="btn btn-primary"
            onClick={() => onConfirm && onConfirm({ variantId: Number(selectedVariantId || item.id), qty })}
          >เพิ่มลงตะกร้า</button>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
