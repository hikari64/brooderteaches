import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// navbar import
import Navbar from "../../Navbar/TutorNav";
import Footer from "../../Footer";

// boostrap imports
import { Container, Row, Col, Button } from "react-bootstrap";

//import image
import picture from "../../../images/code.jpg";
import { useAuth } from "../../../contexts/TutorContext";
import useFetchTutorsById from "../hooks/useFetchTutorById";

//import ELement for this page
import {
  ProfileImge,
  TutorLinks,
  TutorName,
  TutorLinkActive,
  TutorSubNavbar,
  TutorSubNavbarLink,
  Circle,
  NewCourseTabHeaders,
} from "../dashboard/TutorDashboardElements";

//import Courses Sections Component from courses

import CourseSections from "../../CourseSections/index";
import { courses } from "../../../mock/mock";

//import Create New Course Processes

import NewCourseProcess from "../NewCourseProcess/NewCourseProcess";
import TutorDashboardHeader from "../dashboard/TutorDashboardHeader";
import { AccessDenied } from "./components";

export default function TutorCreateCourse(props) {
  const { userID,currentUser } = useAuth();
  

  //const [Id, setId] = useState('1267283472364');
  const { loading, tutors } = useFetchTutorsById(userID);

  // INDICATOR HOOKS

  const [indicator, SetIndicator] = useState(1);
  const [detailsIndicator, SetDetailsIndicator] = useState(true);
  const [lessonsIndicator, SetLessonsIndicator] = useState(false);
  const [reviewIndicator, SetReviewIndicator] = useState(false);

  const setLevelCheck = (levelKey) => {
    SetLessonsIndicator(false);
    SetDetailsIndicator(false);
    SetReviewIndicator(false);

    SetDetailsIndicator(levelKey > 0 ? true : false);
    SetLessonsIndicator(levelKey > 1 ? true : false);
    SetReviewIndicator(levelKey > 2 ? true : false);
  };

  const ProcessIndicator = (newindicator) => {
    var data = newindicator;

    SetIndicator(data);
    setLevelCheck(data);
  };

  return (
    <div fluid className="height-full">
      <TutorDashboardHeader  view={2} />
      {currentUser.verified && <TutorSubNavbar>
        <Container className="mx-5">
          <Container className="container mx-5 p-4 row">
            <Col>
              <Row>
                <Circle
                  active={detailsIndicator}
                  className="rounded-circle col-2"
                />
                <NewCourseTabHeaders className="col my-auto">
                  Course Details
                </NewCourseTabHeaders>
              </Row>
            </Col>
            <Col>
              <Row>
                <Circle
                  active={lessonsIndicator}
                  className="rounded-circle col-2"
                />
                <NewCourseTabHeaders className="col my-auto">
                  Upload Lessons
                </NewCourseTabHeaders>
              </Row>
            </Col>
            <Col>
              <Row>
                <Circle
                  active={reviewIndicator}
                  className="rounded-circle col-2"
                />
                <NewCourseTabHeaders className="col my-auto">
                  Review and Publish
                </NewCourseTabHeaders>
              </Row>
            </Col>
          </Container>
        </Container>
      </TutorSubNavbar>}
      <Container className="height-half">
        <Row className="mt-4 mb-4">
          <Col md={12} className="mx-auto">
            { tutors.verified && <NewCourseProcess ProcessIndicator={ProcessIndicator} /> }
            {!tutors.verified &&<AccessDenied/>}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
