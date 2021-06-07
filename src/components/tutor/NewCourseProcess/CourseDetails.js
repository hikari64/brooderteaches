import React, { useState } from "react";

// import storage ref
import { storageRef } from "../../../firebase";

// material ui imports
import { DropzoneArea } from "material-ui-dropzone";

// boostrap impots
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

// import Custom css
// import "./signupprocess.css";

export default function CourseDetails(props) {
  const eventHandler = (event) => {
    let val = event.target.value;
    let nam = event.target.name;

    props.updateData(nam, val);
  };
  const handleChange = (File) => {
    let val = File[0];
    let nam = "preview";

    props.updateData(nam, val);
  };

  // files to upload
  const [files, setFiles] = useState(null);

  console.log("files", files);

  const Proceed = async (e) => {
    // Uploading to firebase storage
    // and updating URLS array for storage in firestore
    const file = files[0];
    const fileRef = storageRef.child(`/introductoryVideos/${file.name}`);

    // Upload new file
    await fileRef.put(file);
    await fileRef.getDownloadURL().then((getURL) => {
      const data = {
        url: getURL,
        fileName: file.name,
      };
      props.updateData(data.url, data.fileName);
      setFiles(null);
    });

    // continue with other rendering
    props.nextStep();
    props.Submit();
  };

  return (
    <div fluid className="">
      <Container className="">
        <Row className="mt-4 mb-4">
          <Col md={8} className="mx-auto">
            <Form inline>
              {/* COURSE TITLE */}
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end my-auto">
                  Course Title
                </Form.Label>
                <Form.Control
                  className="form-input col lg"
                  type="text"
                  name="title"
                  value={props.data.title}
                  onChange={eventHandler}
                />
              </Form.Group>
              {/* COURSE DESCRIPTION*/}
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end text-end">
                  Course Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  className="form-input col"
                  name="about"
                  value={props.data.about}
                  onChange={eventHandler}
                />
              </Form.Group>
              {/* COURSE Price */}
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end my-auto">
                  Course Price{" "}
                </Form.Label>
                <InputGroup className="form-input col">
                  <InputGroup.Prepend className="col-3">
                    <InputGroup.Text>GHC</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="col p-0 m-0"
                    type="number"
                    name="price"
                    value={props.data.price}
                    onChange={eventHandler}
                  />
                </InputGroup>
              </Form.Group>
              {/* COURSE Level*/}
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end text-end">
                  Course Level
                </Form.Label>
                <Form.Control
                  as="select"
                  className="form-input col"
                  name="level"
                  value={props.data.level}
                  onChange={eventHandler}
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </Form.Control>
              </Form.Group>
              {/* INTRO VIDEO */}
              <Form.Group className="row">
                <Form.Label className="col-3 align-bottom text-end">
                  Introductory Video
                </Form.Label>

                <Col>
                  <DropzoneArea
                    acceptedFiles={["video/*"]}
                    showPreviews={true}
                    dropzoneText={"Upload an introductory video"}
                    onChange={(files) => setFiles(files)}
                    maxFileSize={300000000}
                    filesLimit={1}
                  />
                </Col>
              </Form.Group>

              <Col className="text-center">
                <Button
                  onClick={Proceed}
                  className="primary-button text-center"
                >
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
