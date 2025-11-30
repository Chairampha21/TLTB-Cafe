// src/components/SiteFooter.jsx
import { Link } from "react-router-dom";
import "./SiteFooter.css";

function SiteFooter() {
  return (
    <section className="footer-wrapper">
      {/* Footer newsletter removed (keep only upper Join-in placed elsewhere) */}

      {/* ฟุตเตอร์ด้านล่าง */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-column footer-brand">
            <h4 className="footer-heading">TLTB CAFÉ</h4>
            <p className="footer-brand-text">
              คาเฟ่สำหรับเด็กมหาลัยที่ต้องอ่านหนังสือดึก ๆ
              สั่งเครื่องดื่มและอาหารง่าย ๆ ได้ทั้งหน้าร้านและออนไลน์
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">PRIVACY</h4>
            <ul>
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Cookies</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">SERVICES</h4>
            <ul>
              <li>
                <Link to="/menu">Order ahead</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>Reserve a table</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">ABOUT US</h4>
            <ul>
              <li>Our story</li>
              <li>Location &amp; opening hours</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">SOCIAL MEDIA</h4>
            <ul className="footer-social">
              <li>TikTok</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TLTB Café. All rights reserved.</span>
        </div>
      </footer>
    </section>
  );
}

export default SiteFooter;
