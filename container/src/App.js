import React, { Suspense } from "react";
import Cart from "app2/App";
import Product from "app1/App";

function App() {
  return (
    <>
      <Suspense fallback="loading...">
        <Product />
        <Cart />
      </Suspense>
    </>
  );
}

export default App;
