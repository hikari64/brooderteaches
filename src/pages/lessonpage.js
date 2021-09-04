import React, { useState,useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import LessonDets from "../components/CourseDetails/lessondetails";
import CoursePrev from "../components/CourseDetails/preview";
import { PlayerStyle, Videocontainer } from "../components/CourseSections/CourseElements";
import LessonSections from "../components/CourseSections/lessons";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBar from "../components/PageBar";
import ClassBar from "../components/PageBar/classbar";
import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import { fbapp } from "../firebase";

const LessonPage = ({
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
              
      querySnapshot.forEach(element => {
          var data = element.data();
          setCourses(arr => [...arr , data]);
          console.log(data.length)
              
      });
  })
  }; 
      const fetchlessons = async()=>{
      const db = fbapp.firestore();
      db.collection('lessons').doc(id).get().then((querySnapshot) => {

      var data = querySnapshot.data();
          setLesson(data);
          console.log(data.length)
              
          db.collection('courses').doc(data.courseId).get().then((cours) => {
                setCourses(cours.data());            
            });
  })
  };
  fetchlessons();
  
  }, [])

  const result = <>
  <Row>
                  <ReactPlayer url={courses.preview}
                            className={Videocontainer}
                            playing
                            width="100%"
                            height="100%"
                            controls={false}
                        />
              </Row>
       <LessonSections lessons= {lesson}/>
       <Container>
         <LessonDets data={courses}/>
       </Container>
  </>

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        navbar={navbar}
        changeBackground={changeBackground}
      />
            <PageHeader id={id} courses = {courses} />
            {courses && result}
      <Footer />
    </>
  );
};

export default LessonPage;
