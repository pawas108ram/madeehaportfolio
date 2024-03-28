import React from "react";
import NavLink from "./NavLink";

function MenuOverlay({ navLinks }) {
  return (
    <ul className="z-10 flex flex-col py-4 items-center">
      {navLinks.map((link, index) => {
        return (
          <li key={index}>
            <NavLink href={link.path} title={link.title}></NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default MenuOverlay;
