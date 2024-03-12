import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles.css/index.css";

const DefaultLayout = () => {
  return (
    <div>
      <nav>
        <ul className="activeLink">
          <li>
            <Link to="/">
              <div className="nav-link">Home</div>
            </Link>
          </li>
          <li>
            <Link to="/bag">
              <div className="nav-link">Bag</div>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <div className="nav-link">Products</div>
            </Link>
          </li>
          <li>
            <Link to="/user">
              <div className="nav-link">User</div>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
