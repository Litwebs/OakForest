import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import "./Rev.css";

const reviews = [
  {
    text: "Oak Forest of Yorkshire transformed our kitchen and media wall beautifully. Professional, tidy and friendly throughout, and nothing was too much trouble. The open-plan feel is perfect and the TV wall is fantastic. Thank you, Oak Forest of Yorkshire!",
    author: "MRS K PEDLEY",
  },
  {
    text: "Absolutely delighted with our bespoke wardrobes from Oak Forest of Yorkshire. Excellent service, thoughtful design advice, and outstanding craftsmanship. Would recommend them without hesitation!",
    author: "MR J SMITH",
  },
  {
    text: "From design to installation, Oak Forest of Yorkshire were superb. Our kitchen now feels tailored to our home, and the finish is immaculate. A seamless, stress-free experience.",
    author: "MRS L WILSON",
  },
];

const Rev = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const revRef = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1,
        );
        setIsFading(false); // Start fade-in
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle dot navigation
  const goToReview = (index) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, 500);
  };

  // Landing animation trigger
  useEffect(() => {
    const revElement = revRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revElement.classList.add("visible");
          } else {
            revElement.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 },
    );

    if (revElement) observer.observe(revElement);

    return () => {
      if (revElement) observer.unobserve(revElement);
    };
  }, []);

  return (
    <section className="rev" ref={revRef}>
      <div className="rev-wrapper">
        <div className="rev-container">
          <div
            className={`rev-content ${isFading ? "fade-out" : "fade-in"} ${
              isFading ? "" : "slide-in"
            }`}
          >
            <p className="rev-text Moda">{reviews[currentIndex].text}</p>
            <div className="rev-author">
              <div>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="star" size={25} />
                ))}
              </div>
              <p className="Moda name-rev">{reviews[currentIndex].author}</p>
            </div>
          </div>
        </div>

        {/* Dots Navigation - Positioned Fixed */}
        <div className="rev-dots">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToReview(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rev;
