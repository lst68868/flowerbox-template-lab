import React from "react";
import "../../src/Styles/Navbar.css"; // Import your custom CSS file for styling

function Navbar() {
  return (
    <nav
      id="#navbar"
      className="navbar sticky-top navbar-expand-lg navbar-light"
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav center-align">
          <a className="nav-item nav-link active" href="www.google.com">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="www.google.com">
            Features
          </a>
          <a className="nav-item nav-link" href="www.google.com">
            Pricing
          </a>
          <a className="nav-item nav-link disabled" href="www.google.com">
            Disabled
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
