import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = ({ title, description, Img, ShowBtn = true }) => {
  const heroRef = useRef(null);

  const renderDescription = () => {
    if (typeof description !== "string") return description;

    return description
      .split(/(?<=\.)\s+/) // Split by full stops followed by spaces
      .reduce((acc, sentence, index) => {
        if (index % 2 === 1) {
          return [
            ...acc,
            sentence,
            <span key={index}>
              <br key={index} />
              <br key={index + 1} />
            </span>,
          ]; // Add <br /> after every 2nd sentence
        }
        return [...acc, sentence];
      }, []);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const heroElement = heroRef.current; // Store the current ref value

    if (!heroElement) return; // Ensure the element exists

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heroElement.classList.add("visible");
          } else {
            heroElement.classList.remove("visible"); // Reapply animation on scroll
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(heroElement);

    return () => {
      observer.unobserve(heroElement); // Use stored variable in cleanup
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <h1 className="hero-title Moda">{title}</h1>
        <div className="hero-desc lato">{renderDescription()}</div>
        {ShowBtn && (
          <button
            className="hero-button"
            onClick={() => scrollToSection("selection")}
          >
            Show More
          </button>
        )}
      </div>
      <div className="hero-image">
        <img src={Img} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
