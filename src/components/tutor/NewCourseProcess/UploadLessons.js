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
  

  const [newLesson,SetNewLesson] = useState(5);

  const eventHandler =(event)=>{
    let val = event.target.value
    let nam = event.target.name

    props.updateData(nam,val);
    

  }
  const handleChange=(File,e)=>{
    let val = File[0];
    
    let   nam = "video"
    
  
    props.updateData(nam,val);

  }
  const handleChangePdf=(File,e)=>{
    let val = File[0];
    
    let   nam = "assignment"
    
  
    props.updateData(nam,val);

  }
  const Proceed = ()=>{
    props.updateData("courseId",props.courseId);
     props.Submit();
   }
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
                  name="title"
                  value={props.data.title}
                  onChange={eventHandler}
                />
              </Form.Group>
              {/* COURSE DESCRIPTION*/}
              <Form.Group  className="row ">
                <Form.Control
                  as="textarea" 
                  rows={3}
                  className="form-input col text-center"
                  placeholder="Lesson Summary"
                  name="summary"
                  value={props.data.summary}
                  onChange={eventHandler}
                  
                />
              </Form.Group>
              <Form.Group className="row">
                <Form.Control
                  className="form-input col lg text-center"
                  type="date"
                  placeholder="Lesson Date"
                  name="date"
                  value={props.data.date}
                  onChange={eventHandler}
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
                    name="video"
                  value={props.data.video}
                  onChange={handleChange}
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
                    name="assignment"
                  value={props.data.assignment}
                  onChange={handleChangePdf}
                    />
               </Col>
               
              </Form.Group>
              <Container className="contain">
              <Button onClick={Proceed} className="primary-button col-5">
                Upload lesson
              </Button>
              </Container>
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
