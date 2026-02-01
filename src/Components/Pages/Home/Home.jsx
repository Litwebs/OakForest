import React from "react";
import Header from "../../Header/Header";
import ImgTop from "../../ImgTop/ImgTop";
import Hero from "../../Hero/Hero";
import HeroHome from "./HeroHome";
import Banner from "../../Banner/Banner";
import Selection from "../../Selection/Selection";
import Rev from "../../Rev/Rev";
import ContactForm from "../../ContactForm/ContactForm";
import Footer from "../../Footer/Footer";

import { oakForestHomeImages } from "../../../IMGS/home/oakForestHomeImages";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header />
      <ImgTop Img={oakForestHomeImages[0]} />
      <Hero
        title={"LUXURY TAILORED BEDROOM DESIGN"}
        description={
          <>
            <p>Bespoke Interiors, Made in Yorkshire. Installed Nationwide.</p>
            <p>
              At Oak Forest of Yorkshire, we design, manufacture, and install
              beautifully crafted kitchens, fitted wardrobes, and media walls —
              all made in our own Yorkshire-based factory.
            </p>
            <p>
              Because everything is produced in-house, we have complete control
              over quality, detail, and finish — giving you truly bespoke
              furniture built to last.
            </p>
            <p>
              From contemporary statement kitchens to elegant bedroom wardrobes
              and show-stopping TV media walls, every project is tailored around
              your space, your style, and your lifestyle.
            </p>
            <p>Why choose Oak Forest of Yorkshire?</p>
            <ul>
              <li>✔ Made in our Yorkshire factory – not outsourced</li>
              <li>✔ We operate nationwide</li>
              <li>✔ Design, manufacture &amp; installation service</li>
              <li>✔ Over 100 colours and endless design combinations</li>
              <li>✔ Premium materials and expert craftsmanship</li>
              <li>✔ Up to 10-year warranty for peace of mind</li>
            </ul>
            <p>
              No flat-pack. No compromises. Just high-quality, made-to-measure
              interiors designed to transform your home.
            </p>
          </>
        }
        Img={oakForestHomeImages[1] || oakForestHomeImages[0]}
      />
      <Banner
        title={"Giving our clients the very best service"}
        description={
          "Our role here at Oak Forest of Yorkshire is to ensure every client receives exceptional service and is delighted with their experience from design to installation."
        }
      />
      <HeroHome images={oakForestHomeImages} />
      <Banner title={"We aim to give our clients the best service"} />
      <Selection />
      <Banner
        title={"Need to discuss your design requirements?"}
        description={
          <>
            Please feel free to give us a call on
            <span className="tag"> 01274 576 908 </span> or send us an enquiry
            through our
            <span
              className="tag link"
              onClick={() => scrollToSection("contact")}
            >
              {" "}
              Contact form
            </span>{" "}
            and we’d be delighted to speak with you.
          </>
        }
      />
      <Rev />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
