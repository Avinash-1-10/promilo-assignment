import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Navbar from "../components/Navbar"
import "../styles/products.css"

const Products = ({ accessToken }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(true);

  const apiCall = async () => {
    try {
      const result = await fetch(
        "https://api.kalpav.com/api/v1/product/category/retail",
        {
          headers: {
            Authorization: `Basic ${accessToken}`,
          },
        }
      );
      const productsData = await result.json();
      setProducts(productsData.response);
      setFilteredProducts(productsData.response);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  useEffect(() => {
    if (query) {
      setFilteredProducts(
        products.filter((product) =>
          product.productCategory.productCategoryName
            .trim()
            .toLowerCase()
            .includes(query.trim().toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [search, products]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(!search);
  };

  return (
    <>
    <Navbar/>
      <form className="search-container">
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </form>
      {loading && <div className="loading-bar"></div>}
      {!loading && filteredProducts.length === 0 && <p style={{textAlign:"center"}}>No products found.</p>}
      <div className="products">
        {filteredProducts.map((product) => (
          <Product
            key={product.productCategory.productCategoryId}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
