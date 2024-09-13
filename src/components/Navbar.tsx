import { useState } from "react";
import Button from "./ui/Button";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openNav = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="flex justify-between top-0 left-0 right-0 fixed z-50 items-center bg-white h-auto px-10 sm:px-20 md:px-32">
        <img src="/images/logo.svg" alt="logo" className="py-8" />
        {/* Desktop Design */}
        <nav className="hidden lg:flex h-[84px] items-center gap-8 font-PublicSans text-grayish-blue text-lg font-light">
          <a
            href=""
            className="h-full border-gradient  flex items-center hover:text-dark-blue"
          >
            Home
          </a>
          <a
            href=""
            className="h-full border-gradient flex items-center  hover:text-dark-blue"
          >
            About
          </a>
          <a
            href=""
            className="h-full border-gradient flex items-center  hover:text-dark-blue"
          >
            Contact
          </a>
          <a
            href=""
            className="h-full border-gradient flex items-center  hover:text-dark-blue"
          >
            Blog
          </a>
          <a
            href=""
            className="h-full border-gradient flex items-center  hover:text-dark-blue"
          >
            Careers
          </a>
        </nav>
        <div className="hidden lg:block">
          <Button />
        </div>

        {/* Mobile Design */}
        <button className="block lg:hidden" onClick={openNav}>
          {open ? (
            <img src="/images/icon-close.svg" alt="icon-close" />
          ) : (
            <img src="/images/icon-hamburger.svg" alt="icon-hamburger" />
          )}
        </button>
      </header>
      {open && (
        <div className="fixed lg:hidden py-8 shadow-dark-blue shadow-[-1px_-2px_126px_99px_rgba(0,0,0,0.78)] text-dark-blue bg-white text-2xl font-light gap-6 flex flex-col z-40 w-auto inset-x-12 top-28 items-center rounded-md bg-red-400 h-auto">
          <a className="hover:text-lime-green" href="#">
            Home
          </a>
          <a className="hover:text-lime-green" href="#">
            About
          </a>
          <a className="hover:text-lime-green" href="#">
            Contact
          </a>
          <a className="hover:text-lime-green" href="#">
            Blog
          </a>
          <a className="hover:text-lime-green" href="#">
            Careers
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
