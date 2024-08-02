import React from "react";
import { Link } from "react-router-dom";
import '../../styles/NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
        ꧁༺ 𝐸𝐵𝐼 𝑇𝑜𝐷𝑜 𝐿𝑖𝑠𝑡 𝑀𝑎𝑛𝑎𝑔𝑒𝑚𝑒𝑛𝑡 ༻꧂
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={"/view-todos"}>
                View All ToDos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/add-todos"}>
                Add New ToDos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
