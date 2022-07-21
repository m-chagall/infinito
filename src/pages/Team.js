import { Helmet } from "react-helmet";
import { Route, Routes, useNavigate } from "react-router-dom";
import CareerCounselorsData from "../utils/CareerCounselorsData.js";
import CommunityManagersData from "../utils/CommunityManagersData.js";
import InstructorsData from "../utils/InstructorsData.js";
import TranslatorsData from "../utils/TranslatorsData.js";
import CareerCounselors from "./CareerCounselors.js";
import CommunityManagers from "./CommunityManagers.js";
import Instructors from "./Instructors.js";
import Translators from "./Translators.js";

export default function Team() {
  let navigate = useNavigate();
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=0"
        />
        <title>Team</title>
      </Helmet>
      <Routes>
        <Route
          path=""
          element={
            <>
              <div className="w-full flex flex-col lg:px-24 2xl:px-60">
                {/* Top */}

                {/* Middle */}
                <div className="w-full flex flex-col justify-center items-center py-12">
                  {/* Text area */}
                  <div className="mx-auto flex flex-col justify-center items-center sm:mx-24">
                    <h1 className="text-4xl font-bold mb-10">Meet Our Team</h1>
                    <p className="text-xl text-gray-600"></p>
                  </div>
                  {/* Column with Icons - flaticons.com */}
                  <div className="grid grid-cols-2 gap-4 text-start sm:mx-12 max-w-4xl">
                    {/* #1 Instructors */}
                    <div className="w-full px-4">
                      <button
                        type="button"
                        className="transition-transform hover:scale-110"
                        onClick={() => {
                          navigate("/team/instructors");
                        }}>
                        <div className="w-full bg-gray-200 flex justify-center p-4 rounded-2xl bg-gradient-to-tl from-yellow-100 to-gray-800">
                          <span className="overflow-hidden w-52 h-52 flex justify-center bg-gray-100 border border-gray-200 shadow-xl rounded-full">
                            <img
                              src={`${process.env.PUBLIC_URL}/img/translator-1.png`}
                              className="w-48 h-48 m-2"
                              alt="teacher"
                            />
                          </span>
                        </div>
                        <div className="w-full flex flex-col text-center">
                          <h4 className="text-xl font-bold mb-4">
                            Instructors
                          </h4>
                        </div>
                      </button>
                    </div>
                    {/* #2 Translators */}
                    <div className="w-full px-4">
                      <button
                        type="button"
                        className="transition-transform hover:scale-110"
                        onClick={() => {
                          navigate("/team/translators");
                        }}>
                        <div className="w-full bg-gray-200 flex justify-center p-4 rounded-2xl bg-gradient-to-tr from-yellow-100 to-gray-600">
                          <span className="overflow-hidden w-52 h-52 flex justify-center bg-gray-100 border border-gray-200 shadow-xl rounded-full">
                            <img
                              src={`${process.env.PUBLIC_URL}/img/career-counselor-2.png`}
                              className="w-48 h-48 m-2"
                              alt="translator"
                            />
                          </span>
                        </div>
                        <div className="w-full flex flex-col text-center">
                          <h4 className="text-xl font-bold mb-4">
                            Translators
                          </h4>
                        </div>
                      </button>
                    </div>
                    {/* #3 Career Counselors */}
                    <div className="w-full px-4">
                      <button
                        type="button"
                        className="transition-transform hover:scale-110"
                        onClick={() => {
                          navigate("/team/career-counselors");
                        }}>
                        <div className="w-full bg-gray-200 flex justify-center p-4 rounded-2xl bg-gradient-to-bl from-sky-100 to-gray-800">
                          <span className="overflow-hidden w-52 h-52 flex justify-center bg-gray-100 border border-gray-200 shadow-xl rounded-full">
                            <img
                              src={`${process.env.PUBLIC_URL}/img/career-abroad.png`}
                              className="w-48 h-48 m-2"
                              alt="career-counselor"
                            />
                          </span>
                        </div>
                        <div className="w-full flex flex-col text-center">
                          <h4 className="text-xl font-bold mb-4">
                            Career Counselors
                          </h4>
                        </div>
                      </button>
                    </div>
                    {/* #4 Community Managers */}
                    <div className="w-full px-4">
                      <button
                        type="button"
                        className="transition-transform hover:scale-110"
                        onClick={() => {
                          navigate("/team/community-managers");
                        }}>
                        <div className="w-full bg-gray-200 flex justify-center p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-pink-800">
                          <span className="overflow-hidden w-52 h-52 flex justify-center bg-gray-100 border border-gray-200 shadow-xl rounded-full">
                            <img
                              src={`${process.env.PUBLIC_URL}/img/support.png`}
                              className="w-48 h-48 m-2"
                              alt="community-manager"
                            />
                          </span>
                        </div>
                        <div className="w-full flex flex-col text-center">
                          <h4 className="text-xl font-bold mb-4">
                            Community Managers
                          </h4>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="instructors"
          element={<Instructors instructorsData={InstructorsData} />}
        />
        <Route
          path="translators"
          element={<Translators translatorsData={TranslatorsData} />}
        />
        <Route
          path="career-counselors"
          element={
            <CareerCounselors careerCounselorsData={CareerCounselorsData} />
          }
        />
        <Route
          path="community-managers"
          element={
            <CommunityManagers communityManagersData={CommunityManagersData} />
          }
        />
      </Routes>
    </>
  );
}
