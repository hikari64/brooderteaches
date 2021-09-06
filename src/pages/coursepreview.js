import React, { useState,useEffect } from "react";
import CoursePrev from "../components/CourseDetails/preview";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBar from "../components/PageBar";
import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import { fbapp } from "../firebase";


const CoursePreview = ({
  match: {
    params: { id },
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
      const fetchCourses = async()=>{
      const db = fbapp.firestore();
      db.collection('courses').doc(id).get().then((querySnapshot) => {
              
      // Loop through the data and store
      // it in array to display
          var data = querySnapshot.data();
          setCourses(data);
          console.log(data.length)
              
  })
  }; fetchCourses();
  }, [])

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        navbar={navbar}
        changeBackground={changeBackground}
      />
            <PageHeader id={id} courses = {courses} />
      <PageBar isActive={isActive} toggleClass={toggleClass} id={id} />
      <CoursePrev id={id} courses={courses} />
      <Footer />
    </>
  );
};

export default CoursePreview;
