export default function Footer(props) {
  return (
    <>
      <footer className="bg-white px-2 py-4 rounded-lg md:px-6 md:py-8 dark:bg-gray-800">
        <Quotes quotes={props.quotes} />
        <div className="mx-2 items-center justify-between flex lg:justify-between">
          <button className="block items-center justify-start lg:flex">
            <span className="self-center text-3xl uppercase nav-logo font-black dark:text-white">
              infinito
            </span>
          </button>

          <ul className="flex flex-nowrap items-center justify-center text-sm text-gray-800 lg:justify-end mb-0 dark:text-gray-400">
            <li>
              <button
                onClick={() => {
                  navigate("/about");
                }}
                className="mr-4 hover:underline md:mr-6 ">
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/privacy");
                }}
                className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/license");
                }}
                className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/contact");
                }}
                className="hover:underline">
                Contact
              </button>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        {/* <span className="block text-xs text-center text-gray-400 sm:text-sm sm:text-center dark:text-gray-400">마이폴리버스 | 서울특별시 공부하구 세상으로 나아가길 99 <span className="hidden sm:inline">| </span> <br className="sm:hidden"/>(해외) Via Dante 99, Milano, Italia </span> */}
        <span className="block text-xs text-center text-gray-400 sm:text-sm sm:text-center dark:text-gray-400">
          INIFINITO | (KOREA) 서울특별시 공부하구 세상으로 나아가길 999{" "}
          <span className="hidden sm:inline">| </span>{" "}
          <br className="sm:hidden" />
          (ITALIA) Via Dante 999, Milano, Italia{" "}
        </span>
        {/* <span className="block text-xs text-center text-gray-400 sm:text-sm sm:text-center dark:text-gray-400">사업자등록번호: 000-00-00000  <span className="hidden sm:inline">| </span> <br className="sm:hidden"/>통신판매업신고번호:제0000-서울동작-0000호 <button onClick={()=>{navigate("/" className=)}}"hover:underline">[정보조회]</button></span> */}
        {/* <span className="block text-xs text-center text-gray-400 sm:text-sm sm:text-center dark:text-gray-400">Support: help[@]domain.com <span className="hidden sm:inline">| </span> <br className="sm:hidden"/>Marketing/Partnership: marketing[@]domain.com </span> */}
        <span className="block text-xs text-center text-gray-400 font-semibold sm:text-sm sm:text-center dark:text-gray-400">
          COPYRIGHT © 2022{" "}
          <button
            onClick={() => {
              navigate("/");
            }}
            className="hover:underline">
            INFINITO
          </button>
          . ALL RIGHTS MAY OR MAY NOT BE RESERVED :-)
        </span>
      </footer>
    </>
  );
}
function Quotes({ quotes }) {
  const numberOfQuotes = quotes.length;
  const ran = Math.round(Math.random() * 100) % numberOfQuotes;
  return (
    <div className="hidden my-4 mx-auto text-xs text-center items-center md:block lg:text-sm">
      {/* <h5 className="font-extrabold capitalize">Today's Quote</h5> */}
      <p id="quote">
        <span className="author font-bold">{quotes[ran].author}</span>
        <span> - </span>
        <span className="content">{`"${quotes[ran].quote}"`}</span>
      </p>
    </div>
  );
}
