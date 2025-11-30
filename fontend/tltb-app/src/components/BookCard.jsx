import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePathByName, getImageForItem } from '../utils/imageMapper';

/**
 * BookCard
 * Props:
 * - item: { id, title, author, price, image, description }
 * - onAction: function(item) for primary button (optional)
 * - actionLabel: string for button text (default: 'สั่งเลย')
 */
function BookCard({ item, onAction, actionLabel = 'สั่งเลย' }) {
  const { id, title, author, price, image, description } = item || {};
  const displayTitle = title || item?.name || 'Untitled';
  const displayAuthor = author || item?.subCategory || '';
  const displayPrice = price || item?.price || null;

  const handleAction = () => {
    console.log('BookCard: action clicked for', item && item.id);
    if (onAction) onAction(item);
  };

  // prefer explicit image field, otherwise try to map by item fields
  const resolved = image || getImagePathByName(item?.name || displayTitle);
  // try smarter resolver using subCategory/category/tags
  const resolved2 = resolved || getImagePathByName(item?.subCategory) || getImagePathByName(item?.category);
  // final attempt: use helper that inspects tags and other fields
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

        {/* featured / new badge: prefer showing "ใหม่" when item is new, otherwise show "แนะนำ" for featured items */}
        {item && (
          ((item.isNew === true) || (item.tags || []).some(t => String(t).toLowerCase() === 'ใหม่' || String(t).toLowerCase() === 'new')) ? (
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

        {description && <p className="card-desc" style={{ marginTop: '0.4rem' }}>{description}</p>}

        <div className="price-row">
          <div className="price-block">
            <span className="price-main">{displayPrice ? `${displayPrice} บาท` : ''}</span>
          </div>

          {onAction ? (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAction();
              }}
              className="order-btn"
            >
              {actionLabel}
            </button>
          ) : (
            <Link to={`/menu/${id}`} className="order-btn">{actionLabel}</Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default BookCard;
