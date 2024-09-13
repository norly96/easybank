const Characteristics = () => {
  return (
    <section className="px-20 md:px-32 py-16 lg:pt-0 bg-light-grayish-blue font-PublicSans font-light">
      <h1 className="text-dark-blue text-center lg:pt-24 lg:text-start text-4xl md:text-5xl">
        Why choose Easybank?
      </h1>
      <h2 className="text-lg text-center mx-10 lg:text-start lg:mx-0 font-light lg:text-xl text-grayish-blue my-5">
        We leverage Open Banking to turn your bank account into your financial
        hub.
        <br /> Control your finances like never before.
      </h2>
      <div className="flex justify-center lg:justify-between flex-wrap mt-16 gap-6">
        <div className="flex flex-col w-80 items-center lg:items-start">
          <img src="/images/icon-online.svg" alt="" />
          <h3 className="text-dark-blue font-light text-2xl my-5">
            Online Banking
          </h3>
          <p className="font-light text-xl text-grayish-blue text-center lg:text-start ">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="flex flex-col w-80 items-center lg:items-start">
          <img src="/images/icon-budgeting.svg" alt="" />
          <h3 className="text-dark-blue font-light text-2xl my-5">
            Simple Budgeting
          </h3>
          <p className="font-light text-xl text-grayish-blue text-center lg:text-start">
            See exactly where your money goes each month. Receive notifications
            when you're close to hitting your limits.
          </p>
        </div>
        <div className="flex flex-col w-80 items-center lg:items-start">
          <img src="/images/icon-onboarding.svg" alt="" />
          <h3 className="text-dark-blue font-light text-2xl my-5">
            Fast Onboarding
          </h3>
          <p className="font-light text-xl text-grayish-blue text-center lg:text-start">
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="flex flex-col w-80 items-center lg:items-start">
          <img src="/images/icon-api.svg" alt="" />
          <h3 className="text-dark-blue font-light text-2xl my-5">Open API</h3>
          <p className="font-light text-xl text-grayish-blue text-center lg:text-start">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Characteristics;
