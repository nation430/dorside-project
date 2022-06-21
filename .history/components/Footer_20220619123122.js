import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";

library.add(
  faInstagram,
  faLinkedin,
  faFacebookF,
  faTwitter,
  faAngleRight,
  faLocationDot,
  faPhone
);

const Footer = () => {
  return (
    <footer className="bg-secondary-900">
      <div className="container px-10 py-20 mx-auto ">
        <div className="flex md:items-center lg:justify-between lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col sm:flex mb-4">
          <div className="sm:w-1/4 h-auto lg:w-2/6 md:w-1/2 w-full px-2">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left space-y-5">
              <p className=" text-2xl text-white mb-3">Contact Us</p>
              <div className="text-sm leading-2 flex text-white ">
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="ml-3 ">
                  {" "}
                  Port Harcourt, Rivers State Km 16 Port Harcourt / Aba
                  Expressway, Rumuokwurusi Port Harcourt Rivers State P. O. Box
                  668
                </span>
              </div>
              <div className="text-sm leading-2 text-white ">
                <FontAwesomeIcon icon={faLocationDot} />
                <p className="ml-6 -mt-4">
                  {" "}
                  Lekki, Lagos
                  <span className="flex flex-row ">
                    22a omorinre Johnson, Lekki Phase 1 Lagos
                  </span>
                </p>
              </div>
              <p className="text-sm leading-2 text-white ">
                <FontAwesomeIcon icon={faPhone} />
                <span className="ml-3"> +234 803 223 7981</span>
              </p>
            </div>
          </div>
          <div className="sm:w-1/4 h-auto sm:mt-0 mt-8 lg:w-2/6 md:w-1/2 w-full ml-4 mb-4">
            <h2 className=" text-white tracking-widest text-2xl mb-3">
              Quick Links
            </h2>
            <ul class="list-reset leading-normal space-y-5">
              <li>
                <a
                  className="text-white hover:text-primary-900 text-sm"
                  href=""
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ml-1">Home</span>
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-primary-900 text-sm"
                  href="/about"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ml-1">About Us</span>
                </a>
              </li>
              <li>
                <a
                  className="text-white  hover:text-primary-900 text-sm"
                  href="#"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ml-1">Services</span>
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-primary-900 text-sm"
                  href="#"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ml-1">Project</span>
                </a>
              </li>

              <li>
                <a
                  className="text-white hover:text-primary-900 text-sm"
                  href="#"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                  <span className="ml-1">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:w-1/2 sm:mt-0 lg:mt-16 h-auto lg:w-2/6 md:w-1/2 w-full ml-4">
            <div class="text-white mb-1">Subscribe to your Newsletter</div>
            <div class="flex flex-wrap lg:space-x-3 md: space-x-3 sm:space-y-3 lg:space-y-0 md:space-y-0 mb-4">
              <input
                type="text"
                class="p-2 border border-white rounded-md bg-transparent text-white text-sm h-auto"
                placeholder="Your Email "
              />
              <button class="bg-white text-gray-900 sm:mt-2 sm:ml-0 lg:mt-0 rounded-md h-auto text-xs p-3 ml-3 sm:space-y-3 lg:space-y-0 md:space-y-0">
                Subscribe
              </button>
            </div>

            <div className="mt-16">
              <div class="text-white mb-1">Follow Us</div>
              <div className="flex text-white text-sm space-x-4">
                <a
                  className="text-white  hover:text-primary-900 text-sm"
                  href="#"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  className="text-white  hover:text-primary-900 text-sm"
                  href="#"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  className="text-white  hover:text-primary-900 text-sm"
                  href="#"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a
                  className="text-white  hover:text-primary-900 text-sm"
                  href="#"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
