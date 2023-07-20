import React from "react";
import NavbarTitle from "./NavbarTitle";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between pb-5 shadow-sm z-10 sticky top-0 bg-black opacity-90">
        <NavbarTitle />
        <NavList />
      </div>
    </>
  );
};

export default Navbar;
