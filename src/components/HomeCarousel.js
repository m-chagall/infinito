import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function HomeCarousel() {
  const TOTAL_SLIDES = 4;
  let [currentSlide, setCurrentSlide] = useState(0);

  let slideRef = useRef(null);
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };
  const PreviousSlide = () => {
    if (currentSlide === 0) setCurrentSlide(TOTAL_SLIDES);
    else setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 1.5s";
    slideRef.current.style.transform = `translateX(-${currentSlide}00vw)`;
  }, [currentSlide]);

  let [mouseDown, setMouseDown] = useState(false);
  let [initial, setInitial] = useState(0);
  let [after, setAfter] = useState(0);
  let [distance, setDistance] = useState(0);

  const slideImage = (e) => {
    setAfter(e.clientX);
    setDistance(parseInt(((after - initial) / window.innerWidth) * 100));
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s";
    slideRef.current.style.transform = `translateX(${distance}vw)`;
  }, [distance]);

  return (
    <>
      <div id="indicators-carousel" className="relative z-10 bg-slate-300">
        {/* <!-- Carousel wrapper --> */}
        <div className="overflow-hidden">
          <div
            className="relative w-[500vw] flex h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96 cursor-grab active:cursor-grabbing"
            ref={slideRef}
            onDragStart={(e) => {
              setMouseDown(true);
              // console.log("initial", e.clientX);
              setInitial(e.clientX);
              // console.log("width", window.innerWidth);
            }}
            onDrag={(e) => {
              if (mouseDown) {
                slideImage(e);
              }
            }}
            onDragEnd={() => {
              if (distance > 10) PreviousSlide();
              else if (distance < -10) NextSlide();
              else setDistance(0);
              setMouseDown(false);
            }}>
            {/* <!-- Item 1 --> */}
            <div className="relative w-[100vw]">
              <img
                src={process.env.PUBLIC_URL + "/img/carousel-1.jpg"}
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            {/* <!-- Item 2 --> */}
            <div className="relative w-[100vw]">
              <img
                src={process.env.PUBLIC_URL + "/img/carousel-2.jpg"}
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            {/* <!-- Item 3 --> */}
            <div className="relative w-[100vw]">
              <img
                src={process.env.PUBLIC_URL + "/img/carousel-3.jpg"}
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            {/* <!-- Item 4 --> */}
            <div className="relative w-[100vw]">
              <img
                src={process.env.PUBLIC_URL + "/img/carousel-4.jpg"}
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            {/* <!-- Item 5 --> */}
            <div className="relative w-[100vw]">
              <img
                src={process.env.PUBLIC_URL + "/img/carousel-5.jpg"}
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
          </div>
        </div>

        {/* <!-- Slider indicators --> */}
        <div className="flex absolute bottom-5 left-1/2 z-1 space-x-3 -translate-x-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-100 focus() focus:bg-gray-500"
            aria-current="true"
            aria-label="Slide 1"
            onClick={() => {
              setCurrentSlide(0);
            }}></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-100 focus:bg-gray-500"
            aria-current="false"
            aria-label="Slide 2"
            onClick={() => {
              setCurrentSlide(1);
            }}></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-100 focus:bg-gray-500"
            aria-current="false"
            aria-label="Slide 3"
            onClick={() => {
              setCurrentSlide(2);
            }}></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-100 focus:bg-gray-500"
            aria-current="false"
            aria-label="Slide 4"
            onClick={() => {
              setCurrentSlide(3);
            }}></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-100 focus:bg-gray-500"
            aria-current="false"
            aria-label="Slide 5"
            onClick={() => {
              setCurrentSlide(4);
            }}></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="flex absolute top-0 left-0 z-1 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={() => {
            PreviousSlide();
          }}>
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-transparent dark:bg-transparent group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <FaAngleLeft className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" />
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-1 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={() => {
            NextSlide();
          }}>
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-transparent dark:bg-transparent group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <FaAngleRight className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" />
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}
