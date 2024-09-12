import Button from "./ui/Button";

const Navbar = () => {
  return (
    <header className="flex justify-between top-0 left-0 right-0 fixed z-50 items-center bg-white h-auto px-32">
      <img src="/images/logo.svg" alt="logo" className="py-8" />
      <nav className="flex h-[84px] items-center gap-8 font-PublicSans text-grayish-blue text-lg font-light">
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
      <Button />
    </header>
  );
};

export default Navbar;
