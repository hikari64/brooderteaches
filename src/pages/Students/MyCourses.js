import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { CContainer, CContainer2 } from "../PagesElements";
import CourseSections from "../../components/CourseSections/StudentCourses";
import StudentDashboardHeader from "../../components/PageHeader/StudentDashboardHeader";
import Navbar from '../../components/Navbar/StudentNav';
import {courses} from "../../mock/mock"

import {fbapp} from "../../firebase";
import {useAuth} from '../../contexts/AuthContext'
import Spinner from "../../components/Spinner/Spinner";





const MyCourses = () => {
  const lightBg = false;
  const imgStart = true;
  //const { userID } = useAuth()
  
  
  let userID ="a3n1oGDjNldi6cnGMqmmg3R6Ll83";
  
  const db = fbapp.firestore();
  
  
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  //  const [courseLevel,setCourseLevel] = useState(0);
  
  const [filteredCourse, setFilteredCourse] = useState(courses)
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchCourses = async()=>{
    db.collection('students').doc(userID)
        .get()
        .then((doc) => {
            if (doc.exists) {
                var data = doc.data().courses
                console.log(data)
                console.log(data.length)
                // setCourses(arr => [...arr , data]);
                data.forEach((dat) => {
                  //allcourses.push(doc.data());
                  setFilteredCourse(filteredCourse => [...filteredCourse ,dat]);
                  
                });
                setLoading(false)


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
// declare usefull


  // filter mock data


  // const DataFilter= (courseLength,courseLevel) =>{
    
  //     var data = courses;

     
  //     if((courseLevel) && (courseLength)){
  //       data = courses.filter(({period, difficulty}) => {
  //         return period === courseLength && difficulty === courseLevel;
  //       })
  //     }else{
  //        data = courses.filter(({period, difficulty}) => {
  //         return period === courseLength || difficulty === courseLevel;
  //       })
  //     }
  //      if (courseLength + courseLevel === 0 ){
  //       data = courses;
  //     }

  //     setFilteredCourse(data)
      
    
  // }

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
        {!loading && <CourseSections courses={filteredCourse} />}
        
      </CContainer>

      <Footer />
    </>
  );
};

export default MyCourses;
