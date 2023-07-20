import React from "react";

const FooterService = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">WORKING HOURS</h3>
        <ul className="text-grey-text">
          <li>Mon - Fri : 9:00AM - 9:00PM</li>
          <li>Sat - Sun : 9:00AM - 18:00PM</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">HELP</h3>
        <ul className="text-grey-text">
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </>
  );
};

export default FooterService;
