const Characteristics = () => {
  return (
    <section className="lg:pl-32 bg-slate-200 font-PublicSans font-light  ">
      <h1 className="text-dark-blue text-center lg:pt-24 lg:text-start text-4xl md:text-5xl">
        Why choose Easybank?
      </h1>
      <h2 className="">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </h2>
      <div className="flex">
        <div>
          <img src="/images/icon-online.svg" alt="" />
          <h3>Online Banking</h3>
          <p className="text-lg font-light lg:text-xl text-grayish-blue">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div>
          <img src="/images/icon-budgeting.svg" alt="" />
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you're close to hitting your limits.
          </p>
        </div>
        <div>
          <img src="/images/icon-onboarding.svg" alt="" />
          <h3>Fast Onboarding</h3>
          <p>
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div>
          <img src="/images/icon-api.svg" alt="" />
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Characteristics;
