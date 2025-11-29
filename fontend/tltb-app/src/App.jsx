// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
import OrderModal from "./components/OrderModal";
import { getMenuItemById } from "./data/menuData";
import CartPanel from "./components/CartPanel";

function App() {
  const [cart, setCart] = useState([]);
  const [modalItem, setModalItem] = useState(null);

  const openOrderFor = (item) => {
    // Immediately add one unit of the clicked item to cart
    console.log('App: quick add', item && item.id);
    if (!item) return;
    addToCart(item.id, 1);
  };

  const closeModal = () => setModalItem(null);

  const handleConfirmAdd = ({ variantId, qty }) => {
    const variant = getMenuItemById(variantId);
    if (!variant) return;
    setCart((c) => {
      // merge if same id exists
      const existing = c.find((x) => x.id === variant.id);
      if (existing) {
        return c.map((x) => (x.id === variant.id ? { ...x, qty: x.qty + qty } : x));
      }
      return [...c, { id: variant.id, name: variant.name, drinkType: variant.drinkType || null, price: variant.price, image: variant.image, qty }];
    });
    closeModal();
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

  // debug helper removed (not used)

  return (
    <div className="min-h-screen bg-[#F8F4E1]">
      <NavBar cartCount={cart.reduce((s, i) => s + (i.qty || 0), 0)} onCartClick={() => setCartOpen((v) => !v)} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={openOrderFor} />} />
        <Route path="/menu" element={<MenuPage onAddToCart={openOrderFor} />} />
        <Route path="/contact" element={<ContactPage onAddToCart={openOrderFor} />} />
      </Routes>

      <OrderModal
        item={modalItem}
        isOpen={!!modalItem}
        onClose={closeModal}
        onConfirm={handleConfirmAdd}
      />

      {cartOpen && (
        <CartPanel
          cart={cart}
          onClose={() => setCartOpen(false)}
          onIncrement={incrementItem}
          onDecrement={decrementItem}
          onRemove={removeItem}
        />
      )}
    </div>
  );
}

export default App;
