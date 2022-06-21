import Image from "next/image";

const OurServices = () => {
  return (
    <div>
      <section className="mt-24 bg-graylight-200 sm:px-10 md:px-20 py-16">
        <div className="text-center py-8">
          <h4 className="text-2xl font-normeal text-primary-900">
            Our Services
          </h4>
        </div>

        <div className="  py-16">
          <div className="grid gap-12 lg:grid-cols-2 ">
            <div className="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto relative">
              <div className="col-span-12 md:col-span-auto md:col-start-1  md:row-start-1 md:row-end-1 relative ">
                <picture className="block w-full h-80 mt-20 relative left-8 -top-16 ">
                  <Image
                    src="/image/image 3.png"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="image 2"
                    className="absolute  w-full h-full z-20 "
                  />
                </picture>
                <div className="relative ml-10">
                  <span className="px-14 absolute -right-24  bottom-24 z-20  border-b-2 border-gray-900 rounded-md  "></span>
                </div>
              </div>
              <div className="col-span-12 md:col-span-auto md:col-start-0 md:col-end-3 md:row-start-1 mr-2 md:mt-0 relative -top-44 ">
                <div className="w-full bg-orange-600 opacity-50 h-20"></div>
              </div>
            </div>
            <div className="px-20 py-20 ">
              <div className="space-y-2">
                <div className="relative ml-10">
                  <span className="px-4 absolute -left-9 top-4  border-b-2 border-gray-400 rounded-t opacity-50 "></span>
                  <p className="">01</p>
                </div>
                <h4 className="text-2xl font-normeal text-primary-900">
                  Oil and Gas Solution
                </h4>
                <div className="text-gray-600 text-sm flex  flex-col">
                  <label className="items-center mt-3 ">
                    <input type="radio" className="h-2 w-2" />
                    <span className="ml-2 ">
                      Oil and Gas Fcility Maintenance
                    </span>
                  </label>

                  <label className=" items-center mt-3">
                    <input type="radio" className="h-2 w-2" />
                    <span className="ml-2 ">
                      Technical and operations support
                    </span>
                  </label>

                  <label className=" items-center mt-3">
                    <input type="radio" className="h-2 w-2" />
                    <span className="ml-2 ">
                      project control, management and pmo support
                    </span>
                  </label>

                  <label className=" items-center mt-3">
                    <input type="radio" className="h-2 w-2" />
                    <span className="ml-2 ">
                      Technical human capital development
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 ">
          <div className="px-20 py-20 ">
            <div className="space-y-2">
              <div className="relative ml-10">
                <span className="px-4 absolute -left-9 top-4  border-b-2 border-gray-400 rounded-t opacity-50 "></span>
                <p className="">01</p>
              </div>
              <h4 className="text-2xl font-normeal text-primary-900">
                Oil and Gas Solution
              </h4>
              <div className="text-gray-600 text-sm flex  flex-col">
                <label className="items-center mt-3 ">
                  <input type="radio" className="h-2 w-2" />
                  <span className="ml-2 ">Oil and Gas Fcility Maintenance</span>
                </label>

                <label className=" items-center mt-3">
                  <input type="radio" className="h-2 w-2" />
                  <span className="ml-2 ">
                    Technical and operations support
                  </span>
                </label>

                <label className=" items-center mt-3">
                  <input type="radio" className="h-2 w-2" />
                  <span className="ml-2 ">
                    project control, management and pmo support
                  </span>
                </label>

                <label className=" items-center mt-3">
                  <input type="radio" className="h-2 w-2" />
                  <span className="ml-2 ">
                    Technical human capital development
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto relative">
            <div className="col-span-12 md:col-span-auto md:col-start-1  md:row-start-1 md:row-end-1 relative ">
              <picture className="block w-full h-80 mt-20 relative left-8 -top-16 ">
                <Image
                  src="/image/image 4.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="image 4"
                  className="absolute  w-full h-full z-20 "
                />
              </picture>
              <div className="relative ml-10">
                <span className="px-14 absolute -right-24  bottom-24 z-20  border-b-2 border-gray-900 rounded-md  "></span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-auto md:col-start-0 md:col-end-3 md:row-start-1 mr-2 md:mt-0 relative -top-44 ">
              <div className="w-full bg-orange-600 opacity-50 h-20"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
