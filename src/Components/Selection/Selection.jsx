import React, { useEffect, useRef } from "react";
import img1 from "../../IMGS/IMG4.jpeg";
import img2 from "../../IMGS/IMG2.jpeg";
import img3 from "../../IMGS/IMG7.jpeg";
import { useNavigate } from "react-router";
import "./Selection.css";

const Selection = () => {
  const selectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 },
    );

    const items = selectionRef.current.querySelectorAll(".selection-card");
    items.forEach((item) => observer.observe(item));

    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  const nav = useNavigate();

  return (
    <section className="selection" id="selection" ref={selectionRef}>
      {/* Card 1 */}
      <div className="selection-card">
        <div className="selection-overlay"></div>
        <img src={img1} alt="Kitchens" className="selection-image" />
        <div className="selection-content">
          <h2 className="Moda">KITCHENS</h2>
          <p>
            Explore our very latest kitchen finishes. Whether that be
            hand-painted, matt, or high gloss lacquer, we’ve got a wide
            selection of choices for you to consider.
          </p>
          <button className="selection-button" onClick={() => nav("/kitchens")}>
            SHOW MORE
          </button>
        </div>
      </div>

      {/* Card 2 */}
      {/* <div className="selection-card">
        <div className="selection-overlay"></div>
        <img src={img2} alt="Bedrooms" className="selection-image" />
        <div className="selection-content">
          <h2 className="Moda">BEDROOMS</h2>
          <p>
            From trendy apart-hotels to luxury living, we can work on any size
            project across the North of England, delivering a smooth,
            hassle-free service, to deadline.
          </p>
          <button className="selection-button" onClick={() => nav("/bedrooms")}>
            SHOW MORE
          </button>
        </div>
      </div> */}

      {/* Card 3 */}
      <div className="selection-card">
        <div className="selection-overlay"></div>
        <img src={img3} alt="Corporate" className="selection-image" />
        <div className="selection-content">
          <h2 className="Moda">WARDROBES</h2>
          <p>
            Whether you want to buy a Coloured Glass Sliding Door Wardrobe,
            Fitted Wardrobe, Mirror Door Wardrobe, Hinged Door Wardrobe, or
            Walk-in Wardrobe, we have an infinite range of options.
          </p>
          <button
            className="selection-button"
            onClick={() => nav("/wardrobes")}
          >
            SHOW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Selection;
