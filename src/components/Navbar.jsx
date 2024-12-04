import React, { useState, useRef } from "react";
import logo from "../assets/RC_logo.png";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import LabourModal from "../modals/LabourModal";
import CustomersModal from "../modals/CustomersModal";

const Navbar = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalStatus1, setModalStatus1] = useState(false);
  const [modalData, setModalData] = useState("");
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

  const handleModalButtonClick = (modalSetter) => {
    // Close the offcanvas when a modal button is clicked
    if (offcanvasRef.current) {
      const closeButton = offcanvasRef.current.querySelector(".btn-close");
      if (closeButton) closeButton.click();
    }

    // Set the modal status to open
    modalSetter(true);
  };

  return (
    <div className="navbar" style={{ zIndex: "1000" }}>
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <img src={logo} className="logo" alt="Logo" />
        </div>
        <p>
          <span className="nav-center">
            Marketing That Clicks, Tech That Works.
          </span>
        </p>
        <div className="d-flex gap-3 align-items-center menuitems">
          <div className="navmenu">
            <ul className="m-0 d-flex gap-4">
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
                  to="/ourTeam"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={handleNavLinkClick}
                >
                  Our Team
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
          {/* <div className="d-flex gap-3">
            <button
              className="button"
              onClick={() => handleModalButtonClick(setModalStatus)}
            >
              Labour Registration
            </button>
            <button
              className="button"
              onClick={() => handleModalButtonClick(setModalStatus1)}
            >
              Customer Registration
            </button>
          </div> */}
        </div>

        <div
          className="menuIcon"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <RiMenuUnfold4Line style={{ fontSize: "40px" }} />
        </div>

        <div
          ref={offcanvasRef}
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="navmenu">
              <ul style={{ fontSize: "26px" }} className="d-flex flex-column">
                <li>
                  <NavLink
                    style={{ fontSize: "20px" }}
                    to="/"
                    onClick={handleNavLinkClick}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={{ fontSize: "20px" }}
                    to="/about"
                    onClick={handleNavLinkClick}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={{ fontSize: "20px" }}
                    to="/services"
                    onClick={handleNavLinkClick}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={{ fontSize: "20px" }}
                    to="/contact"
                    onClick={handleNavLinkClick}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="d-flex gap-3 my-3">
              <button
                className="button"
                onClick={() => handleModalButtonClick(setModalStatus)}
              >
                Labour Registration
              </button>
              <button
                className="button"
                onClick={() => handleModalButtonClick(setModalStatus1)}
              >
                Customer Registration
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalStatus && (
        <LabourModal
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
          modalData={modalData}
          setModalData={setModalData}
        />
      )}
      {modalStatus1 && (
        <CustomersModal
          modalStatus={modalStatus1}
          setModalStatus={setModalStatus1}
          modalData={modalData}
          setModalData={setModalData}
        />
      )}
    </div>
  );
};

export default Navbar;
