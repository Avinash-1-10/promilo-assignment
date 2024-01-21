import React, { useState } from "react";
import Login from "./pages/Login";
import Products from "./pages/Products";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import About from "./pages/About";

const App = () => {
  const [accessToken, setAccessToken] = useState(null);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/products"
            element={
              accessToken ? (
                <Products accessToken={accessToken} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setAccessToken={setAccessToken} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
