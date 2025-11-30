import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar({ cartCount = 0, onCartClick, onAuthClick, authOpen = false }) {
  return (
    <header className="site-nav">
      <div className="nav-container">
        <div className="brand-wrap">
          <NavLink to="/" className="brand">
            TLTB Café
          </NavLink>
        </div>

        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-pill active' : 'nav-link nav-pill'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-pill active' : 'nav-link nav-pill'
            }
          >
            Menu
          </NavLink>

          {/* ปุ่มติดต่อ: ใช้ NavLink เพื่อให้มีสถานะ active/inactive เหมือนลิงก์อื่น ๆ */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-pill active' : 'nav-link nav-pill'
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="cart-wrap">
          <button className="person-btn nav-pill" aria-label="Open auth" onClick={() => typeof onAuthClick === 'function' && onAuthClick()}>
            <span className="person-emoji" aria-hidden>👤</span>
          </button>
          <button className="cart-btn nav-pill" aria-label="Open cart" onClick={() => typeof onCartClick === 'function' && onCartClick()}>
            <span className="cart-emoji" aria-hidden>🧺</span>
          </button>
          {cartCount > 0 && <div className="cart-badge">{cartCount}</div>}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
