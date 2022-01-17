import "./styles.css";
import HamburguerMenu from "assets/images/hamburguer-menu.svg";
import "bootstrap/js/src/collapse.js";
import { Link,  NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark main-nav">
      <div className="container-fluid">
        <h1>
          <Link to="/"> Carros Top</Link>
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
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">Catálogo</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
