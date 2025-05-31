import FooterLogo from "../../assets/logo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Best Places", link: "/best-places" },
  { title: "Blogs", link: "/blogs" },
];

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container">
        {/* Footer Content */}
        <div
          className="row border-top border-dark py-5"
          style={{
            background: "linear-gradient(135deg, #f5f7fa, #ffffff)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            padding: "20px 40px",
          }}
        >
          {/* Left Section - Logo and Contact Info */}
          <div className="col-md-4 py-4">
            <h1 className="d-flex align-items-center gap-3 mb-3">
              <img
                src={FooterLogo}
                alt="Footer Logo"
                className="img-fluid"
                style={{ maxHeight: "60px" }}
              />
            </h1>
            <p className="text-muted" style={{ fontSize: "1rem", lineHeight: "1.5" }}>
              Discover the best places to explore, enjoy, and relax. Join us as we
              share insights and stories of wonderful destinations.
              Start your journey with us today and turn your travel dreams into reality!
            </p>
            <div className="d-flex align-items-center gap-2 mt-4">
              <FaLocationArrow className="text-dark" />
              <p className="mb-0" style={{ fontSize: "1rem" }}>Kakinada, Andhra Pradesh</p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-3">
              <FaMobileAlt className="text-dark" />
              <p className="mb-0" style={{ fontSize: "1rem" }}>+91 123456789</p>
            </div>
          </div>

          {/* Right Section - Links and Social Media */}
          <div className="col-md-8 py-4">
            <div className="row">
              {/* Important Links */}
              <div className="col-md-6 mb-4">
                <h2 className="h5 mb-4 text-dark" style={{ fontWeight: "600" }}>Important Links</h2>
                <ul className="list-unstyled">
                  {FooterLinks.map((link) => (
                    <li key={link.title} className="mb-3">
                      <Link
                        to={link.link}
                        onClick={() => window.scrollTo(0, 0)}
                        className="text-dark text-decoration-none"
                        style={{ fontSize: "1rem", fontWeight: "500", transition: "color 0.3s" }}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media Handles */}
              <div className="col-md-6">
                <h2 className="h5 mb-4 text-dark" style={{ fontWeight: "600" }}>Follow Us</h2>
                <div className="d-flex gap-4">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-dark"
                    style={{ fontSize: "1.5rem", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E1306C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-dark"
                    style={{ fontSize: "1.5rem", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#4267B2")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="text-dark"
                    style={{ fontSize: "1.5rem", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0077b5")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center py-3 border-top border-secondary mt-5">
          <p className="mb-0" style={{ fontSize: "1rem" }}>
            © 2024 All rights reserved || Made with ❤️ by Prakruthi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
