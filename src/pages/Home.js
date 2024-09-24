import React from "react";
import Nav from "../composants/nav/Nav";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <div>
      <Nav />

      <Canvas></Canvas>
    </div>
  );
};

export default Home;
