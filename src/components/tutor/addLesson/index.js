import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams} from "react-router-dom";

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

import {useAuth} from '../../../contexts/AuthContext'

//import Courses Sections Component from courses

  import CourseSections from "../courses"
import useFetchCourses from "../hooks/useFetchCourses";
import Spinner from "../../Spinner/Spinner";
import useFetchTutorsById from "../hooks/useFetchTutorById";
import TutorDashboardHeader from "../dashboard/TutorDashboardHeader";
import UploadLessons from "./UploadLessons";
import AddLesson from "../hooks/useAddLesson";

export default function AddLessonToCourse(props) {
  const history = useHistory();
  const { userID } = useAuth()
  const { courseIdParam } = useParams();
const { loading, tutors } = useFetchTutorsById(userID);
const [myloading, setLoading] = useState(false);

const [courseId, setCourseId] = useState(courseIdParam);

const [lessonData, setLessonData] = useState({
  title: "",
  courseId: "",
  summary: "",
  video: "",
  assignment: "",
  date: "",
});


const UpdateLessonData = (item, value) => {
  setLessonData((lessonData) => ({ ...lessonData, [item]: value }));
};

// Proceed to next step


const SubmitLesson = async (url) =>{
  setLoading(!loading)
 await AddLesson(lessonData,setLoading,courseId);
  setLessonData({
    title: "",
    courseId: "",
    summary: "",
    video: "",
    assignment: "",
    date: "",
  })
useHistory.go(0)
}


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
           {courseId && (
            <UploadLessons
              Submit={SubmitLesson}
              courseId={courseId}
              updateData={UpdateLessonData}
              data={lessonData}
            />
          )}
           
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
