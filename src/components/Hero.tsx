import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 justify-between font-light bg-slate-100  ">
      <div className=" grid-cols-1 my-auto pl-32 ">
        <h1 className=" text-dark-blue mr-40 font-PublicSans text-7xl">
          Next generation <br />
          digital banking
        </h1>
        <h2 className="my-7 text-xl text-grayish-blue">
          Take your financial life online. Your Easybank account <br /> will be
          a one-stop-shop for spending, saving,
          <br /> budgeting, investing, and much more.
        </h2>
        <Button />
      </div>
      <div className=" grid-cols-1 overflow-hidden ">
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
