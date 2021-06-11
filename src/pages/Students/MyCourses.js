import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { CContainer, CContainer2 } from "../PagesElements";
import CourseSections from "../../components/CourseSections/StudentCourses";
import StudentDashboardHeader from "../../components/PageHeader/StudentDashboardHeader";
import Navbar from '../../components/Navbar/StudentNav';

import {fbapp} from "../../firebase";
import {useAuth} from '../../contexts/AuthContext'
import Spinner from "../../components/Spinner/Spinner";
import { Container } from "react-bootstrap";





const MyCourses = () => {
  const { userID } = useAuth()
  

  const db = fbapp.firestore();
  
  const [loading, setLoading] = useState(true);
  const [emptyCourse, setEmptyCourse] = useState(false);
  //  const [courseLevel,setCourseLevel] = useState(0);
  
  const [filteredCourse, setFilteredCourse] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchCourses = async()=>{
    db.collection('students').doc(userID)
        .get()
        .then((doc) => {
            if (doc.exists) {
                var data = doc.data().courses
                // console.log(data)
                
                if(data){
                  // data.forEach((dat) => {
                  //allcourses.push(doc.data());
                  setFilteredCourse(filteredCourse => [...filteredCourse ,data]);
                  setEmptyCourse(false)
                  setLoading(false)
                // });
                }else{
                  setEmptyCourse(true)
                  setLoading(false)

                }
                // setCourses(arr => [...arr , data]);
                
                


            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
      // Loop through the data and store
      // it in array to display
    //   querySnapshot.forEach(element => {
    //       var data = element.data();
    //       setCourses(arr => [...arr , data]);
    //       console.log(data.length)
           // data.forEach(fetchMyCourses)
    //   });
  })
}; fetchCourses();
}, [])
 
 
  // scroll to top
  
  const [isOpen, setIsOpen] = useState(false);

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

  // Define an image to give to Pageheader
  // Pass that image to the Pageheader

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />      
      <Navbar toggle={toggle} navbar={navbar} changeBackground={changeBackground}/>
      <StudentDashboardHeader/>
      <CContainer>
        {loading && <Spinner/>}
        {emptyCourse && <Container className="mx-auto my-auto">No courses, consider taking a course already!</Container>}
        {!loading && <CourseSections courses={filteredCourse} />}
        
      </CContainer>

      <Footer />
    </>
  );
};

export default MyCourses;
