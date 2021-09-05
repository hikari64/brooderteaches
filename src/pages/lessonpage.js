import React, { useState,useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import LessonDets from "../components/CourseDetails/lessondetails";
import CoursePrev from "../components/CourseDetails/preview";
import { CourseBtnLink, PlayerStyle, Videocontainer } from "../components/CourseSections/CourseElements";
import LessonSections from "../components/CourseSections/lessons";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBar from "../components/PageBar";
import ClassBar from "../components/PageBar/classbar";
import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../contexts/AuthContext";
import { arrayAdd, fbapp } from "../firebase";
import { PageplaceHolder } from "./pagesElement";

const LessonPage = ({
  match: {
    params: { id },
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lesson, setLesson] = useState([]);
  const [isActive, setActive] = useState(1);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
const {userID} = useAuth();

  const toggle = () => {
    setIsOpen(!isOpen);
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

  


  useEffect(() => {
      const fetchCourses = async()=>{
        setLoading(true);

        const db = fbapp.firestore();
        await db.collection('courses').doc(id).update(

        ).then((querySnapshot) => {
                
        // Loop through the data and store
        // it in array to display
        
            var data = querySnapshot.data();
            setCourses(data);
            console.log(data.length)
                
        setLoading(false);
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
                db.collection('lessons').doc(id).update({
                  attendee: arrayAdd.arrayUnion(userID)
                }).then((querySnapshot) => {
                  console.log("attendance taken")

                })

            });
  })
  };
  fetchlessons();
  
  }, [])

  const result = <>
  <Row className="h-50">
                  <ReactPlayer url={lesson.video}
                            // className={Videocontainer}
                            playing
                            width="100vw"
                            height="70vh"
                            controls={true}
                        />
              </Row>
       <Row className="mx-lg-5 mx-auto pt-3">
          <Container className="mx-lg-5 mx-auto">
            <h1>{courses.title}</h1>
            <h3>Lesson : {lesson.title}</h3>
         {/* <LessonDets data={courses}/> */}
        </Container>
          
       </Row>
       <Row className="mx-lg-5 mx-auto pt-3">
       <Container className="mx-lg-5 mx-auto">
            <h3 className="fw-bold">Lesson Summary</h3>
            <p>{lesson.summary}</p>
         {/* <LessonDets data={courses}/> */}
        </Container>
       </Row>
       <Row className="mx-lg-5 mx-auto pt-3">
       <Container className="mx-lg-5 mx-auto">
            <h3 className="fw-bold">Assignment</h3>
            <p>{lesson.summary}</p>
         {/* <LessonDets data={courses}/> */}
        </Container>
       </Row>

       <Row>
         <Container className="text-center mx-auto m-4">
            <CourseBtnLink to="#">Submit Assignment</CourseBtnLink>
          <CourseBtnLink to="#"> End Lesson</CourseBtnLink>
         </Container>
         
       </Row>
      
  </>

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        navbar={navbar}
        changeBackground={changeBackground}
      />
      <PageplaceHolder> {/* placeholder for padding top only*/}
            {courses && result}
      </PageplaceHolder>

      <Footer />
    </>
  );
};

export default LessonPage;
