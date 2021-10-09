/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
const Index = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  });
  const openHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header
      className={`bg-black ${show ? "md:bg-black" : " md:bg-transparent"} 
      transition-all
      fixed top-0 left-0 w-full z-50 py-6`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="text-2xl ">
            <a href="#">
              <span className="font-bold text-yellow">SOL</span>
              <span className="ml-1">PETS</span>
            </a>
          </div>
          <div className="md:flex items-center hidden">
            <ul className="flex">
              <ListItem />
              <ListItem text="About" link="#about" />
              <ListItem text="Features" link="#feature" />
              <ListItem text="Roadmap" link="#roadmap" />
            </ul>
            <div className="flex text-3xl">
              <a href="#">
                <AiOutlineTwitter />
              </a>
              <a href="#" className="inline-block ml-5">
                <SiDiscord />
              </a>
            </div>
          </div>
          <div
            className="md:hidden text-2xl sm:text-3xl cursor-pointer"
            onClick={openHandler}
          >
            {open ? <FaTimes /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`mobile-nav bg-dark ${open ? "active" : null} lg:hidden`}>
        <ul className="list-none text-center p-8 text-white">
          <li className="p-2 text-lg uppercase">
            <a className="block" href="#" onClick={openHandler}>
              Home
            </a>
          </li>
          <li className="p-2 text-lg uppercase">
            <a className="block" href="#about" onClick={openHandler}>
              About us
            </a>
          </li>
          <li className="p-2 text-lg uppercase">
            <a className="block" href="#feature" onClick={openHandler}>
              Features
            </a>
          </li>
          <li className="p-2 text-lg uppercase">
            <a className="block" href="#roadmap" onClick={openHandler}>
              Roadmap
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Index;

const ListItem = ({ text = "Home", link = "#" }) => (
  <li className="">
    <a href={link} className="px-10 uppercase inline-block">
      {text}
    </a>
  </li>
);
