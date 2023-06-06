import React from "react";

import { Link, NavLink } from "react-router-dom";

//Bootstrap 연결하여 Nav부분 가져와서 사용함
const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>

        <div id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ flexDirection: "row" }}
          >
            <li className="nav-item me-4">
              <NavLink className="nav-link" aria-current="page" to="/admin">
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/blogs">
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
