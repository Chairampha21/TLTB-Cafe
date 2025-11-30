// src/App.jsx
import React, { useState } from "react";
import { useEffect } from "react";
import Swal from 'sweetalert2';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import AllFoodPage from "./pages/AllFoodPage";
import EditFoodPage from "./pages/EditFoodPage";
import AddPage from "./pages/AddPage";
import NavBar from "./components/NavBar";
import AuthModal from "./components/AuthModal";
import { getMenuItemById } from "./data/menuData";
import CartPanel from "./components/CartPanel";

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null); // { role: 'admin' | 'buyer', email: '...' }
  

  const openOrderFor = (item) => {
    // Immediately add one unit of the clicked item to cart
    console.log('App: quick add', item && item.id);
    if (!item) return;
    // if item provides an explicit image, forward it as override
    const imageOverride = item.image || item.imageSrc || null;
    addToCart(item.id, 1, imageOverride);
  };

  // Listen for global add-to-cart events so other components can dispatch without direct props
  // NOTE: moved listener setup further below so it can reference the addToCart function

  

  const addToCart = (variantId, qty = 1, imageOverride = null) => {
    const variant = getMenuItemById(variantId);
    if (!variant) return;
    setCart((c) => {
      const existing = c.find((x) => x.id === variant.id);
      if (existing) return c.map((x) => (x.id === variant.id ? { ...x, qty: x.qty + qty } : x));
      return [...c, { id: variant.id, name: variant.name, price: variant.price, image: imageOverride || variant.image, qty }];
    });
    // ensure cart panel opens so user sees the item added
    setCartOpen(true);
    // show a small toast confirming the item was added
    if (typeof Swal === 'function') {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: `เพิ่ม ${variant.name} ลงตะกร้า`,
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
      });
    }
  };

  // Listen for global add-to-cart events so other components can dispatch without direct props
  useEffect(() => {
    const handler = (e) => {
      console.debug('App: received tltb:add-to-cart event', e && e.detail);
      const d = e && e.detail ? e.detail : null;
      if (!d) return;
      const id = d.id || (d.item && d.item.id);
      const qty = d.qty || 1;
      // accept optional image override from the event detail
      const imageOverride = d.image || (d.item && (d.item.image || d.item.imageSrc)) || null;
      console.debug('App: handling add-to-cart for id=', id, 'qty=', qty, 'imageOverride=', imageOverride);
      if (id) addToCart(id, qty, imageOverride);
    };
    window.addEventListener('tltb:add-to-cart', handler);
    return () => window.removeEventListener('tltb:add-to-cart', handler);
  }, [addToCart]); // re-register if addToCart changes

  const incrementItem = (id) => {
    setCart((c) => c.map((x) => (x.id === id ? { ...x, qty: (x.qty || 0) + 1 } : x)));
  };

  const decrementItem = (id) => {
    setCart((c) => c
      .map((x) => (x.id === id ? { ...x, qty: Math.max(0, (x.qty || 0) - 1) } : x))
      .filter((x) => x.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((c) => c.filter((x) => x.id !== id));
  };

  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  // Protected route for admin
  const ProtectedAdminRoute = ({ element }) => {
    return user && user.role === 'admin' ? element : <Navigate to="/" />;
  };

  const confirmOrder = () => {
    if (cart.length === 0) return;
    Swal.fire({
      title: 'สั่งซื้อสำเร็จ',
      text: 'คำสั่งซื้อของคุณได้รับการยืนยันแล้ว ขอบคุณที่สั่งซื้อกับเรา',
      icon: 'success',
      confirmButtonText: 'ตกลง',
    });
    // NOTE: keep cart state as-is (frontend-only confirmation)
  };

  // debug helper removed (not used)

  const location = useLocation();

  const showNav = !location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-[#F8F4E1]">
      {showNav && (
        <NavBar
          cartCount={cart.reduce((s, i) => s + (i.qty || 0), 0)}
          onCartClick={() => setCartOpen((v) => !v)}
          onAuthClick={() => setAuthOpen(true)}
          authOpen={authOpen}
        />
      )}
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={openOrderFor} onOpenAuth={() => setAuthOpen(true)} />} />
        <Route path="/menu" element={<MenuPage onAddToCart={openOrderFor} onOpenAuth={() => setAuthOpen(true)} />} />
        <Route path="/contact" element={<ContactPage onAddToCart={openOrderFor} onOpenAuth={() => setAuthOpen(true)} />} />
        <Route path="/admin/all-food" element={<ProtectedAdminRoute element={<AllFoodPage onAddToCart={openOrderFor} />} />} />
        <Route path="/admin/add-food" element={<ProtectedAdminRoute element={<AddPage />} />} />
        <Route path="/admin/edit-food/:id" element={<ProtectedAdminRoute element={<EditFoodPage />} />} />
      </Routes>

      {/* Order modal removed: quick-add flow adds items directly to cart */}

      {cartOpen && (
        <CartPanel
          cart={cart}
          onClose={() => setCartOpen(false)}
          onIncrement={incrementItem}
          onDecrement={decrementItem}
          onRemove={removeItem}
          onConfirmOrder={confirmOrder}
        />
      )}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} onLoginSuccess={(userData) => setUser(userData)} />
    </div>
  );
}

export default App;
