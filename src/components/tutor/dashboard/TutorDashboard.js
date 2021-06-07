import React, { useState, useEffect } from "react";
import { Link, useHistory} from "react-router-dom";

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
} from "./TutorDashboardElements";

import {useAuth} from '../../../contexts/AuthContext'

//import Courses Sections Component from courses

  import CourseSections from "../courses"
import useFetchCourses from "../hooks/useFetchCourses";
import Spinner from "../../Spinner/Spinner";
import useFetchCoursesByTutorId from "../hooks/useFetchCoursesByTutorId";
import useFetchTutorsById from "../hooks/useFetchTutorById";
import TutorDashboardHeader from "./TutorDashboardHeader";

export default function TutorDashboard(props) {
  const history = useHistory();

  const { userID } = useAuth()

const { loading, tutors } = useFetchTutorsById(userID);

if(!loading){
  if(tutors.state){
    if(tutors.state < 3){

    history.push("/tutor-complete-signup")
    }
  }
}
const { courses } = useFetchCoursesByTutorId(userID);


  return (
    <div fluid className="height-full">
      <TutorDashboardHeader tutors={tutors}/>
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
            {loading && <Spinner/>}
           {courses && <CourseSections courses={courses}/>}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
