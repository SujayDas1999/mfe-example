import React, { Suspense } from "react";
import Cart from "app2/App";
import Product from "app1/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>Welcome to New-Amazon</div>
      <BrowserRouter>
        <React.Suspense fallback="loading...">
          <Routes>
            <Route path="/products" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
