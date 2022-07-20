import { useState } from "react";
import {
  HiX,
  HiOutlineAcademicCap,
  HiShoppingCart,
  HiOutlineCreditCard,
  HiOutlineGlobe,
  HiOutlinePencilAlt,
  HiOutlineNewspaper,
  HiOutlineCog,
  HiUser,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";
import { VscBell } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

import Banner from ".././components/Banner.js";

export default function Navbar(props) {
  /* Banner */
  /* dropdown menu toggle */
  let [showDropdownAbout, setShowDropdownAbout] = useState(false);
  let [showDropdownCourses, setShowDropdownCourses] = useState(false);
  let [showDropdownCommunity, setShowDropdownCommunity] = useState(false);
  /* hamburger menu toggle */
  let [showHamburger, setShowHamburger] = useState(false);
  let setHidden = props.setHidden;
  let user = "User";

  let navigate = useNavigate();

  return (
    <>
      <nav className="fixed z-100 left-0 right-0 top-0 bg-white dark:bg-gray-800 mb-28">
        <Banner
          showBanner={props.showBanner}
          setShowBanner={props.setShowBanner}
        />
        <div className="relative z-90 flex px-2 py-4 md:px-6 justify-between md:space-x-2">
          {/* Logo area + menu tab (left) */}
          <div className="flex items-center order-1">
            <button
              type="button"
              onClick={() => {
                navigate("/");
              }}
              className="flex items-center">
              <span className="nav-logo uppercase mx-2 self-center text-3xl font-black whitespace-nowrap text-gray-900 dark:text-white">
                infinito
              </span>
            </button>
            <div className="flex items-center justify-items-start order-2">
              {/* Menu tab (left) */}
              <ul className="hidden lg:flex md:space-x-4 md:font-medium">
                {/* About */}
                <li
                  className="relative hover:bg-gray-100 dark:hover:bg-emerald-100"
                  onMouseOver={() => {
                    setShowDropdownAbout(true);
                  }}
                  onMouseOut={() => {
                    setShowDropdownAbout(false);
                  }}>
                  <button
                    id="dropdownAbout"
                    type="button"
                    className="py-2 px-3 text-sm text-gray-700 bg-transparent hover:shadow dark:text-white">
                    About
                  </button>
                  {/* Dropdown menu */}
                  {showDropdownAbout ? (
                    <DropdownAbout
                      navigate={navigate}
                      setShowDropdownAbout={setShowDropdownAbout}
                    />
                  ) : null}
                </li>
                {/* Courses */}
                <li
                  className="relative hover:bg-gray-100 dark:hover:bg-emerald-100"
                  onMouseOver={() => {
                    setShowDropdownCourses(true);
                  }}
                  onMouseOut={() => {
                    setShowDropdownCourses(false);
                  }}>
                  <button
                    id="dropdownCourses"
                    type="button"
                    className="py-2 px-3 text-sm text-gray-700 bg-transparent hover:shadow dark:text-white">
                    Courses
                  </button>
                  {/* Dropdown menu */}
                  {showDropdownCourses ? (
                    <DropdownCourses
                      navigate={navigate}
                      setShowDropdownCourses={setShowDropdownCourses}
                    />
                  ) : null}
                </li>
                {/* Community */}
                <li
                  className="relative hover:bg-gray-100 dark:hover:bg-emerald-100"
                  onMouseOver={() => {
                    setShowDropdownCommunity(true);
                  }}
                  onMouseOut={() => {
                    setShowDropdownCommunity(false);
                  }}>
                  <button
                    id="dropdownCommunity"
                    type="button"
                    className="py-2 px-3 text-sm text-gray-700 bg-transparent hover:shadow dark:text-white">
                    Community
                  </button>
                  {/* Dropdown menu */}
                  {showDropdownCommunity ? (
                    <DropdownCommunity
                      navigate={navigate}
                      setShowDropdownCommunity={setShowDropdownCommunity}
                    />
                  ) : null}
                </li>
              </ul>
            </div>
          </div>
          {/* Menu tab (right) + Buttons */}
          <div className="flex items-center order-3">
            {/* Menu tab (right) */}
            <ul className="hidden lg:flex text-sm md:space-x-2 md:text-sm md:font-medium">
              {/* <li className=""><button type="button" onClick={()=>{navigate("/translation")}} className="py-2 px-3 text-gray-700 bg-transparent hover:shadow hover:text-blue-800 hover:animate-pulse dark:text-white">Translation</button></li> */}
              {/* <li className=""><button type="button" onClick={()=>{navigate("/notice")} } className="py-2 px-3 text-gray-700 bg-transparent hover:shadow hover:text-blue-800 hover:animate-pulse dark:text-white">Notice</button></li> */}
              <li className="">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="py-2 px-3 hover:shadow text-gray-700 bg-transparent hover:text-blue-800 hover:animate-pulse dark:text-white">
                  <span className="">Log In</span>
                </button>
              </li>
              <li className="">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="py-2 px-3 hover:shadow text-gray-700 bg-transparent hover:text-blue-800 hover:animate-pulse dark:text-white">
                  <span className="">Register</span>
                </button>
              </li>
            </ul>
            {/* Buttons */}
            <ul className="flex md:space-x-2">
              {/* <li className=""><button type="button" onClick={()=>{navigate("/login")}} title="Sign in"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-2 mr-2 transition ease-in-out delay-none hover:-translate-y-1 hover:scale-110 duration-75 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="navy" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg></button></li>
                            <li className=""><button type="button" onClick={()=>{navigate("/myclassroom")}} title="My Classroom"><FaBookOpen className="h-8 w-8 m-1 transition ease-in-out delay-none hover:-translate-y-1 hover:scale-110 duration-75 lg:hidden" color="navy" /></button></li> */}
              <li className="relative">
                <button
                  type="button"
                  className="ml-3 p-2 mt-1 space-y-1 bg-white border-2 border-none rounded-lg order-last transition ease-in-out delay-none hover:-translate-y-1 hover:scale-110 duration-75"
                  onClick={() => {
                    setShowHamburger(true);
                    setHidden(true);
                  }}>
                  <span className="block w-5 h-0.5 bg-blue-900 hover:animate-pulse"></span>
                  <span className="block w-5 h-0.5 bg-blue-900 hover:animate-pulse"></span>
                  <span className="block w-5 h-0.5 bg-blue-900 hover:animate-pulse"></span>
                </button>
                <Hamburger
                  user={user}
                  navigate={navigate}
                  showHamburger={showHamburger}
                  setShowHamburger={setShowHamburger}
                  setHidden={props.setHidden}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
function DropdownCourses({ navigate, setShowDropdownCourses }) {
  return (
    <div
      id="dropdownCourses"
      className={`absolute flex w-192 -left-20 -bottom-30 rounded-xl z-10 bg-white text-start divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
      {/* #1 */}
      <div className="w-1/3">
        <h2 className="p-4 pb-2 text-indigo-600 font-extrabold">
          BEGINNER/ELEMENTARY
        </h2>
        <ul
          className="px-4 text-sm text-gray-700 dark:text-gray-400 "
          aria-labelledby="dropdownLargeButton">
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Le français dans la vie</h4>
              <p className="text-gray-500 font-normal text-xs">프랑스어 입문</p>
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Compréhension écrite</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 독해 (초급)
              </p>
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Compréhension orale</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 청해 (초급)
              </p>
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Production écrite</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 작문 (초급)
              </p>
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Production orale</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 회화 (초급)
              </p>
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Grammaire & Vocabulaire</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 문법/어휘 (초급)
              </p>
            </button>
          </li>
        </ul>
      </div>

      {/* #2 */}
      <div className="w-1/3">
        <h2 className="p-4 pb-2 text-indigo-600 font-extrabold">
          INTERMEDIATE
        </h2>
        <ul
          className="px-4 text-sm text-gray-700 dark:text-gray-400 "
          aria-labelledby="dropdownLargeButton">
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Compréhension écrite</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 독해 (중급)
              </p>
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Compréhension orale</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 청해 (중급)
              </p>
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Production écrite</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 작문 (중급)
              </p>
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Production orale</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 회화 (중급)
              </p>
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Grammaire & Vocabulaire</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 문법/어휘 (중급)
              </p>
            </button>
          </li>
        </ul>
      </div>
      <div className="w-1/3">
        <h2 className="p-4 pb-2 text-indigo-600 font-extrabold">ADVANCED</h2>
        <ul
          className="px-4 text-sm text-gray-700 dark:text-gray-400 "
          aria-labelledby="dropdownLargeButton">
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Compréhension écrite</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 독해 (고급)
              </p>
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Compréhension orale</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 청해 (고급)
              </p>
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Production écrite</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 작문 (고급)
              </p>
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Production orale</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 회화 (고급)
              </p>
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCourses(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              <h4 className="font-bold">Grammaire & Vocabulaire</h4>
              <p className="text-gray-500 font-normal text-xs">
                프랑스어 문법/어휘 (고급)
              </p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
function DropdownAbout({ navigate, setShowDropdownAbout }) {
  return (
    <div
      id="dropdownAbout"
      className={`absolute flex w-128 -left-20 -bottom-30 rounded-xl z-10 bg-white text-start divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
      {/* #1 */}
      <div className="w-1/2">
        <h2 className="p-4 pb-2 text-indigo-600 font-extrabold">ABOUT US</h2>
        <ul
          className="px-4 py-1 text-sm text-gray-700 dark:text-gray-400 "
          aria-labelledby="dropdownLargeButton">
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/about");
                setShowDropdownAbout(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white"
              aria-current="page">
              <strong>INFINITO:</strong> Who are we?
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/team");
                setShowDropdownAbout(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              Our Team
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/courses");
                setShowDropdownAbout(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              Our Courses
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownAbout(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              Contact Us
            </button>
          </li>
        </ul>
      </div>

      {/* #2 */}
      <div className="w-1/2">
        <h2 className="p-4 pb-2 text-indigo-600 font-extrabold">OUR TEAM</h2>
        <ul
          className="px-4 py-1 text-sm text-gray-700 dark:text-gray-400 "
          aria-labelledby="dropdownLargeButton">
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/team/instructors");
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white"
              aria-current="page">
              Instructors
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/team/translators");
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              Translators
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/team/career-counselors");
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              Career Counselors
            </button>
          </li>
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/team/community-managers");
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white">
              Community Managers
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

function DropdownCommunity({ navigate, setShowDropdownCommunity }) {
  return (
    <div
      id="dropdownCommunity"
      className={`absolute flex flex-col w-64 -left-20 -bottom-30 rounded-xl z-10 bg-white text-start divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
      {/* #1 */}
      <div className="">
        <h2 className="p-4 pb-2 text-indigo-600 font-extrabold">SOUTH KOREA</h2>
        <ul
          className="px-4 py-1 text-sm text-gray-700 dark:text-gray-400 "
          aria-labelledby="dropdownLargeButton">
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCommunity(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white"
              aria-current="page">
              SEOUL
            </button>
          </li>
        </ul>
      </div>
      {/* #2 */}
      <div className="">
        <h2 className="p-4 pb-2 text-indigo-600 font-extrabold">FRANCE</h2>
        <ul
          className="px-4 py-1 text-sm text-gray-700 dark:text-gray-400 "
          aria-labelledby="dropdownLargeButton">
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCommunity(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white"
              aria-current="page">
              PARIS
            </button>
          </li>
        </ul>
      </div>
      {/* #3 */}
      <div className="">
        <h2 className="p-4 pb-2 text-indigo-600 font-extrabold">ITALIA</h2>
        <ul
          className="px-4 py-1 text-sm text-gray-700 dark:text-gray-400 "
          aria-labelledby="dropdownLargeButton">
          <li className="">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowDropdownCommunity(false);
              }}
              className="py-2 text-start text-black bg-transparent hover-underline-animation hover:text-indigo-900 dark:text-white"
              aria-current="page">
              MILANO
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Hamburger({
  navigate,
  user,
  showHamburger,
  setShowHamburger,
  setHidden,
}) {
  if (showHamburger) {
    return (
      <div
        className={`fixed z-10 inset-0 mt-0 p-4 bg-white shadow-xl lg:left-3/5 lg:w-2/5 lg:border lg:border-gray-400 lg:rounded-md dark:bg-gray-800`}>
        {/* Top Wrapper */}
        <div className="p-2 tracking-widest relative flex justify-between py-2">
          {/* Logo */}
          <div className="">
            <span className="nav-logo uppercase mx-2 self-center text-3xl font-black whitespace-nowrap text-gray-900 dark:text-white">
              infinito
            </span>
          </div>
          {/* Home shortcut, Exit hamburger menu */}
          <div className="absolute right-0">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowHamburger(false);
              }}
              className="hover:animate-pulse hover:bg-gray-200 rounded-full">
              <HiUser className="h-5 w-5 m-2" />
            </button>
            <button
              type="button"
              onClick={() => {
                navigate("/cart");
                setShowHamburger(false);
              }}
              className="hover:animate-pulse hover:bg-gray-200 rounded-full">
              <HiShoppingCart className="h-5 w-5 m-2" />
            </button>
            <button
              type="button"
              className="hover:animate-pulse hover:bg-gray-200 rounded-full"
              onClick={() => {
                setShowHamburger(false);
                setHidden(true);
              }}>
              <HiX className="h-5 w-5 m-2" />
            </button>
          </div>
        </div>

        {/* Welcome message, User Avatar */}
        <div className="my-4 flex items-center justify-start px-1 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300">
          {/* User Avatar */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => {
                navigate("/");
                setShowHamburger(false);
              }}>
              <img
                className="flex-shrink-0 object-cover mx-1 rounded-full w-10 h-10"
                src="/img/avatar_01.png"
                alt={`${user} avatar`}
              />
            </button>
          </div>
          {/* Username + Welcome message */}
          <div className="w-full mx-1 flex justify-between">
            <div className="text-start">
              {/* Username */}
              <h4 className="text-base font-bold text-gray-700 dark:text-gray-400">
                Orso Coreano
              </h4>
              {/* Welcome Message */}
              <h6 className="text-xs font-bold text-gray-400 dark:text-gray-200">
                @m-chagall
              </h6>
            </div>
            {/* Subscription plan */}
            <div className="text-end">
              <h4>Have a great day!</h4>
              <button
                type="button"
                onClick={() => {
                  navigate("/");
                }}
                className="text-sm font-bold text-blue-800">
                Upgrade to Pro🚀
              </button>
            </div>
          </div>
        </div>

        {/* My Classroom,  */}
        <hr className="my-4 border-gray-200 dark:border-gray-700" />
        <div className="flex flex-col space-y-2">
          <button
            type="button"
            onClick={() => {
              navigate("/myclassroom");
              setShowHamburger(false);
            }}
            className="flex items-center p-1 text-base font-bold text-gray-900 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <HiOutlineAcademicCap className="h-10 w-10 mx-1 p-1" />
            <span className="">My Courses</span>
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/");
              setShowHamburger(false);
            }}
            className="relative flex items-center p-1 text-base font-bold text-gray-900 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="relative">
              <VscBell className="h-10 w-10 mx-1 p-1" />
              <span className="w-1 h-1 bg-red-600 rounded-full absolute top-1 right-2"></span>
            </span>{" "}
            <span className="">Notifications</span>
            <span className="absolute right-2 w-6 h-6 bg-purple-800 rounded-full text-white">
              2
            </span>
          </button>
        </div>

        {/* Worldwide, Today's expression, Today's news */}
        <hr className="my-4 border-gray-200 dark:border-gray-700 " />
        <div className="flex flex-col space-y-2">
          <button
            type="button"
            onClick={() => {
              navigate("/");
              setShowHamburger(false);
            }}
            className="flex items-center p-1 text-base font-bold text-gray-900 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <HiOutlineGlobe className="h-10 w-10 mx-1 p-1" />
            <span className="">Worldwide</span>
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/");
              setShowHamburger(false);
            }}
            className="flex items-center p-1 text-base font-bold text-gray-900 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <HiOutlinePencilAlt className="h-10 w-10 mx-1 p-1" />
            <span className="">Today's Expression</span>
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/");
              setShowHamburger(false);
            }}
            className="flex items-center p-1 text-base font-bold text-gray-900 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <HiOutlineNewspaper className="h-10 w-10 mx-1 p-1" />
            <span className="">Today's News</span>
          </button>
        </div>
        {/* Notice, FAQ, Logout */}
        <hr className="my-4 border-gray-200 dark:border-gray-700 " />
        <div className="flex flex-col space-y-2">
          <button
            type="button"
            onClick={() => {
              navigate("/");
              setShowHamburger(false);
            }}
            className="h-10 flex items-center p-1 text-base font-bold text-gray-900 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <HiOutlineCog className="h-10 w-10 mx-1 p-1" />
            <span className="">Settings</span>
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/payments");
              setShowHamburger(false);
            }}
            className="flex items-center p-1 text-base font-bold text-gray-900 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <HiOutlineCreditCard className="h-10 w-10 mx-1 p-1" />
            <span className="">Payments</span>
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/");
              setShowHamburger(false);
            }}
            className="h-10 flex items-center p-1 text-base font-bold text-gray-900 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <HiOutlineQuestionMarkCircle className="h-10 w-10 mx-1 p-1" />
            <span className="">FAQ</span>
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/");
              setShowHamburger(false);
            }}
            className="h-10 flex items-center ml-2 p-1 text-base font-bold text-gray-900 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            Log Out
          </button>
        </div>

        {/* Extra */}
        {/* <li className=""><button type="button" onClick={()=>{navigate("/")}} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</button></li>
                <li className=""><button type="button" onClick={()=>{navigate("/")}} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</button></li>
                <li className=""><button type="button" onClick={()=>{navigate("/")}}s className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</button></li> */}
      </div>
    );
  } else return null;
}
