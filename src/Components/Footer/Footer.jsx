import React, { useEffect, useState, useRef } from "react";
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";

import "./Footer.css"; // Import CSS for animations

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false); // Reset animation
          setTimeout(() => setIsVisible(true), 100); // Reapply animation
        }
      },
      { threshold: 0.3 },
    );

    const currentRef = footerRef.current; // Store ref safely

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <p className={`footer-text ${isVisible ? "animate" : ""}`}>
        COPYRIGHT © 2025 - OAKFORESTOFYORKSHIRE. ALL RIGHTS RESERVED
      </p>
      <div className="footer-icons">
        <IoLogoInstagram
          className="footer-icon"
          size={30}
          onClick={() =>
            window.open(
              "https://www.instagram.com/oakforestofyorkshire",
              "_blank",
            )
          }
        />
        <IoLogoTiktok
          className="footer-icon"
          size={30}
          onClick={() =>
            window.open(
              "https://www.tiktok.com/@oakforestofyorkshire",
              "_blank",
            )
          }
        />
      </div>
      <p className={`powered-text ${isVisible ? "animate" : ""}`}>
        POWERED BY{" "}
        <a
          href="https://litwebs.co.uk"
          className={`footer-text ${isVisible ? "animate" : ""}`}
          target="_blank"
          rel="noreferrer"
        >
          LITWEBS
        </a>
      </p>
    </footer>
  );
};

export default Footer;
