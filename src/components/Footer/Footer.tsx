import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedHeader from "components/Texts/AnimatedHeader";
import SocialList from "components/SocialList/SocialList";
import classNames from "classnames";

function FooterContact() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "50%",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: 0.3,
        ease: "linear",
      }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <h3 className="text-white-700 text-lg sm:text-3xl text-center pb-[20px]">
        Got a project or proposal?
      </h3>
      <a href="mailto:chrizudev@gmail.com" className="group">
        <AnimatedHeader
          fontSize="text-4xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
          className="text-white-900 after:w-full after:bg-white-900 after:h-1 after:block after:group-hover:scale-x-0 after:duration-500"
        >
          {"ContactMe"}
        </AnimatedHeader>
      </a>
    </motion.div>
  );
}

async function copyTextToClipboard(text: string) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  }
}

function CopyableEmail() {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className=" lg:order-3 group flex flex-col justify-center items-center lg:items-end relative">
      <div className="flex w-full flex-col items-center lg:items-end absolute bottom-[1.5rem]  text-white-700 text-[12px] uppercase">
        <div
          className={classNames(
            "transition-all duration-300",
            isCopied
              ? "opacity-0 -translate-y-full"
              : "opacity-0 group-hover:opacity-60"
          )}
        >
          Copy email
        </div>
        <div
          className={classNames(
            "absolute transition-all duration-300",
            isCopied
              ? "opacity-60 translate-y-0"
              : "opacity-0 -translate-y-full"
          )}
        >
          Copied email
        </div>
      </div>
      <button
        onMouseLeave={() => setIsCopied(false)}
        type="button"
        onClick={() => {
          copyTextToClipboard("chrizudev@gmail.com").then(() =>
            setIsCopied(true)
          );
        }}
        className="text-white-900"
      >
        chrizudev@gmail.com
      </button>
    </div>
  );
}

function SubFooter() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "50%",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: 0.6,
        ease: "linear",
      }}
      viewport={{ once: true }}
      className="flex flex-col gap-y-5 items-center justify-between lg:flex-row px-defaultSpacing"
    >
      <SocialList color="white-900 lg:order-1" />
      <CopyableEmail />
      <span className="text-white-900 lg:order-2">
        © 2022 Krzysztof Bonecki
      </span>
    </motion.div>
  );
}

function Footer(): JSX.Element {
  return (
    <footer className="w-screen h-screen relative flex flex-col justify-between py-mobilePadding lg:py-desktopPadding bg-black-900">
      <div className="w-full flex-1 flex flex-col justify-center px-defaultSpacing gap-[20px]">
        <FooterContact />
      </div>
      <SubFooter />
    </footer>
  );
}

export default Footer;
