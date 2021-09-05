import React, { useState,useEffect } from "react";
import CoursePrev from "../components/CourseDetails/preview";
import LessonSections from "../components/CourseSections/lessons";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBar from "../components/PageBar";
import ClassBar from "../components/PageBar/classbar";
import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import Spinner from "../components/Spinner/Spinner";
import { fbapp } from "../firebase";

const ClassPage = ({
  match: {
    params: { id },
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lesson, setLesson] = useState([]);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);

      const db = fbapp.firestore();
      await db.collection('courses').doc(id).get().then((querySnapshot) => {
              
      // Loop through the data and store
      // it in array to display
      
          var data = querySnapshot.data();
          setCourses(data);
          console.log(data.length)
              
      setLoading(false);

  })
  }; 
      const fetchlessons = async()=>{
      setLoading(true);
      const db = fbapp.firestore();
      await db.collection('lessons').where("courseId", "==", id).get().then((querySnapshot) => {
              
      // Loop through the data and store
      // it in array to display
      querySnapshot.forEach(element => {
          var data = element.data();
          setLesson(arr => [...arr , data]);
          console.log(data.length)
      setLoading(true);
              
      });
  })
  };
  fetchCourses();
  fetchlessons();

  }, [])

  const results= <>
    <PageHeader id={id} courses = {courses} />
      <ClassBar isActive={isActive} setActive={setActive} id={id}  />
      {/* <CoursePrev id={id} />
       */}
       <LessonSections lessons= {lesson}/>
  </>

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        navbar={navbar}
        changeBackground={changeBackground}
      />
      {loading && <Spinner/>}
      {courses && results}
      <Footer />

    </>
  );
};

export default ClassPage;
