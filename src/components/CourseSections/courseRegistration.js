import React, { useState, useEffect } from "react";

//PAYSTACK BUTTON IMPORT
import { PaystackButton } from "react-paystack";
import {useAuth} from '../../contexts/AuthContext'


// course elements imports
import {
  RegContainer,
  CourseOutlineStyle,
  OutlineContent,
  OutlineVid,
  OutlineList,
  Outline,
  Heading2,
  PlayerStyle,
  Videocontainer,
  ExtraInfo,
} from "../CourseSections/CourseElements";

// courses
import { courses } from "../AllCourses/CourseData";

// react player
import ReactPlayer from "react-player";

// react bootstrap imports
import { Container, Row, Col, Button, Form, Spinner } from "react-bootstrap";

import { fbapp } from "../../firebase";
import RegisterForCourse from "./hooks/useRegisterForCourse";

const CourseRegistration = ({ id , courses,lessons}, props) => {
  let isCoursePage;
  let outline;

  // const [courses, setCourses] = useState([]);
  // const [lessons, setLessons] = useState([]);
  const { userID, currentUser, updateEmail, updatePassword, updateProfile } = useAuth()
  const [price, setPrice] = useState(courses.price);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  // FIRESTORE CALLS

  useEffect(() => {
    const db = fbapp.firestore();
    
    var usersRef =  db.collection("students").doc(userID);

    usersRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        setUser(doc.data())
        console.log(user.lastName)
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });


  }, [id]);

  // PAYSTACK INTEGRATION

  // SUCCESSFULLY PAID
  const handlePaystackSuccessAction = async(reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    //add to student id to courses and increase number of students by 1 , increase revenue by amount payed
    // increase number of courses by one for students
    // add reciepts / course payment / course id and students id / amount
    // add co
    //(data,reference,userID,courseId)
    setLoading(true)

    const {error,success} = await RegisterForCourse(courses,reference,userID,id);
    setError(error);
    setSuccess(success);
    setLoading(false)
    console.log(reference);

  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const config = {
    reference: new Date().getTime(),
    currency: "GHS",
    email: "user@example.com",
    amount: 100*courses.price,
    publicKey: "pk_live_2bbc47bbdc506caec19278c6f7384d1eb25ccf40",
  };

  const componentProps = {
    ...config,
    text: "Pay Ghs"+courses.price,
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: () => handlePaystackCloseAction(),
  };

  // END OF PAYSTACK INTEGRATION
outline = lessons.map((lesson, index) => (
  <Outline key={index}>{lesson.title}</Outline>
))

isCoursePage = 
    <RegContainer>
      <CourseOutlineStyle>
        <OutlineVid>
          <PlayerStyle>
            <ReactPlayer
              url={courses.preview}
              className={Videocontainer}
              playing
              width="100%"
              height="100%"
              controls={false}
            />
          </PlayerStyle>
        </OutlineVid>
        <OutlineContent>
          <Heading2 to="">Course Outline</Heading2>
          <OutlineList>
          {lessons && outline}
          </OutlineList>
          {/* <ExtraInfo>
            Project work and assignments will be required. Group presentations
            will be conducted during physical meetings once in a month.
          </ExtraInfo> */}
        </OutlineContent>
      </CourseOutlineStyle>
    </RegContainer>
  ;

  const registerGuest =
    <Row className="mt-4 mb-4">
          <Col md={8} className="mx-auto">
            <Heading2 style={{ textAlign: "center" }} to="">
              Register For this Course
            </Heading2>
            <br />

            {/* <Form onSubmit={(e)=>preventDefault(e)} inline> */}
              {/* FULL NAME */}
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end text-end">
                  First Name
                </Form.Label>
                <Form.Control
                  className="form-input col lg"
                  type="text"
                  placeholder="Enter First Name"
                  defaultValue={user.firstName}
                />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end text-end">
                  Last Name
                </Form.Label>
                <Form.Control
                  className="form-input col lg"
                  type="text"
                  defaultValue={user.lastName}
                  placeholder="Enter Last Name"
                />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end text-end">
                  Other Names
                </Form.Label>
                <Form.Control
                  className="form-input col lg"
                  type="text"
                  defaultValue={user.otherNames}
                  placeholder="Enter Other Names"
                />
              </Form.Group>
              {/* DATE OF BIRTH */}
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end text-end">
                  Date of Birth
                </Form.Label>
                <Form.Control
                  type="date"
                  className="form-input col"
                  defaultValue={user.dob}
                  placeholder="Date of Birth"
                />
              </Form.Group>
              {/* ADDRESS LOCATION */}
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end">
                  Residential Address
                </Form.Label>

                <Form.Control
                  className="form-input col"
                  type="text"
                  defaultValue={user.location}
                  placeholder="Residential Address"
                />
              </Form.Group>
              {/* Contact */}
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end">
                  Phone Number
                </Form.Label>

                <Form.Control
                  className="form-input col"
                  type="number"
                  defaultValue={user.contact}
                  placeholder="Phone Number"
                />
              </Form.Group>
              {/* email */}
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end">
                  Email Address
                </Form.Label>

                <Form.Control
                  className="form-input col"
                  type="email"
                  defaultValue={user.email}
                  placeholder="Email Address"
                />
              </Form.Group>
              <Col className="text-center">Total Cost is GHS {courses.price}</Col>
              <Col className="text-center">
                <PaystackButton
                  className="paystack-button"
                  {...componentProps}
                />
              </Col>
            {/* </Form> */}
          </Col>
        </Row>
      
  const registerUser =
    <Row className="mt-4 mb-4">
          <Col md={8} className="mx-auto">
            <Heading2 style={{ textAlign: "center" }} to="">
              Register For this Course
            </Heading2>
            <br />

            {/* <Form onSubmit={(e)=>preventDefault(e)} inline> */}
              {/* FULL NAME */}
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end text-end">
                  First Name
                </Form.Label>
                <Form.Control
                  className="form-input col lg"
                  type="text"
                  placeholder="Enter First Name"
                  defaultValue={user.firstName}
                />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end text-end">
                  Last Name
                </Form.Label>
                <Form.Control
                  className="form-input col lg"
                  type="text"
                  defaultValue={user.lastName}
                  placeholder="Enter Last Name"
                />
              </Form.Group>
              {/* email */}
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end">
                  Email Address
                </Form.Label>

                <Form.Control
                  className="form-input col"
                  type="email"
                  defaultValue={user.email}
                  placeholder="Email Address"
                />
              </Form.Group>
              <Col className="text-center">Total Cost is GHS {courses.price}</Col>
              <Col className="text-center">
                <PaystackButton
                  className="paystack-button"
                  {...componentProps}
                />
              </Col>
            {/* </Form> */}
          </Col>
        </Row>
      
  return (
    <>
      {isCoursePage}
      <Container className="height-half">
        {loading && <Spinner variant="dark" animation="border"/>}

        {currentUser ?
      (courses && registerUser) :
      (courses && registerGuest)}
      </Container>
    </>
  );
};

export default CourseRegistration;
