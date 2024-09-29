import React from "react";

import {Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home"
import Blogs from "../pages/Blogs";
import Notfound from "../pages/Notfound";
import PlacesRoute from "../pages/PlacesRoute";
import About from "../pages/About";
import BlogsDetails from "../pages/BlogsDetails";
import AOS from "aos";
import "aos/dist/aos.css";

const AppRoute = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
  );
};

export default AppRoute;