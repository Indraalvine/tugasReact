import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  const links = [
    { link: "Home", to: "/" },
    { link: "Products", to: "/Products" },
    { link: "Contact", to: "/Contact" },
  ];

  return (
    <>
      <ul className="flex gap-4 mt-4 mb-2 pr-10 text-xl font-medium text-slate-500">
        {links.map((link) => (
          <li key={link.link}>
            <Link to={link.to}>{link.link}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavList;
