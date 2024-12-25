import React, { useState, useEffect } from "react";
import Add from "./pages/Add";
import List from "./pages/List";
import Update from "./pages/Update";
import { useNavigate, Routes, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const onDel = (id) => {
    if (confirm("Xoa") == true) {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      const newProductList = products.filter((item) => item.id != id);
      setProducts(newProductList);
    }
  };
  const onAdd = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(inputValue),
    })
      .then((response) => response.json())
      .then((data) => setProducts([...products, data]))
      .then(() => navigate("/products/list"));
  };
  const onUpdate = (product) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(
          products.map((item) => (item.id === data.id ? data : item))
        );
        alert("done");
      })
      .then(() => navigate("/products/list"));
  };
  return (
    <Routes>
      <Route
        path="/products/list"
        element={<List products={products} onDel={onDel} />}
      />
      <Route
        path="/products/add"
        element={<Add onAdd={onAdd} onChange={onChange} />}
      />
      <Route
        path="/products/:id/update"
        element={<Update products={products} onUpdate={onUpdate} />}
      />
    </Routes>
  );
};

export default App;
