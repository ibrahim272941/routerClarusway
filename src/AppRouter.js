import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FullStack from "./pages/FullStack";
import Instructor from "./pages/Instructor";
import InstructorDetails from "./pages/InstructorDetails";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/instructor/:login" element={<InstructorDetails />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/developing" element={<FullStack />} />
          <Route path="/devops" element={<FullStack />} />
          <Route path="/data-science" element={<FullStack />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default AppRouter;
