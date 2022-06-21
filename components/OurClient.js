import Image from "next/image";

const OurClient = () => {
  return (
    <div>
      <section className="mt-24 bg-graylight-200 sm:px-10 md:px-20 r ">
        <div className="text-center py-8">
          <h4 className="text-2xl font-normeal text-primary-900">
            Our Clients
          </h4>
        </div>
        <div className="flex-1 pt-3 md:p-2 lg:mb-0 lg:min-h-0 lg:min-w-0">
          <div className="flex flex-col lg:flex-row h-full w-full justify-between">
            <div className=" lg:pb-0 w-full lg:max-w-sm flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
              <div className=" w-full h-24 min-h-0 min-w-0 mb-4">
                <Image
                  src="/image/client 1.png"
                  objectFit="cover"
                  objectPosition="center"
                  width={350}
                  height={100}
                  alt="client 1"
                  className="client-img"
                />
              </div>
            </div>

            <div className="  lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
              <div className=" w-full h-24 min-h-34 min-w-56 mb-4">
                <Image
                  src="/image/client 2.png"
                  objectFit="cover"
                  objectPosition="center"
                  width={340}
                  height={100}
                  alt="client 2"
                  className="client-img2"
                />
              </div>
            </div>

            <div class=" lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
              <div className=" w-full h-24 min-h-34 min-w-56 mb-4">
                <Image
                  src="/image/client 3.png"
                  objectFit="cover"
                  objectPosition="center"
                  width={340}
                  height={100}
                  alt="client 3"
                  className="client-img"
                />
              </div>
            </div>

            <div class="  lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
              <div className=" w-full h-24 min-h-0 min-w-0 mb-4">
                <Image
                  src="/image/client 4.png"
                  objectFit="cover"
                  objectPosition="center"
                  width={350}
                  height={100}
                  alt="client 4"
                  className="client-img4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 pt-3  md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
          <div className="flex flex-col lg:flex-row h-full w-full justify-between pb-20">
            <div className=" lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
              <div className=" w-full h-24 min-h-0 min-w-0 mb-4">
                <Image
                  src="/image/client 5.png"
                  objectFit="cover"
                  objectPosition="center"
                  width={350}
                  height={100}
                  alt="client 5"
                  className="client-img"
                />
              </div>
            </div>

            <div className="  lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
              <div className=" w-full h-24 min-h-34 min-w-56 mb-4">
                <Image
                  src="/image/client 6.png"
                  objectFit="cover"
                  objectPosition="center"
                  width={340}
                  height={100}
                  alt="client 6"
                  className="client-img2"
                />
              </div>
            </div>

            <div class=" lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
              <div className=" w-full h-24 min-h-34 min-w-56 mb-4">
                <Image
                  src="/image/client 7.png"
                  objectFit="cover"
                  objectPosition="center"
                  width={340}
                  height={100}
                  alt="client 7"
                  className="client-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClient;
