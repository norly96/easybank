import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:items-center justify-between font-light bg-slate-100  ">
      {/* Design Mobile */}
      <div className="lg:hidden flex overflow-hidden">
        <img
          className=" z-10 w-full"
          src="/images/bg-intro-mobile.svg"
          alt=""
        />
        <img
          className="absolute w-full -mt-[100px] z-20"
          src="/images/image-mockups.png"
          alt=""
        />
      </div>

      {/* Hero */}
      <div className="lg:pl-32 text-center mx-10 lg:mx-0 lg:my-40">
        <h1 className="text-dark-blue text-center lg:text-start font-PublicSans text-5xl md:text-6xl">
          Next generation <br />
          digital banking
        </h1>
        <h2 className="my-5 lg:my-7 text-lg lg:text-xl text-center lg:text-start text-grayish-blue">
          Take your financial life online. Your Easybank account <br /> will be
          a one-stop-shop for spending, saving,
          <br /> budgeting, investing, and much more.
        </h2>
        <div className="flex justify-center lg:justify-start">
          <Button />
        </div>
      </div>

      {/* Design Desktop */}
      <div className="hidden lg:block overflow-hidden">
        <img className=" z-10 " src="/images/bg-intro-desktop.svg" alt="" />
        <img
          className="absolute -mt-[780px] translate-x-36 z-20"
          src="/images/image-mockups.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
