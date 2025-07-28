import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <h1>Product Listing</h1>
        <h1>Product Listing</h1>
        <ul>
          <li>
            Product 1 - $10
            <button
              onClick={() => navigate("/cart")}
              style={{ marginLeft: "10px" }}
            >
              Add to Cart
            </button>
          </li>
          <li>
            Product 2 - $15
            <button style={{ marginLeft: "10px" }}>Add to Cart</button>
          </li>
          <li>
            Product 3 - $20
            <button style={{ marginLeft: "10px" }}>Add to Cart</button>
          </li>
          <li>
            Product 4 - $25
            <button style={{ marginLeft: "10px" }}>Add to Cart</button>
          </li>
          <li>
            Product 5 - $30
            <button style={{ marginLeft: "10px" }}>Add to Cart</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
