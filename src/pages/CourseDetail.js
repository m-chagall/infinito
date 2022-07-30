import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

export default function CourseDetail({ courseData }) {
  /* current page item */
  let { courseId } = useParams();
  let currentItem = courseData.find((x) => x.id === parseInt(courseId));

  let [fade, setFade] = useState("");
  useEffect(() => {
    let timer = setTimeout(() => {
      setFade("opacity-1 transition-opacity duration-500");
    }, 100);
    return () => {
      clearTimeout(timer);
      setFade("opacity-0");
    };
  }, [courseId]);
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=0"
        />
        <title>INFINITO - {currentItem.category}</title>
      </Helmet>
      {/* Container */}
      <div className={`my-10 py-0.5 bg-gray-100 ${fade}`}>
        <div className="px-8 py-10 mx-auto w-4xl max-w-5xl shadow-md bg-white">
          {/* Product Title */}
          <div className="px-4 mx-auto mb-2">
            <h1 className="text-start text-3xl font-extrabold">
              {currentItem.title}
            </h1>
            <span className="bg-black block w-8 h-1 mt-6"></span>
          </div>
          {/* Product View */}
          <div className="px-4 pb-10 mx-auto flex border-b-2">
            {/* Product Image */}
            <div className="w-1/2 pr-8 h-96 border-4 bg-indigo-600"></div>
            {/* Product Info */}
            <div className="px-4 py-4 w-1/2 flex flex-col justify-between">
              {/* Product Summary */}
              <div className="mb-4">
                <p className="text-start text-xl">{currentItem.summary}</p>
              </div>
              {/* Product Add-to-Cart or Buy Module */}
              <div className="">
                {/* Wrapper */}
                <div className="">
                  {/* Price */}
                  <div className="flex flex-col text-end mb-4">
                    <span className="text-3xl font-extrabold">
                      €{currentItem.price}
                    </span>
                    <span>* All prices are in EUR.</span>
                  </div>
                  {/* Buttons */}
                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="w-44 h-12 rounded-3xl bg-indigo-600 font-bold uppercase text-white">
                      Add to cart
                    </button>
                    <button
                      type="button"
                      className="w-44 h-12 rounded-3xl bg-indigo-600 font-bold uppercase text-white">
                      Enroll now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product Detail */}
          <div className="flex">
            <div className="flex flex-col">
              <p>Level</p>
              <span className="inline">Avancé</span>
            </div>
            <div className="flex flex-col">
              <p>Course language</p>
              <span className="inline">Français</span>
            </div>
            <div className="flex flex-col">
              <p>Subtitle(s)</p>
              <span className="inline">한국어</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
