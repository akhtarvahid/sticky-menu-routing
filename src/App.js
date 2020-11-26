import React from "react";
import Header from "./header/Header";
import HeroBanner from "./components/HeroBanner";
import { MainBody } from "./components/MainBody";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <HeroBanner />
      <Header />
      <MainBody />
    </div>
  );
}