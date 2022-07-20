/* eslint-disable */
import "./App.css";
import "./tailwind.css";

import { Suspense, useState } from "react";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";

/* pages */
import Courses from "./pages/Courses.js";
import About from "./pages/About.js";
import Community from "./pages/Community.js";
import Team from "./pages/Team.js";
import Translation from "./pages/Translation.js";
import Event from "./pages/Event.js";
import Notice from "./pages/Notice.js";
import LoginKR from "./pages/LoginKR.js";
import LoginEN from "./pages/LoginEN.js";
import Register from "./pages/Register.js";
import MyClassroom from "./pages/MyClassroom.js";
import Cart from "./pages/Cart.js";

/* components */
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Top from "./components/Top.js";

/* utils */
import CourseData from "./utils/CourseData.js";
import Quotes from "./utils/Quotes.js";
import HomeCarousel from "./components/HomeCarousel.js";

function App() {
  let [courseData, setCourseData] = useState(CourseData);
  let [quotes, setQuotes] = useState(Quotes);
  let [hidden, setHidden] = useState(true);
  let [showBanner, setShowBanner] = useState(true);

  return (
    <div className="App ">
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=0"
        />
        <title>INFINITO Home</title>
      </Helmet>
      {/* <Banner /> */}
      <Navbar
        hidden={hidden}
        setHidden={setHidden}
        showBanner={showBanner}
        setShowBanner={setShowBanner}
      />

      <div id="main">
        <Top showBanner={showBanner} setShowBanner={setShowBanner} />
        {hidden ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HomeCarousel />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/courses"
                element={<Courses courseData={courseData} />}
              />
              <Route path="/team/*" element={<Team />} />
              <Route path="/community" element={<Community />} />
              <Route path="/translation" element={<Translation />} />
              <Route path="/event" element={<Event />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/login" element={<LoginEN />} />
              <Route path="/register" element={<Register />} />
              <Route path="/myclassroom" element={<MyClassroom />} />
              <Route path="/cart" element={<Cart />} courseData={courseData} />

              {/* <Route path="/payments" element= {<Payments />}/>
            <Route path="/polyverse" element= {<Polyverse />}/>
            <Route path="/daily/expressions" element= {<Expressions />}/>
            <Route path="/daily/news" element= {<News />}/> */}

              {/* <Route path="/calculator" element={<Calculator />} /> */}
            </Routes>
          </Suspense>
        ) : null}
      </div>
      <Footer quotes={quotes} />
    </div>
  );
}

export default App;
