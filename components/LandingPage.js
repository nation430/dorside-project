import Image from "next/image";

const LandingPage = () => {
  return (
    <section className="sm:px-10 md:px-20 py-8 mt-20">
      <div className="container m-auto z-0 ">
        <Image
          src="/image/image 1.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="image"
          className=""
        />
        <div className="lg:flex justify-between items-center z-20 relative py-16 ">
          <div className="lg:w-6/12 lg:p-0 ">
            <p className="text-2xl text-mycolor-900 font-bold leading-tight mb-5 uppercase">
              Welcome To
            </p>
            <h1 className="text-5xl text-mycolor2-900 font-bold leading-tight mb-5 uppercase">
              {" "}
              Dorsids Integrated{" services "}
            </h1>
            <p className="text-xl text-mycolor4-900">
              {" "}
              your partner for excellence
            </p>

            <div className="py-5 flex">
              <a
                href="/"
                className="text-white rounded-md py-3 px-3 text-center text-normal font-semibold bg-primary-900 flex mr-3"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-8 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-black rounded-lg py-3 px-4 text-center text-lg font-semibold bg-transparent inline-block border-2 border-primary-900 hover:bg-primary-900 hover:text-white"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
