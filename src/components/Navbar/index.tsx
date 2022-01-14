import "./styles.css";
import HamburguerMenu from "assets/images/hamburguer-menu.svg";
import "bootstrap/js/src/collapse.js";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark main-nav">
      <div className="container-fluid">
        <h1>
          <a href="link"> Carros Top</a>
        </h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topcar-navbar"
          aria-controls="topcar-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={HamburguerMenu} alt="Menu hamburguer" />
        </button>

        <div className="collapse navbar-collapse" id="topcar-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <a href="link" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
