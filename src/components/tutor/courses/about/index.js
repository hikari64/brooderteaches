import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {Route,Link, useParams} from "react-router-dom";


// navbar import
import Navbar from "../../../Navbar/TutorNav";
import Footer from "../../../Footer";

// boostrap imports
import { Container, Row, Col, Button } from "react-bootstrap";
import TutorCourseHeader from '../../dashboard/TutorCourseHeader';

//import image 
import picture from "../../../../images/code.jpg";

//import ELement for this page
import {
  ProfileImge,
  TutorLinks,
  TutorName,
  TutorLinkActive,
  TutorSubNavbar,
  TutorSubNavbarLinkBlock,
} from "../../dashboard/TutorDashboardElements";

//import Courses Sections Component from courses

import useFetchCoursesById from "../../hooks/useFetchCoursesById";
import ReviewCourse from "../../NewCourseProcess/ReviewCourse";
import Spinner from "../../../Spinner/Spinner";
import { CourseReviewDetails } from "../components";

export default function TutorCoursePage(props) {
  let { id } = useParams();
  const [view, setView] =useState(1)

  const { loading, courses } = useFetchCoursesById(id);
  

  // .where("count", ">=", 1)

  // scroll to top
  
  return (
    <div fluid className="height-full">
      
      <Row className="page-header " >
          <TutorCourseHeader course={courses}/>
      </Row>
      <TutorSubNavbar>
          <Container className="mx-0 py-4  p">
            <TutorSubNavbarLinkBlock active={view === 1 && true} className="p-4 mx-1" onClick={()=>(setView(1))}>About</TutorSubNavbarLinkBlock>
            <TutorSubNavbarLinkBlock active={view === 2 && true} className="p-4 mx-1" onClick={()=>(setView(2))}>Preview</TutorSubNavbarLinkBlock>
            <TutorSubNavbarLinkBlock active={view === 3 && true} className="p-4 mx-1" onClick={()=>(setView(3))}>Students Enrolled</TutorSubNavbarLinkBlock>
          </Container>
     
      </TutorSubNavbar>
      <Container className="height-half">

        <Row className="mt-4 mb-4">
          <Col md={12} className="mx-auto">
            {loading && <Spinner/>}
            {view === 1 && <CourseReviewDetails courseId={id} courses={courses}/>}
            {view === 2 && <ReviewCourse courseId={id} courses={courses}/>}
            {view === 3 && <ReviewCourse courseId={id} courses={courses}/>}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
