import React from "react";

const Index = () => {
  return (
    <section className="py-24 bg-darkBlue roadMap" id="roadmap">
      <div className="container">
        <div className="roadmap-content">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-yellow">
            Roadmap
          </h2>
          <div className="bg-black bg-opacity-40 p-10 py-20 mt-28 w-full max-w-4xl mx-auto">
            <div>
              <Title text="Part1" />
              <Title2 text="August 2021" />
              <Para text="Originally Pixel Pets on the ETH Blockchain, the idea emerges to switch to Solana to become the Sol Pets we now know and love." />
              <Title2 text="September 2021" />
              <Para text="With brand new artwork featuring 8 beautifully designed animal species Sol Pets emerges as the new project on the block." />
              <Title2 text="October 2021" />
              <Para text="The website is revealed and on the 13th all the 10,000 Sol Pets are let free to explore the vast Solana Blockchain and meet their loving owners." />
              <Para text="Donation to the ASPCA to give back to real animals in need as well as one more charity selected by the community." />
            </div>
            <div className="mt-10">
              <Title text="Part 2" />
              <Title2 text="Q4 2021" />
              <Para
                text="List on Solanart Marketplace and others after launch, as well as host three huge giveaways for Holders to give back to the community 
           "
              />
              <Para text="Launch of the Pet Gang Discord channels for each species as well as species specific giveaways" />
              <Para text="2.5% of royalties from all secondary sales will be given back to the community in the form of giveaways and rewards" />
            </div>
            <div className="mt-10">
              <Title text="Part 3" />
              <Title2 text="2021" />
              <Para text="2022 Expansion of the Sol Pet universe with exclusive perks for each species type " />
              <Para text="Announcement on Gen 2 mythical pets (Unicorn/Dragons/& more) " />
              <Para text="Announcement of new developments in the Sol Pet Metaverse and extension of the roadmap (stay tuned!) " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

const Title = ({ text }) => (
  <h6 className="text-yellow text-2xl font-bold">{text}</h6>
);
const Title2 = ({ text }) => <p className="font-bold mb-0 mt-5">{text}</p>;

const Para = ({ text }) => (
  <p className="text-gray-200 text-base mt-4">{text}</p>
);
