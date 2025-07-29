import React, { useEffect, useState } from "react";

const App = () => {
  const [item, setItem] = useState("No items");

  useEffect(() => {
    window.addEventListener("addToCart", (e) => {
      console.log(e);
      setItem(e.detail.name);
    });
  }, []);

  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "cyan",
      }}
    >
      <h1>Cart Application</h1>
      <p>{item}</p>
    </div>
  );
};

export default App;
