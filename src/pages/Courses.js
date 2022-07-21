import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaClipboardList,
  FaRegCreditCard,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./../store/inCartItems.js";

function Courses(props) {
  let [courseOption, setCourseOption] = useState("hot");
  let navigate = useNavigate();
  /* redux */
  let dispatch = useDispatch();
  let state = useSelector((state) => {
    return state;
  });

  let [added, setAdded] = useState(false);
  let [exist, setExist] = useState(false);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setAdded(false);
      }, 3000);
    };
  }, [added]);
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setExist(false);
      }, 3000);
    };
  }, [exist]);

  const handleViewCourse = (e) => {
    console.log("view course");
  };

  const handleAddToCart = (e) => {
    let selectedItemId = parseInt(e.target.getAttribute("data-id"));
    for (let i = 0; i < state.inCartItems.length; ++i) {
      if (selectedItemId === state.inCartItems[i].id) {
        setExist(true);
        return;
      }
    }
    let selectedCourse = props.courseData.find((item) => {
      return item.id === selectedItemId;
    });
    dispatch(addItem(selectedCourse));
    setAdded(true);
  };

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=0"
        />
        <title>Courses</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/img/image-3.jpg"
          })`,
        }}
        className="py-10 bg-scroll bg-cover bg-center relative bg-before">
        {added ? (
          <div className="relative bg-blue-400/30 px-4 py-1 text-fuchsia-50 rounded-xl">
            Successfully added to cart.
          </div>
        ) : null}
        {exist ? (
          <div className="relative bg-pink-400/30 px-4 py-1 text-fuchsia-50 rounded-xl">
            Item already in cart.
          </div>
        ) : null}
        <div className="relative my-5 px-2 max-w-md mx-auto text-start md:max-w-2xl lg:max-w-4xl">
          <span className="text-2xl font-extrabold tracking-wide text-fuchsia-50">
            BEST
          </span>
        </div>
        <MainCoursesFR
          courseData={props.courseData}
          handleAddToCart={handleAddToCart}
          handleViewCourse={handleViewCourse}
          navigate={navigate}
          added={added}
          exist={exist}
        />
      </div>

      <hr className="mx-auto w-3/4" />
      <div className="my-5 px-2 max-w-md mx-auto text-start md:max-w-2xl lg:max-w-4xl">
        <span className="text-xl font-extrabold tracking-wide">
          ALL COURSES
        </span>
        <ul className="flex py-2 mx-auto space-x-2">
          <li className="-ml-1 p-1 text-sm font-bold hover:animate-pulse hover:shadow-xl hover:bg-gray-100">
            <button
              type="button"
              onClick={() => {
                setCourseOption("hot");
              }}>
              HOT
            </button>
          </li>
          <li className="p-1 text-sm font-bold hover:animate-pulse hover:shadow-xl hover:bg-gray-100">
            <button
              type="button"
              onClick={() => {
                setCourseOption("elementary");
              }}>
              A1/A2
            </button>
          </li>
          <li className="p-1 text-sm font-bold hover:animate-pulse hover:shadow-xl hover:bg-gray-100">
            <button
              type="button"
              onClick={() => {
                setCourseOption("intermediate");
              }}>
              B1/B2
            </button>
          </li>
          <li className="p-1 text-sm font-bold hover:animate-pulse hover:shadow-xl hover:bg-gray-100">
            <button
              type="button"
              onClick={() => {
                setCourseOption("advanced");
              }}>
              C1
            </button>
          </li>
          <li className="p-1 text-sm font-bold hover:animate-pulse hover:shadow-xl hover:bg-gray-100">
            <button
              type="button"
              onClick={() => {
                setCourseOption("careers");
              }}>
              WORK IN EUROPE
            </button>
          </li>
        </ul>
      </div>
      <CoursesFR
        courseData={props.courseData}
        courseOption={courseOption}
        handleAddToCart={handleAddToCart}
        handleViewCourse={handleViewCourse}
      />
    </>
  );
}

function MainCoursesFR({
  courseData,
  handleViewCourse,
  handleAddToCart,
  navigate,
  added,
  exist,
}) {
  return (
    <>
      {courseData.map((a, i) => {
        if (courseData[i].main === true) {
          return (
            <>
              <div
                className="relative my-5 min-w-96 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:max-w-4xl"
                key={i}>
                <div className="md:flex items-center">
                  {/* Course image */}
                  <div className="flex items-center md:shrink-0 ">
                    <img
                      className="h-48 w-48 object-cover md:h-60 md:w-60"
                      src={`${process.env.PUBLIC_URL}/img/france-${
                        (i + 1) % 5
                      }.jpg`}
                      alt={`${courseData[i].level} course`}
                    />
                  </div>
                  {/* Course description */}
                  <div className="p-6 w-full">
                    <a href="/" className="">
                      <p className="hidden">{courseData[i].id}</p>
                      <h4 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        {courseData[i].category}
                      </h4>
                      <p className="block mt-1 text-base leading-tight font-bold text-black hover:underline">
                        {courseData[i].title}
                      </p>
                      <p className="mt-2 text-sm text-slate-500">
                        {courseData[i].summary}
                      </p>
                    </a>
                    <ul className="mt-2 gap-x-4 text-sm flex justify-center items-center">
                      <li>
                        <button
                          type="button"
                          className="p-2 hover:shadow rounded-xl">
                          <FaClipboardList className="h-4 w-4 mx-1 inline" />
                          SYLLABUS
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="p-2 hover:shadow rounded-xl">
                          <FaRegCreditCard className="h-4 w-4 mx-1 inline" />
                          ENROLL
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="p-2 hover:shadow rounded-xl"
                          data-id={`${courseData[i].id}`}
                          onClick={handleAddToCart}>
                          <FaShoppingCart className="h-4 w-4 mx-1 inline" />
                          ADD TO CART
                        </button>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="nav-font text-xs relative px-4 py-1 mt-2 rounded bg-black text-white"
                      onClick={() => {
                        navigate("/cart");
                      }}>
                      GO TO CART
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        } else return null;
      })}
    </>
  );
}

function CoursesFR({ courseData, courseOption, handleViewCourse }) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    let timer = setTimeout(() => {
      setFade("opacity-1 transition-opacity duration-500");
    }, 10);
    return () => {
      clearTimeout(timer);
      setFade("opacity-0");
    };
  }, [courseOption]);
  return (
    <div className={`${fade}`}>
      <div className="flex justify-center">
        <div className="mx-auto grid grid-cols-1 grid-flow-row md:grid-cols-2 md:gap-x-8 lg:gap-x-28 md:max-w-3xl lg:max-w-4xl">
          {courseData.map((a, i) => {
            switch (courseOption) {
              case "hot": {
                if (courseData[i].hot) {
                  return (
                    <div
                      className="my-5 w-96 max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-md md:w-80 lg:w-[400px] dark:bg-gray-800 dark:border-gray-700"
                      key={i}>
                      {/* Course image */}
                      <div className="">
                        <img
                          className="rounded-t-lg h-52 w-full object-cover"
                          src={process.env.PUBLIC_URL + "/img/france-5.jpg"}
                          alt=""
                        />
                      </div>
                      {/* Course description */}
                      <div className="p-5">
                        <h4 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                          {courseData[i].category}
                        </h4>
                        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                          {courseData[i].title}
                        </h5>
                        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                          {courseData[i].summary}
                        </p>
                        <button
                          type="button"
                          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                          id={`item-${courseData[i].id}`}
                          onClick={handleViewCourse}>
                          View Course
                          <FaArrowRight className="ml-2 -mr-1 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                } else return null;
              }
              default: {
                if (courseData[i].level === courseOption) {
                  return (
                    <div
                      className="my-5 w-96 max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-md md:w-80 lg:w-[400px] dark:bg-gray-800 dark:border-gray-700"
                      key={i}>
                      {/* Course image */}
                      <div className="">
                        <img
                          className="rounded-t-lg w-full h-52 object-cover"
                          src={process.env.PUBLIC_URL + "/img/france-6.jpg"}
                          alt=""
                        />
                      </div>
                      {/* Course description */}
                      <div className="p-5">
                        <h4 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                          {courseData[i].category}
                        </h4>
                        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                          {courseData[i].title}
                        </h5>
                        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                          {courseData[i].summary}
                        </p>
                        <button
                          type="button"
                          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                          id={`item-${courseData[i].id}`}
                          onClick={handleViewCourse}>
                          View Course
                          <FaArrowRight className="ml-2 -mr-1 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                } else return null;
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses;
