import Button from "./ui/Button";

const Footer = () => {
  return (
    <footer className="bg-dark-blue">
      {/* Mobile Design */}
      <div className=" flex flex-col lg:hidden py-16">
        <img
          src="/images/logo-footer.svg"
          alt="logo-footer"
          className="mx-28 sm:mx-52 mb-8"
        />
        <div className="flex justify-center gap-4 sm:gap-5 mb-5">
          <a href="#">
            <img
              className="w-10"
              src="/images/icon-facebook.svg"
              alt="icon-facebook"
            />
          </a>
          <a href="#">
            <img
              className="w-10"
              src="/images/icon-youtube.svg"
              alt="icon-youtube"
            />
          </a>

          <a href="#">
            <img
              className="w-[40px] h-full"
              src="/images/icon-twitter.svg"
              alt="icon-twitter"
            />
          </a>

          <a href="#">
            <img
              className="w-10"
              src="/images/icon-pinterest.svg"
              alt="icon-pinterest"
            />
          </a>

          <a href="#">
            <img
              className="w-10"
              src="/images/icon-instagram.svg"
              alt="icon-instagram"
            />
          </a>
        </div>
        <div className="flex flex-col text-white gap-2 text-lg sm:text-2xl items-center mb-8">
          <a className="hover:text-lime-green" href="">
            About Us
          </a>
          <a className="hover:text-lime-green" href="">
            Contact
          </a>
          <a className="hover:text-lime-green" href="">
            Blog
          </a>
          <a className="hover:text-lime-green" href="">
            Careers
          </a>
          <a className="hover:text-lime-green" href="">
            Support
          </a>
          <a className="hover:text-lime-green" href="">
            Privacy Policy
          </a>
        </div>
        <div className="flex justify-center lg:justify-start mb-5">
          <Button />
        </div>
        <p className="text-center text-grayish-blue">
          &copy; EasyBank. All Rights Reserved
        </p>{" "}
      </div>

      {/* Desktop Design */}
      <div className="hidden lg:block py-16 h-auto">
        <div className="flex px-32 items-center justify-between">
          <div className="flex gap-32">
            <div className="flex w-36 flex-col gap-10">
              <img src="/images/logo-footer.svg" alt="logo-footer" />
              <div className="flex justify-center gap-3 mb-5">
                <a href="#">
                  <img
                    className="w-6"
                    src="/images/icon-facebook.svg"
                    alt="icon-facebook"
                  />
                </a>
                <a href="#">
                  <img
                    className="w-6"
                    src="/images/icon-youtube.svg"
                    alt="icon-youtube"
                  />
                </a>

                <a href="#">
                  <img
                    className="w-[24px] h-full"
                    src="/images/icon-twitter.svg"
                    alt="icon-twitter"
                  />
                </a>

                <a href="#">
                  <img
                    className="w-6"
                    src="/images/icon-pinterest.svg"
                    alt="icon-pinterest"
                  />
                </a>

                <a href="#">
                  <img
                    className="w-6"
                    src="/images/icon-instagram.svg"
                    alt="icon-instagram"
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col text-white gap-2 text-md items-start">
              <a className="hover:text-lime-green" href="">
                About Us
              </a>
              <a className="hover:text-lime-green" href="">
                Contact
              </a>
              <a className="hover:text-lime-green" href="">
                Blog
              </a>
            </div>
            <div className="flex flex-col text-white gap-2 text-md items-start">
              <a className="hover:text-lime-green" href="">
                Careers
              </a>
              <a className="hover:text-lime-green" href="">
                Support
              </a>
              <a className="hover:text-lime-green" href="">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-end ">
              <Button />
            </div>
            <p className="text-center text-grayish-blue">
              &copy; EasyBank. All Rights Reserved
            </p>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
