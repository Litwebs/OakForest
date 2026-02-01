import React from "react";
import Header from "../../Header/Header";
import ImgTop from "../../ImgTop/ImgTop";
import Hero from "../../Hero/Hero";
import Banner from "../../Banner/Banner";
import ImgGrid from "../../ImgGrid/ImgGrid";
import ContactForm from "../../ContactForm/ContactForm";
import Footer from "../../Footer/Footer";

import { oakForestMediaWallsImages } from "../../../IMGS/md/oakForestMediaWallsImages";

const MWalls = () => {
  return (
    <div>
      <Header />
      <ImgTop Img={oakForestMediaWallsImages[0]} title={"Walls"} />
      <Hero
        title={"Custom Media Walls"}
        description="A media wall is more than just a place for your TV—it’s a
          statement feature that enhances your living space. At
          Oak Forest of Yorkshire, we design bespoke media walls
          that integrate TV units, shelving, ambient lighting, and
          storage for a sleek and modern look. Whether you want
          a minimalist floating unit or a bold centre piece with
          built-in cabinetry, we tailor each design to complement
          your home’s style and functionality."
        Img={oakForestMediaWallsImages[1] || oakForestMediaWallsImages[0]}
        ShowBtn={false}
      />
      <Banner
        title={"Our trusted trades team"}
        description={
          "Over the years, we’ve built a trusted team of skilled tradespeople we’re proud to work with at Oak Forest of Yorkshire."
        }
      />
      <ImgGrid images={oakForestMediaWallsImages} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default MWalls;
