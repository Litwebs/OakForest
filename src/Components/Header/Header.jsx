import React, { useState, useEffect } from "react";
import fullLogo from "../../IMGS/cLogo.jpeg";
import smallLogo from "../../IMGS/cLogo.jpeg";
import { Link } from "react-router-dom"; // Corrected import
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const nav = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Function to update state when resizing
    const handleResize = () => {
      if (Number(window.innerWidth) < 768) {
        setMenuOpen(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className={`nav`}>
        <Link to="/" className="Moda" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          to="/kitchens"
          className="Moda"
          onClick={() => setMenuOpen(false)}
        >
          Kitchens
        </Link>
        <Link
          to="/wardrobes"
          className="Moda"
          onClick={() => setMenuOpen(false)}
        >
          Wardrobes
        </Link>
      </nav>
      <div
        className="logo-wrap"
        onClick={() => nav("/")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") nav("/");
        }}
      >
        <img
          src={scrolled ? smallLogo : fullLogo}
          alt="Oakforest Logo"
          className={`logo ${!scrolled ? "br" : "br"}`}
        />
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <nav className={`nav `}>
        <Link
          to="/media-walls"
          className="Moda"
          onClick={() => setMenuOpen(false)}
        >
          Media Walls
        </Link>
        {/* <Link
          to="/bedrooms"
          className="Moda"
          onClick={() => setMenuOpen(false)}
        >
          Bedrooms
        </Link> */}
        <Link to="/contact" className="Moda" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </nav>

      <nav className={`nav ${menuOpen ? "open" : "dis-none"} `}>
        <Link to="/" className="Moda" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          to="/kitchens"
          className="Moda"
          onClick={() => setMenuOpen(false)}
        >
          Kitchens
        </Link>
        <Link
          to="/wardrobes"
          className="Moda"
          onClick={() => setMenuOpen(false)}
        >
          Wardrobes
        </Link>
        <Link
          to="/media-walls"
          className="Moda"
          onClick={() => setMenuOpen(false)}
        >
          Media Walls
        </Link>
        <Link
          to="/bedrooms"
          className="Moda"
          onClick={() => setMenuOpen(false)}
        >
          Bedrooms
        </Link>
        <Link to="/contact" className="Moda" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
