import { Helmet } from "react-helmet";

export default function Translators({ translatorsData }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=0"
        />
        <title>Translators</title>
      </Helmet>
      {/* Top */}
      <div className="w-full flex h-[40vh] p-12 bg-gradient-to-l from-green-50 to-emerald-200 lg:px-36 2xl:px-60 ">
        {/* Text area */}
        <div className="w-2/3 flex justify-center items-center">
          <p className="text-start text-6xl font-extrabold sm:text-5xl">
            Our Team: Translators
          </p>
        </div>
        {/* <div className=" Image area */}
        <div className="relative w-1/3 flex justify-center items-center">
          <div className="absolute top-1/4 left-0 bg-green-800 w-72 h-72 rounded-full sm:w-36 sm:h-36"></div>
          <div className="absolute top-1/4 left-1/4 bg-green-600 w-72 h-72 rounded-full sm:w-36 sm:h-36"></div>
          <div className="absolute top-1/4 left-2/4 bg-green-400 w-72 h-72 rounded-full sm:w-36 sm:h-36"></div>
          <div className="absolute top-1/4 left-3/4 bg-green-200 w-72 h-72 rounded-full sm:w-36 sm:h-36"></div>
        </div>
      </div>
      {/* Middle */}
      <div className="w-full flex flex-col py-24 lg:px-24 2xl:px-60">
        {/* Text area */}
        <div className="mx-auto pb-12 flex flex-col justify-center items-center sm:mx-24">
          <h1 className="text-4xl font-bold mb-10">Meet Our Team</h1>
          <p className="text-xl text-gray-600">Translators</p>
        </div>

        {/* load Translators Data */}
        <div className="grid grid-cols-2 gap-4 text-start sm:mx-12">
          {translatorsData.map((a, i) => {
            return (
              // Column with Icons - flaticons.com
              <div className="w-full px-4" key={i}>
                <div className="w-full bg-gradient-to-r from-green-200 to-emerald-200 flex justify-center p-4 rounded-t-2xl">
                  <span className="overflow-hidden w-52 h-52 flex justify-center bg-gray-100 border border-gray-200 shadow-xl rounded-full">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/translator-${
                        i + 1
                      }.png`}
                      className="w-48 h-48 m-2"
                      alt="translator"
                    />
                  </span>
                </div>
                <div className="w-full flex flex-col text-start">
                  <h4 className="text-xl font-bold mb-4 text-center">
                    {translatorsData[i].name}
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <h4 className="font-bold">Alma Mater</h4>
                      {translatorsData[i].almaMater.map((a, j) => {
                        return (
                          <div className="text-sm text-gray-600" key={j}>
                            <h6 className="text-base font-bold">
                              {translatorsData[i].almaMater[j].degree}
                            </h6>
                            {translatorsData[i].almaMater[j].school} (
                            {translatorsData[i].almaMater[j].major})
                          </div>
                        );
                      })}
                    </li>
                    <li>
                      <h4 className="font-bold">Expertise</h4>
                      {translatorsData[i].field.map((a, j) => {
                        return (
                          <p className="text-sm text-gray-600" key={j}>
                            {translatorsData[i].field[j]}
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
