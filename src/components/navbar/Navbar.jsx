import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

// Navbar Links
const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "Blogs", link: "/blogs" },
  { name: "Best Places", link: "/best-places" },
  { name: "About", link: "/about" },
];

const Navbar = ({ setBookNow }) => {
  const [showMenu, setShowMenu] = useState(false);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" className="navbar-logo-img" />
        </Link>

        {/* Hamburger Menu Button */}
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          {showMenu ? <HiMenuAlt1 size={30} /> : <HiMenuAlt3 size={30} />}
        </button>

        {/* Desktop & Mobile Navigation */}
        <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`} id="navbarNav">
          <div className="mx-auto">
            <ul className="navbar-nav mb-2 mb-lg-0">
              {NavbarLinks.map((item, index) => (
                <li key={index} className="nav-item">
                  <NavLink
                    to={item.link}
                    className="nav-link"
                    onClick={() => setShowMenu(false)} // Close menu when clicked on mobile
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Book Now Button triggers modal */}
          <button className="btn btn-primary" onClick={() => setBookNow(true)}>
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
