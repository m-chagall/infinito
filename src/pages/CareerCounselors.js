export default function CareerCounselors({ careerCounselorsData }) {
  return (
    <>
      {/* Top */}
      <div className="w-full bg- flex h-[40vh] p-12 bg-gradient-to-r from-indigo-50 to-indigo-400 lg:px-36 2xl:px-60 ">
        {/* Text area */}
        <div className="w-2/3 flex justify-center items-center">
          <p className="text-start text-6xl font-extrabold sm:text-5xl">
            Our Team: Career Counselors
          </p>
        </div>
        {/* <div className=" Image area */}
        <div className="relative w-1/3 flex justify-center items-center">
          <div className="absolute top-1/4 left-0 bg-indigo-800 w-72 h-72 rounded-full sm:w-36 sm:h-36"></div>
          <div className="absolute top-1/4 left-1/4 bg-indigo-600 w-72 h-72 rounded-full sm:w-36 sm:h-36"></div>
          <div className="absolute top-1/4 left-2/4 bg-indigo-400 w-72 h-72 rounded-full sm:w-36 sm:h-36"></div>
          <div className="absolute top-1/4 left-3/4 bg-indigo-200 w-72 h-72 rounded-full sm:w-36 sm:h-36"></div>
        </div>
      </div>
      {/* Middle */}
      <div className="w-full flex flex-col py-24 lg:px-24 2xl:px-60">
        {/* Text area */}
        <div className="mx-auto pb-12 flex flex-col justify-center items-center sm:mx-24">
          <h1 className="text-4xl font-bold mb-10">Meet Our Team</h1>
          <p className="text-xl text-gray-600">Career Counselors</p>
        </div>

        {/* load Counselors Data */}
        <div className="grid grid-cols-2 gap-4 text-start sm:mx-12">
          {careerCounselorsData.map((a, i) => {
            return (
              // Column with Icons - flaticons.com
              <div className="w-full px-4" key={i}>
                <div className="w-full bg-gradient-to-r from-indigo-200 to-purple-200 flex justify-center p-4 rounded-t-2xl">
                  <span className="overflow-hidden w-52 h-52 flex justify-center bg-gray-100 border border-gray-200 shadow-xl rounded-full">
                    <img
                      src={`/img/career-counselor-${i + 1}.png`}
                      className="w-48 h-48 m-2"
                      alt="counselor"
                    />
                  </span>
                </div>
                <div className="w-full flex flex-col text-start">
                  <h4 className="text-xl font-bold mb-4 text-center">
                    {careerCounselorsData[i].name}
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <h4 className="font-bold">Alma Mater</h4>
                      {careerCounselorsData[i].almaMater.map((a, j) => {
                        return (
                          <div className="text-sm text-gray-600" key={j}>
                            <h6 className="text-base font-bold">
                              {careerCounselorsData[i].almaMater[j].degree}
                            </h6>
                            {careerCounselorsData[i].almaMater[j].school} (
                            {careerCounselorsData[i].almaMater[j].major})
                          </div>
                        );
                      })}
                    </li>
                    <li>
                      <h4 className="font-bold">Expertise</h4>
                      {careerCounselorsData[i].field.map((a, j) => {
                        return (
                          <p className="text-sm text-gray-600" key={j}>
                            {careerCounselorsData[i].field[j]}
                          </p>
                        );
                      })}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
