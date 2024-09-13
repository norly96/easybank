const Articles = () => {
  return (
    <section className="px-20 md:px-32 py-16 lg:pt-0 bg-light-gray font-PublicSans font-light">
      <h1 className="text-dark-blue text-center lg:pt-16 lg:text-start text-4xl md:text-5xl">
        Latest Articles
      </h1>
      <div className="flex justify-center lg:justify-between flex-wrap mt-16 gap-7">
        <div className="w-80 bg-white rounded-lg">
          <img
            className="rounded-t-lg w-full h-56"
            src="/images/image-currency.jpg"
            alt=""
          />
          <div className="px-10 my-10">
            <h4 className="text-grayish-blue">By Claire Robinson</h4>
            <h2 className="text-dark-blue font-normal text-xl my-2">
              Receive money in any currency with no fees
            </h2>
            <p className="text-mg text-grayish-blue text-start">
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in the single...{" "}
            </p>
          </div>
        </div>
        <div className="w-80 bg-white rounded-lg">
          <img
            className="rounded-t-lg h-56"
            src="/images/image-restaurant.jpg"
            alt=""
          />
          <div className="px-10 my-10">
            <h4 className="text-grayish-blue">By Wilson Hutton</h4>
            <h2 className="text-dark-blue font-normal text-xl my-2">
              Treat yourself without worrying about money
            </h2>
            <p className="text-mg text-grayish-blue text-start">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you...{" "}
            </p>
          </div>
        </div>
        <div className="w-80 bg-white rounded-lg">
          <img
            className="rounded-t-lg h-56"
            src="/images/image-plane.jpg"
            alt=""
          />
          <div className="px-10 my-10">
            <h4 className="text-grayish-blue">By Claire Robinson</h4>
            <h2 className="text-dark-blue font-normal text-xl my-2">
              Receive money in any currency with no fees
            </h2>
            <p className="text-mg text-grayish-blue text-start">
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in the single...{" "}
            </p>
          </div>
        </div>
        <div className="w-80 bg-white rounded-lg">
          <img
            className="rounded-t-lg h-56"
            src="/images/image-confetti.jpg"
            alt=""
          />
          <div className="px-10 my-10">
            <h4 className="text-grayish-blue">By Claire Robinson</h4>
            <h2 className="text-dark-blue font-normal text-xl my-2">
              Receive money in any currency with no fees
            </h2>
            <p className="text-mg text-grayish-blue text-start">
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in the single...{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
