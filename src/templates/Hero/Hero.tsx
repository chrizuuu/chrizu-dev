import React from "react";
import Header from "components/Texts/Header";

function Signature() {
  return (
    <span className="signature absolute right-[5%] bottom-[8%] text-2xl md:text-3xl font-[400] text before:content-['<p>']  after:content-['</p>']">
      {"Krzysztof Bonecki"}
    </span>
  );
}

function MainText() {
  return (
    <h1 className="text-center">
      <Header> {"<FrontendDev />"}</Header>
      <br />
      <Header className="stroke-header">{"React "}</Header>
      <Header className="stroke-header">{"ReactNative"}</Header>
      <br />
      <Header> {"Junior? />"}</Header>
    </h1>
  );
}

function Hero(): JSX.Element {
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-white-900 relative">
      <MainText />
      <Signature />
    </section>
  );
}

export default Hero;
