import React, { useState, useEffect } from "react";


// material ui imports
import { DropzoneArea } from "material-ui-dropzone";

// boostrap impots
import { Container, Row, Col, Button, Form } from "react-bootstrap";

// import Custom css
// import "./signupprocess.css";

export default function CourseDetails(props) {
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
    <div fluid className="">

      <Container className="">
        <Row className="mt-4 mb-4">
          <Col md={8} className="mx-auto">
            <Form inline >
              {/* COURSE TITLE */}
              <Form.Group className="row">
              <Form.Label  className="col-3 align-bottom text-end my-auto" >Course Title</Form.Label>
                <Form.Control
                  className="form-input col lg"
                  type="text"
                  placeholder=""
                />
              </Form.Group>
              {/* COURSE DESCRIPTION*/}
              <Form.Group  className="row">
                <Form.Label  className="col-3 align-bottom text-end text-end">Course Description</Form.Label>
                <Form.Control
                  as="textarea" 
                  rows={6}
                  className="form-input col"
                  
                />
              </Form.Group>
              {/* INTRO VIDEO */}
              <Form.Group  className="row">
              <Form.Label  className="col-3 align-bottom text-end">Introductory Video</Form.Label>

               <Col>
               <DropzoneArea
                    acceptedFiles={['video/*']}
                    dropzoneText={"Drag and drop an Introductory Video here or click"}
                    onChange={(files) => console.log('Files:', files)}
                    maxFileSize	={300000000}
                    />
               </Col>
              </Form.Group>
              
              <Col className="text-center">
                <Button onClick={props.nextStep} className="primary-button text-center">
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
