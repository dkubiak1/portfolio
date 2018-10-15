import React from "react";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="banner">
    <i className="fab fa-connectdevelop"></i>
    <p className="banner-name">Daniel Kubiak</p>
    </li>
    <li className="nav-container">
    <div className="nav-item">
      <a
        onClick={() => props.handlePageChange("Home")}
        className={
          props.currentPage === "Home" ? "nav-link active" : "nav-link"
        }
      >
        Home
        <hr />
      </a>
    </div>
    <div className="nav-item">
      <a
        onClick={() => props.handlePageChange("About")}
        className={
          props.currentPage === "About" ? "nav-link active" : "nav-link"
        }
        href="#section2"
      >
        About
        <hr />
      </a>
    </div>
    <div className="nav-item">
      <a
        onClick={() => props.handlePageChange("Blog")}
        className={
          props.currentPage === "Blog" ? "nav-link active" : "nav-link"
        }
        href="#section1"
      >
        Projects
        <hr />
      </a>
    </div>
    <div className="nav-item">
      <a
        onClick={() => props.handlePageChange("Contact")}
        className={
          props.currentPage === "Contact" ? "nav-link active" : "nav-link"
        }
        href="#section3"
      >
        Contact
        <hr />
      </a>
    </div>
    </li>
  </ul>
);

export default NavTabs;
