import Image from "next/image";

const AboutUs = () => {
  return (
    <div className=" mt-9 bg-white">
      <section>
        <div className="w-full">
          <div className="grid gap-12 lg:grid-cols-2 ">
            <div className=" sm:px-10 md:px-20 py-16">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-2xl font-normeal text-primary-900">
                    About Us
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Dorsids is a diversified project consultancy business that
                    offers a bouquet of services to clients operating in the oil
                    and gas, technology & digital, and renewable energy sectors.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Our mandate is to provide solutions that disrupt the daily
                    activities of individuls or organizations by enhancing
                    efficiency and effectiveness through deployment of cutting
                    edge technology that offer value in time, cost and quality.
                  </p>
                </div>
                <a
                  href="/about"
                  className="block w-max text-white py-3 px-4 rounded-md bg-primary-900"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className=" group sm:flex  ">
              <div className="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto z-20 relative">
                <div className="col-span-12 md:col-span-auto md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-1 ">
                  <a>
                    <picture
                      className="relative block w-full h-0 pb  overflow-hidden shadow-lg"
                      style={{ paddingTop: 65 + "%" }}
                    >
                      <Image
                        src="/image/image 2.jpg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt="image 2"
                        className="absolute inset-0 w-full h-full object-cover shadow-xl"
                      />
                    </picture>
                  </a>
                </div>
                <div className="col-span-12 md:col-span-auto md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-1  md:mt-0  ">
                  <div
                    className="w-full bg-primary-900"
                    style={{ height: 25 + "em" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
