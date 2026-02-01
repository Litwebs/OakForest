import React from "react";
import Header from "../../Header/Header";
import ImgTop from "../../ImgTop/ImgTop";
import Hero from "../../Hero/Hero";
import Banner from "../../Banner/Banner";
import ImgGrid from "../../ImgGrid/ImgGrid";
import ContactForm from "../../ContactForm/ContactForm";
import Footer from "../../Footer/Footer";

import { oakForestKitchenImages } from "../../../IMGS/Kitchen/oakForestKitchenImages";

const KitchenPage = () => {
  return (
    <div>
      <Header />
      <ImgTop Img={oakForestKitchenImages[0]} title={"KITCHEN"} />
      <Hero
        title={"Bespoke Kitchens"}
        description="At Oak Forest of Yorkshire, we believe the kitchen is more than just a space
          —it’s the heart of the home. Our philosophy is simple: to create tailor-made,
          high-spec kitchens that blend affordability with exceptional craftsmanship,
          ensuring both style and functionality.
          We use only the finest materials and components, ensuring every detail is
          crafted to last a lifetime. It’s not just about the surface finishes but also the
          hidden elements that provide unmatched durability and strength.
          Whether you’re drawn to a contemporary, seamless design or a more
          traditional, handcrafted aesthetic, our expert craftsmanship ensures a
          bespoke kitchen tailored to your home and lifestyle."
        Img={oakForestKitchenImages[1] || oakForestKitchenImages[0]}
        ShowBtn={false}
      />
      <Banner
        title={"Our trusted trades team"}
        description={
          "Over the years, we’ve built a trusted team of skilled tradespeople we’re proud to work with at Oak Forest of Yorkshire."
        }
      />
      <ImgGrid images={oakForestKitchenImages} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default KitchenPage;
