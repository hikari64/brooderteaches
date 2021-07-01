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
import { Container, Row, Col, Button, Form } from "react-bootstrap";

import { fbapp } from "../../firebase";

const CourseRegistration = ({ id }, props) => {
  let isCoursePage;
  let outline;

  const [courses, setCourses] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [price, setPrice] = useState();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userID, currentUser, updateEmail, updatePassword, updateProfile } = useAuth()
  
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


    const fetchCourses = async () => {
      setLoading(true);
      db.collection("courses")
        .where("id", "==", id)
        .get()
        .then((querySnapshot) => {
          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach((element) => {
            var data = element.data();
            setCourses((arr) => [...arr, data]);
            setPrice(data.price);
          });
        });
    };

    const fetchOutline = async () => {
      db.collection("lessons")
        .where("courseId", "==", id)
        .get()
        .then((querySnapshot) => {
          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach((element) => {
            var outline = element.data();
            setLessons((arr) => [...arr, outline]);
          });
          setLoading(false);
        });
    };

    fetchCourses();
    fetchOutline();
  }, [id]);

  // PAYSTACK INTEGRATION

  // SUCCESSFULLY PAID
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
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
    amount: 100*price,
    publicKey: "pk_live_2bbc47bbdc506caec19278c6f7384d1eb25ccf40",
  };

  const componentProps = {
    ...config,
    text: "Pay Ghs"+price,
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: () => handlePaystackCloseAction(),
  };

  // END OF PAYSTACK INTEGRATION
outline = lessons.map((lesson, index) => (
  <Outline key={index}>{lesson.title}</Outline>
))

isCoursePage = courses.map((data, index) => (
    <RegContainer key={index}>
      <CourseOutlineStyle>
        <OutlineVid>
          <PlayerStyle>
            <ReactPlayer
              url={data.preview}
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
          {outline}
          </OutlineList>
          <ExtraInfo>
            Project work and assignments will be required. Group presentations
            will be conducted during physical meetings once in a month.
          </ExtraInfo>
        </OutlineContent>
      </CourseOutlineStyle>
    </RegContainer>
  ));

  return (
    <>
      {isCoursePage}
      <Container className="height-half">
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
              <Col className="text-center">Total Cost is GHS {price}</Col>
              <Col className="text-center">
                <PaystackButton
                  className="paystack-button"
                  {...componentProps}
                />
              </Col>
            {/* </Form> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CourseRegistration;
