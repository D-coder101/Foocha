// import { FcInTransit } from "react-icons/fc";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import Navbar from "../ui/Navlinks";
import { useState } from "react";
import SideNav from "./SideNav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideNav = () => {
    setIsOpen((curr) => !curr);
  };
  // bg-white/[0.01] backdrop-blur-sm
  return (
    <header className="w-full z-20 sticky top-0 left-0 right-0 bg-white shadow">
      <div className="mx-auto md:max-w-7xl p-3 flex items-center justify-between">
        <Link to="/" className="md:hidden">
          <img
            src="./foocha-icon.png"
            alt="logo"
            className=" object-cover h-10"
          />
        </Link>
        {/* <div className="md:hidden">
          <Button buttonType="small" size="sm">
            <FcInTransit size={20} />
          </Button>
        </div> */}

        {/* Logo */}
        <Link to="/" className="hidden md:block">
          <img src="./foocha2.png" alt="logo" className="w-32" />
          {/* <Button buttonType="rounded">
            <FcInTransit size={20} />
            Foocha
          </Button> */}
        </Link>

        {/* Navbar */}
        <Navbar />
        <div className="flex gap-2">
          <div className="block">
            <Button buttonType="rounded">
              <IoPersonOutline size={20} />
              Login
              {/* <IoIosArrowDown size={20} /> */}
            </Button>
          </div>

          <Link to="/cart">
            <Button buttonType="small" size="sm">
              <AiOutlineShoppingCart size={20} />
            </Button>
          </Link>
          <div className="md:hidden">
            <Button buttonType="small" size="sm" onClick={handleSideNav}>
              <FiMenu size={20} />
            </Button>
          </div>
        </div>
      </div>
      {/*sidenav */}
      <SideNav isOpen={isOpen} onClose={handleSideNav} />
    </header>
  );
}
