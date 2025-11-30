// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
import AuthModal from "./components/AuthModal";
import { getMenuItemById } from "./data/menuData";
import CartPanel from "./components/CartPanel";

function App() {
  const [cart, setCart] = useState([]);
  

  const openOrderFor = (item) => {
    // Immediately add one unit of the clicked item to cart
    console.log('App: quick add', item && item.id);
    if (!item) return;
    addToCart(item.id, 1);
  };

  

  const addToCart = (variantId, qty = 1) => {
    const variant = getMenuItemById(variantId);
    if (!variant) return;
    setCart((c) => {
      const existing = c.find((x) => x.id === variant.id);
      if (existing) return c.map((x) => (x.id === variant.id ? { ...x, qty: x.qty + qty } : x));
      return [...c, { id: variant.id, name: variant.name, price: variant.price, image: variant.image, qty }];
    });
    // ensure cart panel opens so user sees the item added
    setCartOpen(true);
  };

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

  // debug helper removed (not used)

  return (
    <div className="min-h-screen bg-[#F8F4E1]">
      <NavBar
        cartCount={cart.reduce((s, i) => s + (i.qty || 0), 0)}
        onCartClick={() => setCartOpen((v) => !v)}
        onAuthClick={() => setAuthOpen(true)}
        authOpen={authOpen}
      />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={openOrderFor} onOpenAuth={() => setAuthOpen(true)} />} />
        <Route path="/menu" element={<MenuPage onAddToCart={openOrderFor} onOpenAuth={() => setAuthOpen(true)} />} />
        <Route path="/contact" element={<ContactPage onAddToCart={openOrderFor} onOpenAuth={() => setAuthOpen(true)} />} />
      </Routes>

      {/* Order modal removed: quick-add flow adds items directly to cart */}

      {cartOpen && (
        <CartPanel
          cart={cart}
          onClose={() => setCartOpen(false)}
          onIncrement={incrementItem}
          onDecrement={decrementItem}
          onRemove={removeItem}
        />
      )}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}

export default App;
