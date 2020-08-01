import "../globalStyles/scss/index.scss";

import React from "react";

import { Footer, MainMenu, MetaConsumer, OverlayManager } from "../components";
import { Routes } from "./routes";
import { TopNavbar } from "../@next/components/organisms/TopNavbar"

const App: React.FC = () => {
  return (
    <>
      <MetaConsumer />
      <header>
        <MainMenu />
        {/* <TopNavbar /> */}
      </header>
      <Routes />
      <Footer />
      <OverlayManager />
    </>
  );
};

export default App;
