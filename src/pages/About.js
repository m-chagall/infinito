import {
  IoBusiness,
  IoSchool,
  IoGlasses,
  IoAirplaneSharp,
} from "react-icons/io5";

export default function About() {
  return (
    <>
      {/* Top */}
      <div
        className="relative w-full flex h-[40vh] p-12 bg-sky-50 lg:px-24 2xl:px-60 bg-cover bg-fixed bg-center bg-before"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/about.jpg"})`,
        }}>
        {/* Text area */}
        <div className="absolute w-3/4 flex justify-center items-center top-1/4 sm:left-24">
          <p className="text-white text-start text-3xl font-extrabold sm:text-4xl xl:text-5xl">
            We help students and professionals learn foreign languages and make
            connections around the world.
          </p>
        </div>
      </div>
      {/* Middle */}
      <div className="w-full flex flex-col py-24 lg:px-24 2xl:px-60">
        {/* Text area */}
        <div className="mx-auto pb-12 flex flex-col justify-center items-center sm:mx-24">
          <h1 className="text-4xl font-bold mb-10">INFINITO</h1>
          <p className="text-xl text-gray-600">
            Infinito is an online learning platform that helps students and
            professionals learn foreign languages and make connections around
            the world.{" "}
          </p>
        </div>
        {/* Column with Icons */}
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 text-start sm:mx-20">
          <div className="w-full px-4">
            <span>
              <IoBusiness className="w-16 h-16 m-2 text-sky-900 dark:text-sky-50" />
            </span>
            <h4 className="text-xl font-bold mb-4">Professional</h4>
            <p className="text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-full px-4">
            <span>
              <IoSchool className="w-16 h-16 m-2 text-sky-900" />
            </span>
            <h4 className="text-xl font-bold mb-4">Study Abroad</h4>
            <p className="text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-full px-4">
            <span>
              <IoAirplaneSharp className="w-16 h-16 m-2 text-sky-900" />
            </span>
            <h4 className="text-xl font-bold mb-4">Travel</h4>
            <p className="text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-full px-4">
            <span>
              <IoGlasses className="w-16 h-16 m-2 text-sky-900" />
            </span>
            <h4 className="text-xl font-bold mb-4">Or just for fun!</h4>
            <p className="text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
