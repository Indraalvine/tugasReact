import React from "react";
import NavbarTitle from "./NavbarTitle";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-sky-400 mb-5 shadow-sm z-10 sticky top-0">
        <NavbarTitle />
        <NavList />
      </div>
    </>
  );
};

export default Navbar;
