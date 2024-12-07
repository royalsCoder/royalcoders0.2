import { LuMapPin } from "react-icons/lu";
import logo from "../assets/RC_logo.png";
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
            <div style={{width:"90%",margin:"auto"}} className="">
              <div className="row">
                <div className="col-lg-3 md-mb-20">
                  <img src={logo} alt="Logo" width={80} />
                  <div className="textwidget mb-33 mt-4">
                  Royal Coders delivers expert IT solutions, including website and app development, social media marketing, and software creation. Contact us for innovative tech services tailored to your business needs.
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
                        Basant vihar colony Sitapur road 
                         Lucknow- 226021
                      </div>
                    </li>
                    <li>
                      <div className="desc">
                        <span>
                          <MdOutlineMarkEmailUnread />{" "}
                        </span>{" "}
                        <a href="mailto:codersroyal@gmail.com">
                          codersroyal@gmail.com
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
                      <a href="#">Website Web Development</a>
                    </li>
                    <li>
                      <a href="#">App Developement</a>
                    </li>
                    <li>
                      <a href="#">Social Media Marketing </a>
                    </li>
                    <li>
                      <a href="#">Electronics Services</a>
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
