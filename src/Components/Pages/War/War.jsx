import React from "react";
import Header from "../../Header/Header";
import ImgTop from "../../ImgTop/ImgTop";
import Hero from "../../Hero/Hero";
import Banner from "../../Banner/Banner";
import ImgGrid from "../../ImgGrid/ImgGrid";
import ContactForm from "../../ContactForm/ContactForm";
import Footer from "../../Footer/Footer";
import { oakForestWardrobesImages } from "../../../IMGS/war/oakForestWardrobesImages";

const War = () => {
  return (
    <div>
      <Header />
      <ImgTop Img={oakForestWardrobesImages[8]} title={"WARDROBES"} />
      <Hero
        title={"Personalised Wardrobes"}
        description="At Oak Forest of Yorkshire, we design and craft made-
            to-measure wardrobes that seamlessly fit your space
            and style. Whether you prefer a sleek, modern finish or a
            more traditional design, our fully customised storage
            solutions offer the perfect balance of aesthetics and
            functionality. From floor-to-ceiling wardrobes to walk-in
            closets, we create tailored interiors with smart storage
            features, integrated lighting, and premium materials to
            enhance your home."
        Img={oakForestWardrobesImages[4] || oakForestWardrobesImages[0]}
        ShowBtn={false}
      />
      <Banner
        title={"Our trusted trades team"}
        description={
          "Over the years, we’ve built up a team of trusted trades people that we’re proud to have as part of the Warren Day family"
        }
      />
      <ImgGrid images={oakForestWardrobesImages} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default War;
