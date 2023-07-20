import React from "react";
import FooterService from "./FooterService";

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-7 mt-10 bottom-0 bg-sky-400">
        <FooterService />
      </div>
    </>
  );
};

export default Footer;
