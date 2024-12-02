import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.css"; // Add styles here

const MobileMenu = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [lineStyle, setLineStyle] = useState({});

  const menuItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "services", label: "Services", path: "/services" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const updateMenuLine = () => {
    const activeElement = document.getElementById(activeItem);
    if (activeElement) {
      const rect = activeElement.getBoundingClientRect();
      setLineStyle({
        width: `${rect.width}px`,
        transform: `translateX(${rect.left}px)`,
      });
    }
  };

  useEffect(() => {
    updateMenuLine();
    window.addEventListener("resize", updateMenuLine);
    return () => window.removeEventListener("resize", updateMenuLine);
  }, [activeItem]);

  return (
    <div className="mobile-menu">
      {menuItems.map((item) => (
        <Link
          key={item.id}
          id={item.id}
          to={item.path}
          className={`mobile-menu-item ${
            activeItem === item.id ? "active" : ""
          }`}
          onClick={() => setActiveItem(item.id)}
        >
          {item.label}
        </Link>
      ))}
      <div className="menu-line" style={lineStyle}></div>
    </div>
  );
};

export default MobileMenu;
