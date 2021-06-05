import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import CourseSideMenu from "../../components/CourseSideMenu.js";
import { CContainer, CContainer2 } from "../PagesElements";
import CourseSections from "../../components/CourseSections";
import StudentDashboardHeader from "../../components/PageHeader/StudentDashboardHeader";
import Navbar from '../../components/Navbar/StudentNav';
import {courses} from "../../mock/mock"


const AllCourses = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

//  const [courseLevel,setCourseLevel] = useState(0);

  const [filteredCourse, setFilteredCourse] = useState(courses)
  // filter mock data


  const DataFilter= (courseLength,courseLevel) =>{
    
      var data = courses;

     
      if((courseLevel) && (courseLength)){
        data = courses.filter(({period, difficulty}) => {
          return period === courseLength && difficulty === courseLevel;
        })
      }else{
         data = courses.filter(({period, difficulty}) => {
          return period === courseLength || difficulty === courseLevel;
        })
      }
       if (courseLength + courseLevel === 0 ){
        data = courses;
      }

      setFilteredCourse(data)
      
    
  }

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
        <CourseSideMenu 
        //setCourseLevel={setCourseLevel}
        DataFilter={DataFilter}  
        />
        <CContainer2>
          <CourseSections courses={filteredCourse} />
        </CContainer2>
      </CContainer>

      <Footer />
    </>
  );
};

export default AllCourses;
