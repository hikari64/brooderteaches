import React, { useState,useEffect } from "react";
import CoursePrev from "../components/CourseDetails/preview";
import LessonSections from "../components/CourseSections/lessons";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBar from "../components/PageBar";
import ClassBar from "../components/PageBar/classbar";
import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import { fbapp } from "../firebase";

const ClassPage = ({
  match: {
    params: { id },
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lesson, setLesson] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isActive, setActive] = useState(1);


  

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
      db.collection('courses').where("id", "==", id).get().then((querySnapshot) => {
              
      // Loop through the data and store
      // it in array to display
      querySnapshot.forEach(element => {
          var data = element.data();
          setCourses(arr => [...arr , data]);
          console.log(data.length)
              
      });
  })
  }; 
      const fetchlessons = async()=>{
      const db = fbapp.firestore();
      db.collection('lessons').where("courseId", "==", id).get().then((querySnapshot) => {
              
      // Loop through the data and store
      // it in array to display
      querySnapshot.forEach(element => {
          var data = element.data();
          setLesson(arr => [...arr , data]);
          console.log(data.length)
              
      });
  })
  };
  fetchCourses();
  fetchlessons();

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
      <ClassBar isActive={isActive} setActive={setActive} id={id}  />
      {/* <CoursePrev id={id} />
       */}
       <LessonSections lessons= {lesson}/>
      <Footer />
    </>
  );
};

export default ClassPage;
