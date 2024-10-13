import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="bg-slate-900 text-white">
      <div className="container mx-auto ">
        <div className="flex justify-between py-6 mx-28">
          <h1 className="text-xl">Start Bootstrap</h1>
          <ul className="flex space-x-5 ">
            <li>
              <a
                href="#"
                className="text-slate-500 hover:text-white transition-all active"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-500 hover:text-white transition-all"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-500 hover:text-white transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
