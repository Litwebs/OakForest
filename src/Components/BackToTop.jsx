import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      // Fallback for very old browsers
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      aria-label="Back to top"
      className={`back-to-top ${visible ? "show" : ""}`}
      onClick={handleClick}
    >
      ↑
    </button>
  );
};

export default BackToTop;
