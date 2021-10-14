import React, { useState, useEffect } from "react";

// import storage ref
import { storageRef } from "../../../firebase";

// material ui imports
import { DropzoneArea } from "material-ui-dropzone";

// boostrap impots
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  ProgressBar,
} from "react-bootstrap";

// import Custom css
// import "./signupprocess.css";
import {
  LessonButtons,
  AddLessonButtons,
} from "../dashboard/TutorDashboardElements";
import { NewReleasesOutlined } from "@material-ui/icons";
import CourseLessonBtnLists from "./CourseLessonBtnLists";

export default function UploadLessons(props) {
  const [view, setView] = useState(1);
  const [progress, setProgress] = useState(0);
  const [assignmentProgress, setAssignmentProgress] = useState(0);
  const [assignment, setAssignment] = useState([]);
  const [video, setVideo] = useState([]);
  const [displayData, setDisplayData] = useState(null);
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);

  const LoadLessonTab = (lessons) => {
    setDisplayData(lessons);
    setView(2);
  };
  const LoadCourseTab = () => {
    setView(1);
  };
  const eventHandler = (event) => {
    let val = event.target.value;
    let nam = event.target.name;

    props.updateData(nam, val);
    props.updateData("courseId", props.courseId);
  };

  const findFormErrors = () => {
    const newErrors = {};
    // name errors
    if (!props.data.title || props.data.title === "")
      newErrors.title = "cannot be blank!";
    else if (props.data.title.length > 100)
      newErrors.title = "Title is too long!";
    // Summary errors
    if (!props.data.summary || props.data.summary === "")
      newErrors.summary = "summary cannot be blank!";
    else if (props.data.summary.length > 300)
      newErrors.summary = "Summary is too long!";
    // food errors
    if (!props.data.date || props.data.date === "")
      newErrors.date = "select a date!";
    // rating errors

    if (!props.data.video || props.data.video === "")
      newErrors.video = "Add an Introductory Video!";

    return newErrors;
  };
  const handleChange = () => {
    // Uploading to firebase storage
    // and updating URLS array for storage in firestore

    const file = video[0];
    console.log(file);
    var d = new Date();
    var n = d.getTime();
    // references
    if (file) {
      const filename = n + file.name;

      const storeVideoRef = storageRef.child(`/lessonVideos/${filename}`);

      storeVideoRef.put(file).on(
        "state_changed",
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await storeVideoRef.getDownloadURL();

          let nam = "video";

          props.updateData(nam, url);
        }
      );
    }
  };

  const handleChangePdf = () => {
    const file = assignment[0];
    console.log(file);
    var d = new Date();
    var n = d.getTime();

    // references
    if (file) {
      const filename = n + file.name;
      const storeVideoRef = storageRef.child(`/lessonAssigments/${filename}`);

      storeVideoRef.put(file).on(
        "state_changed",
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setAssignmentProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await storeVideoRef.getDownloadURL();

          let nam = "assignment";

          props.updateData(nam, url);
        }
      );
    }
  };
  const Proceed = async (event) => {
    event.preventDefault();

    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      console.log("Error", newErrors);
      // We got errors!
      props.setError(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      // continue with other rendering

      await props.Submit();
      props.nextStep();
    }
  };
  return (
    <div fluid className="height-full">
      <Container className="height-half">
        <Row className="mt-4 mb-4">
          <Col md={3}>
            <CourseLessonBtnLists id={props.courseId} />
            <AddLessonButtons
              to={"/tutor-create-course/"}
              className="p-3 m-3 text-center"
            >
              + Add Lesson
            </AddLessonButtons>
          </Col>
          <Col md={8} className="mx-auto text-center">
            <Form noValidate validated={validated} onSubmit={Proceed} inline>
              {/* COURSE TITLE */}
              <Form.Group className="row">
                <Form.Control
                  className="form-input col lg text-center"
                  type="text"
                  placeholder="Lesson Title"
                  name="title"
                  value={props.data.title}
                  onChange={eventHandler}
                  isInvalid={!!props.error.title}
                />
                <Form.Control.Feedback type="invalid">
                  {props.error.title}
                </Form.Control.Feedback>
              </Form.Group>
              {/* COURSE DESCRIPTION*/}
              <Form.Group className="row ">
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="form-input col text-center"
                  placeholder="Lesson Summary"
                  name="summary"
                  value={props.data.summary}
                  onChange={eventHandler}
                  isInvalid={!!props.error.summary}
                />
                <Form.Control.Feedback type="invalid">
                  {props.error.summary}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="row">
                <Form.Control
                  className="form-input col lg text-center"
                  type="date"
                  placeholder="Lesson Date"
                  name="date"
                  value={props.data.date}
                  onChange={eventHandler}
                  isInvalid={!!props.error.date}
                />
                <Form.Control.Feedback type="invalid">
                  {props.error.date}
                </Form.Control.Feedback>
              </Form.Group>

              {/* INTRO VIDEO */}
              <Form.Group className="row mt-3">
                <Col>
                  {progress !== 0 && <ProgressBar now={progress} />}
                  <DropzoneArea
                    acceptedFiles={["video/*"]}
                    dropzoneText={"Upload Lesson Video"}
                    onChange={(files) => setVideo(files)}
                    // Icon={AttachFile}
                    //onAdd={(files) => handleChange(files)}
                    //onChange={(files) => setFiles(files)}
                    maxFileSize={500000000}
                    name="video"
                    value={props.data.video}
                  />
                  {props.error.video && (
                    <div className="alert-danger">{props.error.video} </div>
                  )}
                </Col>
                <Row>
                  <Col className="text-end">
                    {video.length !== 0 && (
                      <Button onClick={() => handleChange()}>
                        upload Video
                      </Button>
                    )}
                  </Col>
                </Row>
              </Form.Group>
              {/* Add ASSignment */}

              {/* <Form.Group className="row ">
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="form-input col text-center"
                  placeholder="Assignment"
                  name="assignment"
                  value={props.data.assignment || ""}
                  onChange={eventHandler}
                  required={false}
                />
                <Form.Control.Feedback type="invalid">
                  {props.error.assignment}
                </Form.Control.Feedback>
              </Form.Group> */}
              {/* <Form.Group  className="row mt-3">
 
                <Col>
                 {assignmentProgress !== 0 && <ProgressBar striped now={assignmentProgress} />}
                <DropzoneArea
                     acceptedFiles={['application/pdf']}
                     dropzoneText={"Add Assignment"}
                     // onChange={handleChangePdf}
                     onChange={(files) => setAssignment(files)}
 
                     // onChange={(files) => setAssignment(files)}
                     maxFileSize	={300000000}
                     name="assignment"
                   value={props.data.assignment}
                     />
                     {props.error.assignment && <div className="alert-danger">{props.error.assignment} </div>}
                </Col>    
                <Row>
                  <Col className="text-end">
                  
                    {assignment.length !==0 && <Button
                    onClick={() => handleChangePdf()}
                    >upload Assignment</Button>}
              
                  </Col>
                </Row>        
              </Form.Group> */}
              <Container className="contain">
                <Button type="submit" className="primary-button col-5">
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
