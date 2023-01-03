import React from "react";
import HomeBanner from "./HomeBanner";
import HomeProducts from "./HomeProducts";
import HomeService from "./HomeService";

const Home = () => {

  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeService></HomeService>
      <HomeProducts></HomeProducts>
    </div>
  );
};

export default Home;
