import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4 `}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen
        bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out
        filter drop-shadow-md text-mycolor3-600 font-bold text-xl`}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {""}
      </div>
      <div className="flex flex-col ml-4 text-base space-y-4">
        <Link className=" font-normal   " href="/home">
          Home
        </Link>
        <Link className="font-normal " href="/about">
          About Us
        </Link>

        <Link className="font-normal" href="/services">
          Services
        </Link>
        <Link
          className="font-normal hover:bg-primary-900 hover:text-white "
          href="/project"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Project
        </Link>

        <Link
          className="font-normal hover:bg-primary-900 hover:text-white "
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full fixed top-0 animated z-40 justify-between ">
      <nav className="flex  filter drop-shadow-md bg-white sm:px-10  py-4 h-14 items-center">
        <MobileNav open={open} setOpen={setOpen} />
        <div className="w-6/12 flex items-center">
          <a className="text-2xl font-semibold mt-6" href="/">
            <Image src="/image/logo.png" width={100} height={100} alt="logo" />
          </a>
        </div>
        <div className=" w-6/12 flex justify-end mr-14 items-center">
          <div
            className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>

          <div className="hidden md:flex text-gray-900  font-semibold text-sm">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>

            <NavLink to="/service">Services</NavLink>

            <NavLink to="/project">Project</NavLink>

            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
