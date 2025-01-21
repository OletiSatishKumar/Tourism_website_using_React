import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import BookNow from "../components/booknow/BookNow";

const Layout = () => {
  const [showBookNow, setShowBookNow] = useState(false);  // State to manage modal visibility

  return (
    <>
      {/* Pass state handler to Navbar */}
      <Navbar setBookNow={setShowBookNow} />
      <Outlet />
      {/* Show BookNow component based on state */}
      {showBookNow && <BookNow show={showBookNow} setShow={setShowBookNow} />}
      <Footer />
    </>
  );
};

export default Layout;
