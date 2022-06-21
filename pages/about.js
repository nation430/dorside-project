import Meta from "../components/Meta";
import Image from "next/image";

const about = () => {
  return (
    <>
      <div>
        <Meta title="About page" />
        <div className={`bg-whitelight-900 sm:px-10 md:px-20 py-8 mt-20 `}>
          <div className="flex justify-between">
            <div className="flex">
              <div>
                <h3 className="text-4xl font-semibold text-mycolor-900 mb-2">
                  About Us
                </h3>
                <p className=" text-mycolor4-900">Neftify Explore page</p>
              </div>
            </div>
            <div className="flex">
              <a className="mr-2" href="#">
                Home{" "}
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <a className="mr-8" href="#">
                Payments
              </a>
            </div>
          </div>
          <div className="flex flex-wrap my-10 ">
            <div className="md:w-1/2 lg:w-1/4 py-4 mt-4">
              <fieldset className="mb-5">
                <h3 className="text-2xl font-semibold border-b-2 text-mycolor-900 mb-8">
                  Status
                </h3>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-1"
                    aria-describedby="checkbox-1"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 focus:ring-3 mt-2 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-1"
                    className="text-xl ml-3 text-mycolor4-900"
                  >
                    Buy Now
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-2"
                    aria-describedby="checkbox-2"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 mt-2 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-2"
                    className="text-xl ml-3 text-mycolor4-900"
                  >
                    On Auction
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-3"
                    aria-describedby="checkbox-3"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 mt-2 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-3"
                    className="text-xl ml-3 text-mycolor4-900"
                  >
                    New
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-3"
                    aria-describedby="checkbox-3"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 mt-2 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-3"
                    className="text-xl ml-3 text-mycolor4-900"
                  >
                    Has Offers
                  </label>
                </div>
              </fieldset>

              <fieldset className="mb-5">
                <h3 className="text-2xl font-semibold border-b-2 text-mycolor-900 mb-8">
                  Explore
                </h3>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-1"
                    aria-describedby="checkbox-1"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 focus:ring-3 mt-2 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-1"
                    className="text-xl ml-3  text-mycolor4-900"
                  >
                    Gambling Apes
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-2"
                    aria-describedby="checkbox-2"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 mt-2 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-2"
                    className="text-xl ml-3  text-mycolor4-900"
                  >
                    The Sandbox
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-3"
                    aria-describedby="checkbox-3"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 mt-2 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-3"
                    className="text-xl ml-3 text-mycolor4-900"
                  >
                    The Soundbox
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-3"
                    aria-describedby="checkbox-3"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 mt-2 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-3"
                    className="text-xl ml-3 text-mycolor4-900"
                  >
                    CryptoPunks
                  </label>
                </div>
              </fieldset>

              <fieldset className="mb-5">
                <h3 className="text-2xl font-semibold border-b-2 text-mycolor-900 mb-8">
                  Chains
                </h3>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-1"
                    aria-describedby="checkbox-1"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 focus:ring-3 mt-2 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-1"
                    className="text-xl ml-3  text-mycolor4-900"
                  >
                    Ethereum
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-2"
                    aria-describedby="checkbox-2"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 mt-2 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-2"
                    className="text-xl ml-3  text-mycolor4-900"
                  >
                    Polygon
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-3"
                    aria-describedby="checkbox-3"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 mt-2 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-3"
                    className="text-xl ml-3 text-mycolor4-900"
                  >
                    Klayin
                  </label>
                </div>
              </fieldset>

              <fieldset className="mb-5">
                <h3 className="text-2xl font-semibold border-b-2 text-mycolor-900 mb-8">
                  Categories
                </h3>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-1"
                    aria-describedby="checkbox-1"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 focus:ring-3 mt-2 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-1"
                    className="text-xl ml-3  text-mycolor4-900"
                  >
                    Art
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-2"
                    aria-describedby="checkbox-2"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 mt-2 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-2"
                    className="text-xl ml-3  text-mycolor4-900"
                  >
                    Music
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-3"
                    aria-describedby="checkbox-3"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 mt-2 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-3"
                    className="text-xl ml-3 text-mycolor4-900"
                  >
                    Domain Names
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-3"
                    aria-describedby="checkbox-3"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 mt-2 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-3"
                    className="text-xl ml-3 text-mycolor4-900"
                  >
                    Virtual Worlds
                  </label>
                </div>
              </fieldset>

              <fieldset className="mb-5">
                <h3 className="text-2xl font-semibold border-b-2 text-mycolor-900 mb-8">
                  On Sale In
                </h3>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-1"
                    aria-describedby="checkbox-1"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 focus:ring-3 mt-2 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-1"
                    className="text-xl ml-3  text-mycolor4-900"
                  >
                    ETH
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-2"
                    aria-describedby="checkbox-2"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 mt-2 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-2"
                    className="text-xl ml-3  text-mycolor4-900"
                  >
                    BTC
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-3"
                    aria-describedby="checkbox-3"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 mt-2 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-3"
                    className="text-xl ml-3 text-mycolor4-900"
                  >
                    DG
                  </label>
                </div>

                <div className="flex items-start mb-4">
                  <input
                    id="checkbox-3"
                    aria-describedby="checkbox-3"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 mt-2 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                  <label
                    for="checkbox-3"
                    className="text-xl ml-3 text-mycolor4-900"
                  >
                    ALXO
                  </label>
                </div>
              </fieldset>
            </div>

            <div className="md:w-1/2 lg:w-1/4 py-4 px-4 ">
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 border-2">
                <img
                  className="px-4  h-80 pt-8 rounded-lg"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 text-mycolor-900 ">
                  <div className="font-bold text-xl mb-2">Liquid Wave</div>
                  <p className="text-grey-darker text-xl flex justify-between font-normal pt-6">
                    Auction
                    <span>
                      {" "}
                      Bid:{" "}
                      <span className="text-mycolor2-900 font-bold">
                        0.55 ETH
                      </span>{" "}
                    </span>
                  </p>

                  <p className="text-grey-darker text-xl font-semibold flex justify-between pt-4">
                    3h 1m 50s
                    <span>0.55 ETH</span>
                  </p>

                  <div className="py-5 w-full text-center">
                    <a
                      href="#"
                      className="w-full text-white rounded-lg py-3 px-10 text-lg font-semibold bg-mycolor2-900 inline-block mr-3"
                    >
                      Place a Bid
                    </a>
                  </div>
                </div>
              </div>
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 border-2 mt-10">
                <img
                  className="px-4  h-80 pt-8 rounded-lg"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 text-mycolor-900 ">
                  <div className="font-bold text-xl mb-2">Liquid Wave</div>
                  <p className="text-grey-darker text-xl flex justify-between font-normal pt-6">
                    Auction
                    <span>
                      {" "}
                      Bid:{" "}
                      <span className="text-mycolor2-900 font-bold">
                        0.55 ETH
                      </span>{" "}
                    </span>
                  </p>

                  <p className="text-grey-darker text-xl font-semibold flex justify-between pt-4">
                    3h 1m 50s
                    <span>0.55 ETH</span>
                  </p>

                  <div className="py-5 w-full text-center">
                    <a
                      href="#"
                      className="w-full text-white rounded-lg py-3 px-10 text-lg font-semibold bg-mycolor2-900 inline-block mr-3"
                    >
                      Place a Bid
                    </a>
                  </div>
                </div>
              </div>
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 border-2 mt-10">
                <img
                  className="px-4  h-80 pt-8 rounded-lg"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 text-mycolor-900 ">
                  <div className="font-bold text-xl mb-2">Liquid Wave</div>
                  <p className="text-grey-darker text-xl flex justify-between font-normal pt-6">
                    Auction
                    <span>
                      {" "}
                      Bid:{" "}
                      <span className="text-mycolor2-900 font-bold">
                        0.55 ETH
                      </span>{" "}
                    </span>
                  </p>

                  <p className="text-grey-darker text-xl font-semibold flex justify-between pt-4">
                    3h 1m 50s
                    <span>0.55 ETH</span>
                  </p>

                  <div className="py-5 w-full text-center">
                    <a
                      href="#"
                      className="w-full text-white rounded-lg py-3 px-10 text-lg font-semibold bg-mycolor2-900 inline-block mr-3"
                    >
                      Place a Bid
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 lg:w-1/4 py-4 px-4 ">
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 border-2">
                <img
                  className="px-4  h-80 pt-8 rounded-lg"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 text-mycolor-900 ">
                  <div className="font-bold text-xl mb-2">Liquid Wave</div>
                  <p className="text-grey-darker text-xl flex justify-between font-normal pt-6">
                    Auction
                    <span>
                      {" "}
                      Bid:{" "}
                      <span className="text-mycolor2-900 font-bold">
                        0.55 ETH
                      </span>{" "}
                    </span>
                  </p>

                  <p className="text-grey-darker text-xl font-semibold flex justify-between pt-4">
                    3h 1m 50s
                    <span>0.55 ETH</span>
                  </p>

                  <div className="py-5 w-full text-center">
                    <a
                      href="#"
                      className="w-full text-white rounded-lg py-3 px-10 text-lg font-semibold bg-mycolor2-900 inline-block mr-3"
                    >
                      Place a Bid
                    </a>
                  </div>
                </div>
              </div>
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 border-2 mt-10">
                <img
                  className="px-4  h-80 pt-8 rounded-lg"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 text-mycolor-900 ">
                  <div className="font-bold text-xl mb-2">Liquid Wave</div>
                  <p className="text-grey-darker text-xl flex justify-between font-normal pt-6">
                    Auction
                    <span>
                      {" "}
                      Bid:{" "}
                      <span className="text-mycolor2-900 font-bold">
                        0.55 ETH
                      </span>{" "}
                    </span>
                  </p>

                  <p className="text-grey-darker text-xl font-semibold flex justify-between pt-4">
                    3h 1m 50s
                    <span>0.55 ETH</span>
                  </p>

                  <div className="py-5 w-full text-center">
                    <a
                      href="#"
                      className="w-full text-white rounded-lg py-3 px-10 text-lg font-semibold bg-mycolor2-900 inline-block mr-3"
                    >
                      Place a Bid
                    </a>
                  </div>
                </div>
              </div>
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 border-2 mt-10">
                <img
                  className="px-4  h-80 pt-8 rounded-lg"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 text-mycolor-900 ">
                  <div className="font-bold text-xl mb-2">Liquid Wave</div>
                  <p className="text-grey-darker text-xl flex justify-between font-normal pt-6">
                    Auction
                    <span>
                      {" "}
                      Bid:{" "}
                      <span className="text-mycolor2-900 font-bold">
                        0.55 ETH
                      </span>{" "}
                    </span>
                  </p>

                  <p className="text-grey-darker text-xl font-semibold flex justify-between pt-4">
                    3h 1m 50s
                    <span>0.55 ETH</span>
                  </p>

                  <div className="py-5 w-full text-center">
                    <a
                      href="#"
                      className="w-full text-white rounded-lg py-3 px-10 text-lg font-semibold bg-mycolor2-900 inline-block mr-3"
                    >
                      Place a Bid
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 lg:w-1/4 py-4 px-4 ">
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 border-2">
                <img
                  className="px-4  h-80 pt-8 rounded-lg"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 text-mycolor-900 ">
                  <div className="font-bold text-xl mb-2">Liquid Wave</div>
                  <p className="text-grey-darker text-xl flex justify-between font-normal pt-6">
                    Auction
                    <span>
                      {" "}
                      Bid:{" "}
                      <span className="text-mycolor2-900 font-bold">
                        0.55 ETH
                      </span>{" "}
                    </span>
                  </p>

                  <p className="text-grey-darker text-xl font-semibold flex justify-between pt-4">
                    3h 1m 50s
                    <span>0.55 ETH</span>
                  </p>

                  <div className="py-5 w-full text-center">
                    <a
                      href="#"
                      className="w-full text-white rounded-lg py-3 px-10 text-lg font-semibold bg-mycolor2-900 inline-block mr-3"
                    >
                      Place a Bid
                    </a>
                  </div>
                </div>
              </div>

              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 border-2 mt-10">
                <img
                  className="px-4  h-80 pt-8 rounded-lg"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 text-mycolor-900 ">
                  <div className="font-bold text-xl mb-2">Liquid Wave</div>
                  <p className="text-grey-darker text-xl flex justify-between font-normal pt-6">
                    Auction
                    <span>
                      {" "}
                      Bid:{" "}
                      <span className="text-mycolor2-900 font-bold">
                        0.55 ETH
                      </span>{" "}
                    </span>
                  </p>

                  <p className="text-grey-darker text-xl font-semibold flex justify-between pt-4">
                    3h 1m 50s
                    <span>0.55 ETH</span>
                  </p>

                  <div className="py-5 w-full text-center">
                    <a
                      href="#"
                      className="w-full text-white rounded-lg py-3 px-10 text-lg font-semibold bg-mycolor2-900 inline-block mr-3"
                    >
                      Place a Bid
                    </a>
                  </div>
                </div>
              </div>

              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 border-2 mt-10">
                <img
                  className="px-4  h-80 pt-8 rounded-lg"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 text-mycolor-900 ">
                  <div className="font-bold text-xl mb-2">Liquid Wave</div>
                  <p className="text-grey-darker text-xl flex justify-between font-normal pt-6">
                    Auction
                    <span>
                      {" "}
                      Bid:{" "}
                      <span className="text-mycolor2-900 font-bold">
                        0.55 ETH
                      </span>{" "}
                    </span>
                  </p>

                  <p className="text-grey-darker text-xl font-semibold flex justify-between pt-4">
                    3h 1m 50s
                    <span>0.55 ETH</span>
                  </p>

                  <div className="py-5 w-full text-center">
                    <a
                      href="#"
                      className="w-full text-white rounded-lg py-3 px-10 text-lg font-semibold bg-mycolor2-900 inline-block mr-3"
                    >
                      Place a Bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
