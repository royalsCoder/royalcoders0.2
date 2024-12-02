import { LuMapPin } from "react-icons/lu";
import logo from "../assets/ics-logo.jpg";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Footer = () => {
  const navigation = useNavigate();
  const offcanvasRef = useRef(null);

  const handleNavLinkClick = () => {
    // Close the offcanvas when a NavLink is clicked
    if (offcanvasRef.current) {
      const closeButton = offcanvasRef.current.querySelector(".btn-close");
      if (closeButton) closeButton.click();
    }
    // Scroll to top after navigation
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="bg-secondary text-white pt-5">
        <footer className="pt-4">
          <div className="footer-top ">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 md-mb-20">
                  <img src={logo} alt="Logo" />
                  <div className="textwidget mb-33 mt-4">
                    <strong>Your Trusted Partner for Reliable Solutions</strong>{" "}
                    – Whether you're a worker looking to grow your career or
                    someone seeking dependable services, we’re here to make the
                    process smooth and secure for you.
                  </div>
                </div>
                <div className="col-lg-3 pl-76 md-pl-15 md-mb-10">
                  <h3 className="footer-title">Contact Info</h3>
                  <ul className="address-widget p-0">
                    <li>
                      <div className="desc">
                        <span>
                          <LuMapPin />
                        </span>{" "}
                        A-20 Ashok Vihar Colony, Ismailganj,Chinhat
                        <br /> Lucknow- 226021
                      </div>
                    </li>
                    <li>
                      <div className="desc">
                        <span>
                          <MdOutlineMarkEmailUnread />{" "}
                        </span>{" "}
                        <a href="mailto:izzyclicksupplier@gmail.com">
                          izzyclicksupplier@gmail.com
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 pl-75 md-pl-15 md-mb-10">
                  <h3 className="footer-title">Quick Links</h3>
                  <ul className="site-map">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={handleNavLinkClick}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={handleNavLinkClick}
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services"
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={handleNavLinkClick}
                      >
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={handleNavLinkClick}
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 pl-75 md-pl-15 md-mb-10">
                  <h3 className="footer-title">Our Services</h3>
                  <ul className="site-map">
                    <li>
                      <a href="#">RajMistri</a>
                    </li>
                    <li>
                      <a href="#">Plumber</a>
                    </li>
                    <li>
                      <a href="#">Carpenter</a>
                    </li>
                    <li>
                      <a href="#">House Cleaning</a>
                    </li>
                    <li>
                      <a href="#">Electric</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom mt-4">
            <div className="container">
              <div className="row y-middle">
                <div className="col-lg-6 md-mb-10 text-lg-end text-center order-last">
                  <p className="text-light">
                    Copyright © 2024 • ICS | All Rights Reserved
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="copyright text-lg-start text-center">
                    <p style={{ marginBottom: "60px" }}>
                      <strong className="text-white">Developed By:</strong>
                      <a
                        href="https://royalcoders.tech"
                        target="_blank"
                        className="text-warning"
                      >
                        RoyalCoders
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
