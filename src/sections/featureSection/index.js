import React from "react";
import Featurs1 from "../../assets/image/features1.svg";
import Featurs2 from "../../assets/image/features2.svg";
import Featurs3 from "../../assets/image/features3.svg";
import FeatureIcon1 from "../../assets/image/featureicon1.svg";
import FeatureIcon2 from "../../assets/image/featureicon2.svg";
import FeatureIcon3 from "../../assets/image/featureicon3.svg";
import FeatureIcon4 from "../../assets/image/featureicon4.svg";
import FeatureIcon5 from "../../assets/image/featureicon5.svg";
import FeatureIcon6 from "../../assets/image/featureicon6.svg";
import FeatureIcon7 from "../../assets/image/featureicon7.svg";
import FeatureIcon8 from "../../assets/image/featureicon8.svg";
import FeatureIcon9 from "../../assets/image/featureicon9.svg";
const Index = () => {
  return (
    <section className="py-24 relative" id="feature">
      <div className="container">
        <h4 className="text-3xl md:text-4xl text-center font-bold text-yellow mb-32">
          Sol Pets Features
        </h4>
        <div className="md:flex md:items-center md:flex-row-reverse ">
          <Image />
          <ContentPart />
        </div>
        <div className="md:flex  md:items-center mt-10">
          <Image img={Featurs2} />
          <ContentPart
            title="Unique"
            text2=""
            text1="Each Sol Pet is algorithmically generated with 1000’s of trait combinations and is one of eight completely separate species: Dog, Cat, Tiger, Turtle, Rabbit, Monkey, Panda, Elephant"
          />
        </div>
        <div className="md:flex md:items-center md:flex-row-reverse mt-10">
          <Image img={Featurs3} />
          <ContentPart
            title="Pet Gangs"
            text2=""
            text1="Each Sol Pet is algorithmically generated with 1000’s of trait combinations and is one of eight completely separate species: Dog, Cat, Tiger, Turtle, Rabbit, Monkey, Panda, Elephant"
          />
        </div>

        <img src={FeatureIcon1} alt="" className="fb-1" />
        <img src={FeatureIcon2} alt="" className="fb-2" />
        <img src={FeatureIcon3} alt="" className="fb-3" />
        <img src={FeatureIcon4} alt="" className="fb-4" />
        <img src={FeatureIcon5} alt="" className="fb-5" />
        <img src={FeatureIcon6} alt="" className="fb-6" />
        <img src={FeatureIcon7} alt="" className="fb-7" />
        <img src={FeatureIcon8} alt="" className="fb-8" />
        <img src={FeatureIcon9} alt="" className="fb-9" />
      </div>
    </section>
  );
};

export default Index;

// const Right = (())
const def2 =
  " This project is created with the community in mind first and all suggestions from the community will be considered going forward for the benefit of the holders.";
const def1 =
  " 2.5% of all royalties will be reinvested back into the community through giveaways and new developments for the Sol Pet Metaverse.";
const ContentPart = ({
  title = "Community Focus",
  text1 = def1,
  text2 = def2,
}) => (
  <Cols>
    <h5 className="text-yellow text-2xl md:text-3xl font-bold text-center md:text-left mb-8">
      {title}
    </h5>
    <p className="text-center md:text-left lg:mr-32 md:text-lg">{text1}</p>
    {text2 !== "" ? (
      <p className="text-center md:text-left mt-4 lg:mr-32 md:text-lg">
        {text2}
      </p>
    ) : null}
  </Cols>
);

const Image = ({ img = Featurs1 }) => (
  <Cols>
    <div className=" mb-14 w-full sm:w-80 mx-auto md:w-auto">
      <img src={img} alt="" className="w-full mx-auto md:w-3/4" />
    </div>
  </Cols>
);
const Cols = ({ children }) => <div className="md:w-1/2">{children}</div>;
