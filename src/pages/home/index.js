import React from "react";
import { Layout } from "../../components";
import {
  HeroSection,
  AboutSection,
  FeatureSection,
  OwnerSection,
  RoadMapSection,
} from "../../sections";
const Index = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        <OwnerSection />
        <RoadMapSection />
      </Layout>
    </div>
  );
};

export default Index;
