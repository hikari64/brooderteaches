import React, { useState, useEffect } from "react";


// material ui imports
import { DropzoneArea } from "material-ui-dropzone";

// boostrap impots
import { Container, Row, Col, Button, Form } from "react-bootstrap";

// import Custom css
// import "./signupprocess.css";
import {
  LessonButtons,
  AddLessonButtons
} from "../dashboard/TutorDashboardElements";
import { NewReleasesOutlined } from "@material-ui/icons";


export default function UploadLessons(props) {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // NAVBAR CONTROLS
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [newLesson,SetNewLesson] = useState(5);


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
          <LessonButtons className="p-3 m-3 text-center">Lesson {2}</LessonButtons>
            <LessonButtons className="p-3 m-3 text-center">Lesson {3}</LessonButtons>
            <LessonButtons className="p-3 m-3 text-center">Lesson {4}</LessonButtons>
            <LessonButtons className="p-3 m-3 text-center">Lesson {5}</LessonButtons>
            <AddLessonButtons to={"/tutor-create-course"} className="p-3 m-3 text-center"> 
              + Add Lesson
            </AddLessonButtons>
          </Col>
          <Col md={8} className="mx-auto text-center">
            <Form inline >
              {/* COURSE TITLE */}
              <Form.Group className="row">
                <Form.Control
                  className="form-input col lg text-center"
                  type="text"
                  placeholder="Lesson Title"
                />
              </Form.Group>
              {/* COURSE DESCRIPTION*/}
              <Form.Group  className="row ">
                <Form.Control
                  as="textarea" 
                  rows={3}
                  className="form-input col text-center"
                  placeholder="Lesson Summary"
                  
                />
              </Form.Group>
              <Form.Group className="row">
                <Form.Control
                  className="form-input col lg text-center"
                  type="date"
                  placeholder="Lesson Date"
                />
              </Form.Group>
              {/* INTRO VIDEO */}
              <Form.Group  className="row mt-3">

               <Col>
               <DropzoneArea
                    acceptedFiles={['video/*']}
                    dropzoneText={"Upload Lesson Video"}
                    onChange={(files) => console.log('Files:', files)}
                    maxFileSize	={300000000}
                    />
               </Col>
          
              </Form.Group>
              {/* Add ASSignment */}
              <Form.Group  className="row mt-3">

               <Col>
               <DropzoneArea
                    acceptedFiles={['application/pdf']}
                    dropzoneText={"Add Assignment"}
                    onChange={(files) => console.log('Files:', files)}
                    maxFileSize	={300000000}
                    />
               </Col>
               
              </Form.Group>
              
              <Col className="text-center">
                <Button onClick={props.prevStep} className="primary-button">
                Go Back
              </Button>
              <Button onClick={props.nextStep} className="primary-button">
                Proceed
              </Button>
              </Col>
              
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
