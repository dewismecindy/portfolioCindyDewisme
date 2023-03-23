import { Link } from "react-router-dom";
import Logo from "../assets/G.png";

const Header = () => {
  return (
    <header>
      {/* création entête du portfolio avec un logo et des links pour les catégories */}
      <div className="header">
        <div className="all-header">
          <Link>
            <img className="logoCindy" src={Logo} alt="LogoCindyDewisme" />
          </Link>

          <div className="setting-and-menu">
            <nav className="navbarLinks">
              <ul className="navbar-link">Présentation</ul>
              <ul className="navbar-link">A propos</ul>
              <ul className="navbar-link">Mes compétences</ul>
              <ul className="navbar-link">Mes projets</ul>
              <ul className="navbar-link">Mes futurs projets</ul>
              <ul className="navbar-link">Contact</ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
