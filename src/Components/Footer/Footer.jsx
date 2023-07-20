import React from "react";
import FooterService from "./FooterService";

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around items-center gap-7 pt-10 pb-5 bottom-0 bg-black">
        <FooterService />
      </div>
    </>
  );
};

export default Footer;
