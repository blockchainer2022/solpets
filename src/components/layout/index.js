import React from "react";
import Header from "../header";
const Index = ({ children }) => {
  return (
    <main className="text-white">
      <Header /> <div>{children}</div>
    </main>
  );
};

export default Index;
