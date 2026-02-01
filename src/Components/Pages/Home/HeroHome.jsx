import React, { useEffect, useRef } from "react";
import "./HeroHome.css";

const HeroHome = ({ images = [] }) => {
  const heroRef = useRef(null);

  const mainImage = images[0];
  const img1 = images[1] || images[0];
  const img2 = images[2] || images[0];

  useEffect(() => {
    const heroElement = heroRef.current; // Store ref in a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // Reapply animation on scroll
          }
        });
      },
      { threshold: 0.3 }, // Trigger when 30% visible
    );

    if (heroElement) {
      const items = heroElement.querySelectorAll(".hero-item");
      items.forEach((item) => observer.observe(item));

      return () => {
        items.forEach((item) => observer.unobserve(item));
      };
    }
  }, []);

  return (
    <section className="hero-home" ref={heroRef}>
      {/* Main Background Image */}
      <div className="hero-main">
        {mainImage && (
          <img src={mainImage} alt="Main Kitchen" className="main-image" />
        )}
      </div>

      {/* Grid Content - 2x2 Layout */}
      <div className="hero-grid">
        {/* Image 1 */}
        <div className="hero-item">
          {img1 && (
            <img
              src={img1}
              alt="Kitchen Design"
              className="grid-image dis-app"
            />
          )}
        </div>

        {/* Text 1 */}
        <div className="hero-item text">
          <h2 className="Moda">A FULLY IN-HOUSE INSTALLATION EXPERIENCE </h2>
          <p>
            Every detail is managed by our own specialist teams — from fitting
            to plumbing, gas, and electrics — ensuring flawless quality and
            complete control from start to finish.
          </p>
        </div>

        {/* Text 2 */}
        <div className="hero-item text">
          <h2 className="Moda">CONTEMPORARY AND TRADITIONAL</h2>
          <p>
            From concept to completion, we deliver a seamless experience,
            bringing your vision to life!
          </p>
        </div>

        {/* Image 2 */}
        <div className="hero-item">
          {img2 && (
            <img src={img2} alt="Kitchen Interior" className="grid-image" />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
