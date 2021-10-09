import React from "react";
import Header from "../header";
import Footer from "../footer";
const Index = ({ children }) => {
  return (
    <main className="text-white">
      <Header /> <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Index;
