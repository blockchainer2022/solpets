import React from "react";
import HeroPet from "../../assets/image/hero-pet-image.svg";

const Index = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="pb-20 py-32 banner-content lg:flex lg:flex-row-reverse">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </section>
  );
};

export default Index;

const RightSide = () => (
  <Cols>
    <div className="text-center mt-10 lg:text-left lg:ml-28">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold my-4 ">
        Sol Pets <br /> are coming!
      </h1>
      <p className="mb-3 md:text-xl">
        A collection of 10,000 Sol pets on the Solana network.
      </p>
      <p className="text-yellow text-xl leading-7  sm:text-2xl sm:mt-10">
        When The Timer Reaches Zero, 1,000 Sol Pets Will Become Available To
        Those Who Have Joined The White List!
      </p>
      <div className="timer-main">
        <div
          id="flipdown"
          className="flipdown mx-auto sm:flex sm:justify-center lg:block "
        ></div>
      </div>
    </div>
  </Cols>
);
const LeftSide = () => (
  <Cols>
    <div className="w-32 sm:w-40 md:w-60 mx-auto">
      <img src={HeroPet} alt="hero-pet" className=" mx-auto" />
    </div>
  </Cols>
);

const Cols = ({ children }) => <div className="lg:w-1/2">{children}</div>;
