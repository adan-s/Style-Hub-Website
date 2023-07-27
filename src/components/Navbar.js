import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { Badge } from "react-bootstrap";
import  Model  from "../Model";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducers";
export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand font-italic" to="/">
          <h1>StyleHub</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item ">
              <Link className="nav-link h5 mt-3" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            {localStorage.getItem("authToken") ? (
              <li className="nav-item ">
                <Link className="nav-link h5 mt-3" to="/myOrder">
                  My Orders <span className="sr-only">(current)</span>
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>

          {!localStorage.getItem("authToken") ? (
            <div style={{ display: "flex" }}>
              <Link className="btn bg-white button mx-1" to="/login">
                Login
              </Link>
              <Link className="btn bg-white button mx-1" to="/signup">
                Signup
              </Link>
            </div>
          ) : (
            <div>
              <div
                className="btn bg-white button mx-1"
                onClick={() => {
                  setCartView(true);
                }}
              >
                My Cart &nbsp;&nbsp;
                <Badge pill bg="success">
                  {data.length}
                </Badge>
              </div>
              {cartView ? (
                <Model onClose={() => setCartView(false)}>
                  <Cart></Cart>
                </Model>
              ) : null}
              <div className="btn bg-white button mx-1" onClick={handleLogout}>
                Logout
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
