import React from "react";
import News from "./News";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import "./NavBar.css"
function NavBar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg" id="navbar_bg_color">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            News
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/business"
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/entertainment"
                >
                  Entertainment
                </a>
              </li>

              
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/health"
                >
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/science"
                >
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/sports"
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/technology"
                >
                  Technology
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      
         <nav>
     
    </nav>
      </nav>
    </div>
  );
}

export default NavBar;


