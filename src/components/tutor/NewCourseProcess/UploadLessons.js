import React, { useState, useEffect } from "react";

// import storage ref
import { storageRef } from "../../../firebase";

// material ui imports
import { DropzoneArea } from "material-ui-dropzone";

// boostrap impots
import { Container, Row, Col, Button, Form, ProgressBar ,} from "react-bootstrap";

// import Custom css
// import "./signupprocess.css";
import {
  LessonButtons,
  AddLessonButtons
} from "../dashboard/TutorDashboardElements";
import { NewReleasesOutlined } from "@material-ui/icons";
import CourseLessonBtnLists from "./CourseLessonBtnLists";


export default function UploadLessons(props) {
const [view,setView] = useState(1)
const [progress, setProgress] = useState(0);
const [assignmentProgress, setAssignmentProgress] = useState(0);
const [displayData,setDisplayData] = useState(null)
const [error, setError] = useState(null);

  const LoadLessonTab=(lessons)=>{
  
    setDisplayData(lessons);
    setView(2);
  
  }
  const LoadCourseTab=()=>{
    setView(1); 
  }
  const eventHandler =(event)=>{
    let val = event.target.value
    let nam = event.target.name

    props.updateData(nam,val);
    

  }
  const handleChange = (File) => {
    // Uploading to firebase storage
    // and updating URLS array for storage in firestore

    const file = File[0];
    console.log(file)
    var d = new Date();
    var n = d.getTime();
    // references
   if(file){
   const filename = n+file.name;

    const storeVideoRef = storageRef.child(`/lessonVideos/${filename}`);
    
    storeVideoRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storeVideoRef.getDownloadURL();
      
    let   nam = "video"
    
  
         props.updateData(nam,url); 

    });
}
    

  }
  
  const handleChangePdf=(File)=>{
    const file = File[0];
    console.log(file)
    var d = new Date();
    var n = d.getTime();
   
    // references
   if(file){ 
      const filename = n+file.name;
    const storeVideoRef = storageRef.child(`/lessonAssigments/${filename}`);
    
      storeVideoRef.put(file).on('state_changed', (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setAssignmentProgress(percentage);
      }, (err) => {
        setError(err);
      }, async () => {
        const url = await storeVideoRef.getDownloadURL();
        
      let   nam = "assignment"
      
          props.updateData(nam,url); 

      });
    }
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
         <CourseLessonBtnLists id={props.courseId} />
            <AddLessonButtons to={"/tutor-create-course/"} className="p-3 m-3 text-center"> 
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
                 {progress !== 0 && <ProgressBar now={progress} />}
                <DropzoneArea
                     acceptedFiles={['video/*']}
                     dropzoneText={"Upload Lesson Video"}
                      onChange={(files) => handleChange(files)}
                    // Icon={AttachFile}
                     //onAdd={(files) => handleChange(files)}
                     //onChange={(files) => setFiles(files)}
                     maxFileSize	={300000000}
                     name="video"
                     value={props.data.video}
                     />
                </Col>
           
               </Form.Group>
               {/* Add ASSignment */}
               <Form.Group  className="row mt-3">
 
                <Col>
                 {assignmentProgress !== 0 && <ProgressBar now={assignmentProgress} />}
                <DropzoneArea
                     acceptedFiles={['application/pdf']}
                     dropzoneText={"Add Assignment"}
                     // onChange={handleChangePdf}
                     onChange={(files) => handleChangePdf(files)}
 
                     // onChange={(files) => setAssignment(files)}
                     maxFileSize	={300000000}
                     name="assignment"
                   value={props.data.assignment}
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
