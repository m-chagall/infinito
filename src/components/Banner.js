import { FcSpeaker } from "react-icons/fc";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Banner({ showBanner, setShowBanner }) {
  let navigate = useNavigate();
  if (showBanner) {
    return (
      <div
        className={`${showBanner} bg-gray-900 max-w-screen mx-auto py-1 px-3 sm:px-4`}>
        <div className="relative flex items-center justify-center flex-wrap">
          <div className="flex items-center">
            {/* Speakerphone */}
            <span className="p-2">
              <FcSpeaker
                className="h-6 w-6 text-stone-100"
                aria-hidden="true"
              />
            </span>
            {/* Banner Text */}
            <p className="ml-3 font-medium text-white truncate ">
              <button
                className="hover-underline-animation-white"
                onClick={() => navigate("/")}>
                <span className="md:hidden font-medium">
                  Expand your knowledge with us.
                </span>
                <span className="hidden md:inline text-white font-medium">
                  Expand your knowledge with us.
                </span>
              </button>
            </p>
          </div>
          {/* Close Button */}
          <div className="absolute right-0 order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              onClick={() => setShowBanner(false)}
              className="-mr-1 flex p-2 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
              <span className="sr-only">Dismiss</span>
              <HiX className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  } else return null;
}
