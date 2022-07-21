import React from "react";
import Header from "components/Texts/Header";
import AnimatedHeader from "components/Texts/AnimatedHeader";

function Signature() {
  return (
    <span className="signature absolute right-[5%] bottom-[8%] text-2xl md:text-3xl font-[400] text before:content-['<span>']  after:content-['</span>']">
      {"Portfolio"}
    </span>
  );
}

function MainText() {
  return (
    <h1>
      <AnimatedHeader className="inline-block">
        {"Frontend Developer"}
      </AnimatedHeader>
      <br />
      <Header className="stroke-header">{"React "}</Header>
      <Header className="stroke-header">{"ReactNative"}</Header>
    </h1>
  );
}

function Hero(): JSX.Element {
  return (
    <section className="w-screen h-screen flex items-center justify-center p-mobileH lg:p-desktopH bg-white-900 relative">
      <MainText />
      <Signature />
    </section>
  );
}

export default Hero;
