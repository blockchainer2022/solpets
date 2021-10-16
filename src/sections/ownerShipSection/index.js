import React from "react";
import CardImage1 from "../../assets/image/card1-icon.svg";
import CardImage2 from "../../assets/image/card2-icon.svg";
import CardImage3 from "../../assets/image/card3-icon.svg";
import CardImage4 from "../../assets/image/card4-icon.svg";
import CardImage5 from "../../assets/image/card2-icon.svg";
import CardImage6 from "../../assets/image/card3-icon.svg";
const Index = () => {
  return (
    <section className="py-24 owner-sec">
      <div>
        <div className="container">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-yellow">
            Ownership On Solana
          </h2>
          <p className="my-8 md:text-lg text-center md:max-w-2xl md:mx-auto">
            Each Sol Pet is yours forever (Unless you sell 😊) and it’s natural
            habitat will always be the Solana Blockchain.
          </p>

          <div className="mt-20 sm:flex sm:flex-wrap md:justify-center">
            <div className=" sm:w-1/2 text-center md:w-1/4">
              <Card />
            </div>
            <div className=" sm:w-1/2 text-center mt-10 sm:mt-0 sm:pl-4 md:w-1/4">
              <Card
                img={CardImage2}
                text1="20 Oct 21"
                text2="Launch Date"
                time
              />
            </div>
            <div className=" sm:w-1/2 text-center mt-10 md:mt-0 md:pl-4 md:w-1/4">
              <Card img={CardImage3} text1="1 SOL" text2="Price" />
            </div>
            <div className=" sm:w-1/2 text-center mt-10 md:mt-0 sm:pl-4 md:w-1/4">
              <Card img={CardImage4} text1="10" text2="Buyer Limit" />
            </div>
            <div className=" sm:w-1/2 text-center mt-10   md:w-1/4">
              <Card
                img={CardImage5}
                text1="19 Oct 21"
                text2="White List Pre-Sale"
                time
                timeTxt="12 PM UTC"
              />
            </div>
            <div className=" sm:w-1/2 text-center mt-10  sm:pl-4 md:w-1/4">
              <Card img={CardImage6} text1="1 SOL" text2="Presale Price" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

const Card = ({
  img = CardImage1,
  text1 = "10,000",
  text2 = "Total supply",
  time = false,
  timeTxt = "12 AM UTC",
}) => (
  <>
    <div className="relative bg-blue p-8 pt-12 h-full">
      <div className="card-icon">
        <img src={img} alt="" />
      </div>
      {time ? <p>{timeTxt}</p> : null}
      <h6 className="font-bold text-2xl md:text-4xl">{text1}</h6>
      <p className="text-yellow capitalize">{text2}</p>
    </div>
  </>
);
