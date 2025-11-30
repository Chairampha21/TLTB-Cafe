// src/components/BookCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePathByName, getImageForItem } from '../utils/imageMapper';

/**
 * BookCard
 * Props:
 * - item: { id, title, author, price, image, description }
 * - onAction: function(item)  (optional)
 * - onAddToCart: function(item)  (optional)
 * - actionLabel: string for button text (default: 'สั่งเลย')
 */
function BookCard({ item, onAction, onAddToCart, actionLabel = 'สั่งเลย' }) {
  const { title, author, price, image, description } = item || {};
  const displayTitle = title || item?.name || 'Untitled';
  const displayAuthor = author || item?.subCategory || '';
  const displayPrice = price || item?.price || null;

  const handleAction = () => {
    const detail = {
      id: item && (item.id || item._id),
      qty: 1,
      item,
    };

    // 1) ยิง global event ให้ App ฟังแล้วเรียก addToCart
    let dispatched = false;
    try {
      window.dispatchEvent(
        new CustomEvent('tltb:add-to-cart', { detail })
      );
      dispatched = true;
      console.debug('BookCard: dispatched tltb:add-to-cart', detail);
    } catch (err) {
      console.warn('BookCard: dispatch failed', err);
    }

    // 2) ถ้าอยากให้แน่ใจว่า cart ถูกอัปเดต ให้ fallback ผ่าน props ด้วย
    if (typeof onAddToCart === 'function') {
      onAddToCart(item);
    } else if (!dispatched && typeof onAction === 'function') {
      // ใช้ onAction เป็น fallback ถ้าไม่ได้ยิง event
      onAction(item);
    } else if (!onAddToCart && !onAction) {
      console.log('add to cart (card fallback):', item);
    }
  };

  // เลือกรูป
  const resolved = image || getImagePathByName(item?.name || displayTitle);
  const resolved2 =
    resolved ||
    getImagePathByName(item?.subCategory) ||
    getImagePathByName(item?.category);
  const best = resolved2 || getImageForItem(item);
  const fallback = '/images/food-cover/toast_milk.png';
  const imageSrc = (process.env.PUBLIC_URL || '') + (best || fallback);

  return (
    <article className="menu-item-card">
      <div className="menu-card-image" aria-hidden>
        {imageSrc ? (
          <img src={imageSrc} alt={displayTitle} className="menu-card-img" />
        ) : (
          <div className="image-surface" />
        )}

        {/* badge ใหม่ / แนะนำ */}
        {item && (
          ((item.isNew === true) ||
            (item.tags || []).some(
              (t) =>
                String(t).toLowerCase() === 'ใหม่' ||
                String(t).toLowerCase() === 'new'
            )) ? (
            <div className="category-badge">ใหม่</div>
          ) : item.featured ? (
            <div className="category-badge">แนะนำ</div>
          ) : null
        )}
      </div>

      <div className="card-body">
        <div className="card-title-row">
          <h3 className="card-title">{displayTitle}</h3>
        </div>

        {displayAuthor && <p className="card-desc">{displayAuthor}</p>}

        {description && (
          <p className="card-desc" style={{ marginTop: '0.4rem' }}>
            {description}
          </p>
        )}

        <div className="price-row">
          <div className="price-block">
            <span className="price-main">
              {displayPrice ? `${displayPrice} บาท` : ''}
            </span>
          </div>

          {/* ถ้ามี onAddToCart หรือ onAction -> ใช้ปุ่ม
              ถ้าไม่ส่งอะไรมาเลย -> ใช้ลิงก์ไป /cart (โหมดเก่า) */}
          {(onAddToCart || onAction) ? (
            <button
              type="button"
              onClick={handleAction}
              className="order-btn"
            >
              {actionLabel}
            </button>
          ) : (
            <Link
              to={`/cart`}
              className="order-btn"
              onClick={(e) => {
                handleAction();
              }}
            >
              {actionLabel}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default BookCard;
