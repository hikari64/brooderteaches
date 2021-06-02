import React from 'react';
import { RegContainer, CourseOutlineStyle, OutlineContent, OutlineVid, OutlineList, Outline, Heading2, PlayerStyle, Videocontainer, ExtraInfo } from '../CourseSections/CourseElements';
import { courses } from '../AllCourses/CourseData';
import ReactPlayer from "react-player"
import { Container, Row, Col, Button, Form } from "react-bootstrap";


const CourseRegistration = ({id}, props) => {
    let isCoursePage;

    isCoursePage = courses.filter(
        (e) => e.id == id).map((courses, index) => 

<RegContainer>
    <CourseOutlineStyle>
        <OutlineVid>
            <PlayerStyle >
                <ReactPlayer url={courses.preview_link}
                    className={Videocontainer}
                    playing
                    width="100%"
                    height="100%"
                    controls={false}
                />
            </PlayerStyle>
        </OutlineVid>
        <OutlineContent>
            <Heading2 to='' >Course Outline</Heading2>
            <OutlineList>
                <Outline>
                Dummy List 1
                </Outline>
                <Outline>
                Dummy List 2
                </Outline>
                <Outline>
                Dummy List 3
                </Outline>
                <Outline>
                Dummy List 4
                </Outline>
            </OutlineList>
            <ExtraInfo>
            Project work and assignments will be required. 
            Group presentations will be conducted during physical meetings once in a month.
            </ExtraInfo>
        </OutlineContent>   
    </CourseOutlineStyle>
</RegContainer>

);
    
    return (
        <>
        {isCoursePage}
        <Container className="height-half">
        <Row className="mt-4 mb-4">
          <Col md={8} className="mx-auto">
            <Heading2 style={{textAlign: 'center'}} to='' >Register For this Course</Heading2><br />

            <Form inline >
              {/* FULL NAME */}
              <Form.Group className="row">
              <Form.Label  className="col-3 align-bottom text-end text-end" >First Name</Form.Label>
                <Form.Control
                  className="form-input col lg"
                  type="text"
                  placeholder="Enter First Name"
                />
              </Form.Group>
              <Form.Group className="row">
              <Form.Label  className="col-3 align-bottom text-end text-end" >Last Name</Form.Label>
                <Form.Control
                  className="form-input col lg"
                  type="text"
                  placeholder="Enter Last Name"
                />
              </Form.Group>
              <Form.Group className="row">
              <Form.Label  className="col-3 align-bottom text-end text-end" >Other Names</Form.Label>
                <Form.Control
                  className="form-input col lg"
                  type="text"
                  placeholder="Enter Other Names"
                />
              </Form.Group>
              {/* DATE OF BIRTH */}
              <Form.Group  className="row">
                <Form.Label  className="col-3 align-bottom text-end text-end">Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  className="form-input col"
                  placeholder="Date of Birth"
                />
              </Form.Group>
              {/* ADDRESS LOCATION */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end">Residential Address</Form.Label>

                <Form.Control
                  className="form-input col"
                  type="text"
                  placeholder="Residential Address"
                />
              </Form.Group>
              {/* Contact */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end">Phone Number</Form.Label>

                <Form.Control
                  className="form-input col"
                  type="number"
                  placeholder="Phone Number"
                />
              </Form.Group>
              {/* email */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end">Email Address</Form.Label>
                
                <Form.Control
                  className="form-input col"
                  type="email"
                  placeholder="Email Address"
                />
              </Form.Group>
              <Col className="text-center">
                Total Cost is {courses.fee}
              </Col>
              <Col className="text-center">
                <Button onClick={props.nextStep} className="primary-button text-center">
                Proceed to payment
              </Button>
              </Col>
              
            </Form>
          </Col>
        </Row>
      </Container>
    </>
    )
}

export default CourseRegistration
