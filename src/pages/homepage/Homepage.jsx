import React from "react";
import Routine from "../../components/sections/Routine";
import Community from "../../components/sections/Community";

const Homepage = () => {
  return (
    <div className="w-full lg:w-[1440px]">
      <Routine />
      <Community />
    </div>
  );
};

export default Homepage;
