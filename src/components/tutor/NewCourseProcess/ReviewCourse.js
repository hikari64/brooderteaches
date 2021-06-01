import React, { useState, useEffect } from "react";



// boostrap impots
import { Container, Row, Col, Button, Form } from "react-bootstrap";

import { LessonButtons, ReviewHeadings ,CourseTitle,CourseDescription,PlayerStyle,Videocontainer} from "../dashboard/TutorDashboardElements";

import ReactPlayer from "react-player"

// import Custom css
// import "./signupprocess.css";

export default function ReviewCourse(props) {
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

      <Container className="height-half">
        <Row className="mt-4 mb-4">
        <Col md={3}>
            <LessonButtons to={"/tutor-create-course"} active className="p-3 m-3 text-center"> 
            Course Details
            </LessonButtons>
            <LessonButtons to={"/tutor-create-course"} className="p-3 m-3 text-center"> 
              Lesson one
            </LessonButtons>
            <LessonButtons to={"/tutor-create-course"} className="p-3 m-3 text-center"> 
              Lesson Two
            </LessonButtons>
            
          </Col>
          <Col md={8} className="mx-auto">
            <ReviewHeadings className="m-2 mx-auto">
              Course Title
            </ReviewHeadings>
            <CourseTitle>
              Introduction to Programming
            </CourseTitle>
            <ReviewHeadings className="m-2 mx-auto">Course Description</ReviewHeadings>
            <CourseDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat interdum felis, eget eleifend tellus pellentesque quis. Integer tellus orci, congue id dui id, feugiat ornare erat. Cras dictum metus a arcu tempus, vitae euismod tortor imperdiet. Aliquam id lorem dignissim, suscipit dolor vitae, egestas justo. Integer gravida tortor dapibus, maximus sem sollicitudin, auctor massa. Proin id rutrum libero. Vestibulum vel urna in mi facilisis luctus sed vel urna. Suspendisse egestas molestie magna a dapibus. Sed sollicitudin, nisl ut vulputate vulputate, nibh est pulvinar nisi, ut tempus lacus erat eget elit. Cras mollis leo et lacinia eleifend. Integer lobortis ipsum vel justo vehicula, in euismod nibh fermentum. Nulla vel neque ut libero eleifend dapibus quis id erat. Duis venenatis sem mauris, nec sodales ante maximus accumsan. Ut consequat augue sed purus sodales, nec pharetra felis mollis. Proin iaculis rhoncus nulla at tincidunt. Nullam et tortor mi.
            </CourseDescription>
            <ReviewHeadings  className="m-2 mx-auto">Introductory Video</ReviewHeadings>
            <PlayerStyle >
                        <ReactPlayer url=""
                            className={Videocontainer}
                            playing
                            width="100%"
                            height="100%"
                            controls={false}
                        />
              </PlayerStyle>
            
          </Col>

        </Row>
        <Col className="text-center">
                <Button onClick={props.prevStep} className="primary-button">
                Go Back
              </Button>
              <Button onClick={props.nextStep} className="primary-button">
                Publish
              </Button>
              </Col>
      </Container>
    </div>
  );
}
