import React, { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";

// navbar import
import Navbar from "../../Navbar/TutorNav";
import Footer from "../../Footer";

// boostrap imports
import { Container, Row, Col, Button } from "react-bootstrap";

//import image 
import picture from "../../../images/code.jpg";

//import ELement for this page
import {
  ProfileImge,
  TutorLinks,
  TutorName,
  TutorLinkActive,
  TutorSubNavbar,
  TutorSubNavbarLink,
} from "../dashboard/TutorDashboardElements";

//import Courses Sections Component from courses

  import CourseSections from "."
import useFetchCoursesById from "../hooks/useFetchCoursesById";
import ReviewCourse from "../NewCourseProcess/ReviewCourse";

export default function TutorPreviewCourse(props) {
  const [Id, setId] = useState('1267283472364');
  const { id } = useParams();
  const { loading, courses } = useFetchCoursesById(id);
console.log(courses);
  

  // .where("count", ">=", 1)

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // NAVBAR CONTROLS
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
  return (
    <div fluid className="height-full">
      <Navbar
        toggle={toggle}
        navbar={navbar}
        changeBackground={changeBackground}
      />
      <Row className="page-header " >
        <Container className="row mt-5 p-5">
         <Col md={3} className="text-end my-auto hide-on-mobile">
         
            <img  
            width="150"
            height="150"
            src={picture} alt="myimage" 
            className="rounded-circle" />

       
        </Col>
        <Col md={7} className=" text-start my-auto ">
         
          <TutorName>Winston Brown</TutorName>
          <p className="text-muted">
          brownwinston@gmail.com
          </p>
          <hr/>
            <TutorLinks to={"/tutor-courses"} active className="p-2 m-1">Your Courses</TutorLinks>
            <TutorLinks to={"/tutor-create-course"} className="p-2 m-1">Create New Course</TutorLinks>

            <TutorLinks to={"/tutor-profile"} className="p-2 m-1">Edit Profile</TutorLinks>



        </Col>
       </Container>
      </Row>
      <TutorSubNavbar>
        <Container className="mx-5">
          <Container className="container mx-5 p-4 ">
            <TutorSubNavbarLink to={"/tutor-courses"}  active className="p-2 m-1">Upcoming</TutorSubNavbarLink>
              <TutorSubNavbarLink to={"/tutor-courses"} className="p-2 m-1">In Session</TutorSubNavbarLink>
              <TutorSubNavbarLink to={"/tutor-courses"} className="p-2 m-1">Ended</TutorSubNavbarLink>
          </Container>
        </Container>
     
      </TutorSubNavbar>
      <Container className="height-half">

        <Row className="mt-4 mb-4">
          <Col md={12} className="mx-auto">
            <ReviewCourse courses={courses[0]}/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
