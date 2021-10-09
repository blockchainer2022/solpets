import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Image1 from "../../assets/image/1.png";
import Image2 from "../../assets/image/2.png";
import Image3 from "../../assets/image/3.png";
import Image4 from "../../assets/image/4.png";
import Image5 from "../../assets/image/5.png";
import Image6 from "../../assets/image/6.png";
import Image7 from "../../assets/image/7.png";

const Images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image5];

const Index = () => {
  return (
    <section className="about text-center py-24" id="about">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold">About Sol Pets</h2>
        <p className="my-8 md:text-lg  md:max-w-2xl md:mx-auto">
          Sol Pets NFTs are an adorably cool collection of 10k pets available on
          the Solana Blockchain. There are 8 different species, and each Sol Pet
          is randomly generated so that no 2 are alike, meaning every Sol Pet is
          a 1:1.
        </p>
        <div className="mt-20">
          <CustomSlider />
        </div>
      </div>
    </section>
  );
};

export default Index;

const options = {
  margin: 0,
  responsiveClass: true,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  loop: true,
  responsive: {
    0: {
      items: 3,
    },
    400: {
      items: 3,
    },
    600: {
      items: 5,
    },
    700: {
      items: 5,
    },
    1000: {
      items: 7.5,
    },
  },
};
const CustomSlider = () => (
  <div>
    <OwlCarousel className="owl-carousel  owl-theme" {...options}>
      {Images.map((item, i) => (
        <div key={i}>
          <img src={item} alt="" />
        </div>
      ))}
    </OwlCarousel>
  </div>
);
