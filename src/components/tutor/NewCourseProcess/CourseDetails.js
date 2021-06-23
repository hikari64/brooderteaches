import React, { useState } from "react";

// import storage ref
import { storageRef } from "../../../firebase";

// material ui imports
import { DropzoneArea } from "material-ui-dropzone";

// boostrap impots
import { Container, Row, Col, Button, Form, InputGroup,ProgressBar } from "react-bootstrap";

// import Custom css
// import "./signupprocess.css";

export default function CourseDetails(props) {
  
  // files to upload
  const [files, setFiles] = useState(null);
  const [validated, setValidated] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressImg, setProgressImg] = useState(0);
  const [error, setError] = useState(null);


  const eventHandler = (event) => {
    let val = event.target.value;
    let nam = event.target.name;

    props.updateData(nam, val);
  };
 
  const findFormErrors = () => {
    const newErrors = {}
    // name errors
    if ( !props.data.title || props.data.title === '' ) newErrors.title = 'cannot be blank!'
    else if ( props.data.title.length > 100 ) newErrors.name = 'Title is too long!'
    // food errors
    if ( !props.data.duration || props.data.duration === '' ) newErrors.duration = 'select a duration!'
    // rating errors
    if ( !props.data.period || props.data.period === '' ) newErrors.period = 'select a period!'
    if ( !props.data.price || props.data.price === '' ) newErrors.price = 'choose a price!'
    if ( !props.data.preview || props.data.preview === '' ) newErrors.preview = 'Add an Introductory Video!'
    // rating errors
    if ( !props.data.level  || props.data.level  > 3 || props.data.level  < 1 ) newErrors.level = 'must assign a rating between 1 and 3!'
    // comment errors
    if ( !props.data.about || !props.data.about) newErrors.about = 'cannot be blank!'
    else if ( props.data.about.length > 300 ) newErrors.about = 'about is too long!'

    return newErrors;
  }

  
  const handleChange = (File) => {
    // Uploading to firebase storage
    // and updating URLS array for storage in firestore

    const file = File[0];
    console.log(file)
    if(file){
    var d = new Date();
    var n = d.getTime();
    const filename = n+file.name;
    // references
   
    
    const storeVideoRef = storageRef.child(`/introductoryVideos/${filename}`);
    
    storeVideoRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storeVideoRef.getDownloadURL();
      
    let   nam = "preview"
    
  
         props.updateData(nam,url); 

    });
  }
    

  }

 const handleChangefil = (File) => {
   // Uploading to firebase storage
    // and updating URLS array for storage in firestore

    const file = File[0];
    console.log(file)
    if(file){
    var d = new Date();
    var n = d.getTime();
    const filename = n+file.name;
    // references
   
    
    const storeVideoRef = storageRef.child(`/CoverPictures/${filename}`);
    
    storeVideoRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgressImg(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storeVideoRef.getDownloadURL();
      
    let   nam = "previewImg"
    
  
         props.updateData(nam,url); 

    });
  }

  };
  
  const Proceed = (event) => {
    event.preventDefault();
  //  const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  const newErrors = findFormErrors()
    // Conditional logic:
    if ( Object.keys(newErrors).length > 0 ) {
      // We got errors!
      props.setError(newErrors)
    } else {
      // No errors! Put any logic here for the form submission!
      alert('Thank you for your feedback!')
        props.Submit();
        // continue with other rendering
        props.nextStep();
    }
       
  };

  return (
    <div fluid className="">
      <Container className="">
        <Row className="mt-4 mb-4">
          <Col md={8} className="mx-auto">
            <Form noValidate validated={validated} onSubmit={Proceed} inline>

              {/* COURSE TITLE */}
              <Form.Group className="row" controlId="validationCustom01">
                <Form.Label className="col-3 align-bottom text-end mx-auto">
                  Course Title
                </Form.Label>
                <InputGroup className="form-input col">

                <Form.Control
                  className=""
                  type="text"
                  name="title"
                  required ={true}
                  value={props.data.title}
                  onChange={eventHandler}
                  isInvalid={ !!props.error.title }
                />
                  <Form.Control.Feedback type="invalid">
              {props.error.title}
            </Form.Control.Feedback>
            </InputGroup>
              </Form.Group>
              {/* COURSE DESCRIPTION*/}
              <Form.Group className="row" controlId="validationCustom02">
                <Form.Label className="col-3 align-bottom mx-auto text-end">
                  Course Description
                </Form.Label>
                <InputGroup className="form-input col">

                <Form.Control
                  as="textarea"
                  rows={6}
                  required ={true}
                  className=""
                  name="about"
                  value={props.data.about}
                  onChange={eventHandler}
                  isInvalid={ !!props.error.about }
                />
                  <Form.Control.Feedback type="invalid">
                    {props.error.about}
                  </Form.Control.Feedback>
                  </InputGroup>
              </Form.Group>
              {/* COURSE Price */}
              <Form.Group className="row" controlId="validationCustom03">
                <Form.Label className="col-3 align-bottom text-end my-auto">
                  Course Price{" "}
                </Form.Label>
                <InputGroup className="form-input col" hasValidation>
                  <InputGroup.Prepend className="col-3">
                    <InputGroup.Text>GHC</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="col p-0 m-0"
                    type="number"
                    name="price"
                    required ={true}
                    value={props.data.price}
                    onChange={eventHandler}
                  isInvalid={ !!props.error.price }

                  />
                    <Form.Control.Feedback type="invalid">
                    { props.error.price }.
            </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              {/* COURSE Level*/}
              <Form.Group className="row" controlId="validationCustom04">
                <Form.Label className="col-3 align-bottom my-auto text-end">
                  Course Level
                </Form.Label>
                <InputGroup className="form-input col" >
                
                <Form.Control
                  as="select"
                  className=" col"
                  name="level"
                  value={props.data.level}
                  onChange={eventHandler}
                  isInvalid={ !!props.error.level }
                  
                >
                  <option value=''>Select Level</option>
                  <option value={1}>Beginner</option>
                  <option value={2}>Intermediate</option>
                  <option value={3}>Advanced</option>
                </Form.Control>
                </InputGroup>
              </Form.Group>
              {/* COURSE Duration*/}
              <Form.Group className="row" controlId="validationCustom05">
                <Form.Label className="col-3 align-bottom my-auto text-end">
                  Course Duration
                </Form.Label>
                <InputGroup className="form-input col" >

                <Form.Control
                  as="select"
                  className="col"
                  required ={true}
                  name="period"
                  value={props.data.period}
                  onChange={eventHandler}
                  isInvalid={ !!props.error.period }

                >
                  <option value=''>Select duration</option>
                  <option value={1}>Weeks</option>
                  <option value={2}>Months</option>
                  
                </Form.Control>
                </InputGroup>
              </Form.Group>
               {/* COURSE Price */} 
               <Form.Group className="row" controlId="validationCustom06">
                <Form.Label className="col-3 align-bottom text-end my-auto">
                  Number of week(s)/month(s){" "}
                </Form.Label>
                <InputGroup className="form-input col">
                  <InputGroup.Prepend className="col-3">
                    <InputGroup.Text>{!props.data.period && 'Period'}
                    {props.data.period ==1 && "Week(s)"}
                    {props.data.period ==2 && "Month(s)"}
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="col p-0 m-0"
                    type="number"
                    name="duration"
                    required ={true}
                    value={props.data.duration}
                    onChange={eventHandler}
                    isInvalid={ !!props.error.duration }
                  />
                    <Form.Control.Feedback type="invalid">
              {props.error.duration}
            </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              {/* INTRO VIDEO */}
              <Form.Group className="row m-2" controlId="validationCustom07">
                <Form.Label className="col-3 align-bottom my-auto text-end">
                  Introductory Video
                </Form.Label>

                <Col>
                {progress !== 0 && <ProgressBar striped now={progress} />}
                  <DropzoneArea

                    acceptedFiles={["video/*"]}
                    dropzoneText={"Upload an introductory video"}
                    onChange={(files) => handleChange(files)}
                    maxFileSize={300000000}
                    filesLimit={1}
                  />
              {props.error.preview && <div className="alert-danger">{props.error.preview} </div>}
            
                </Col>
              </Form.Group>
              {/* INTRO VIDEO */}
              <Form.Group className="row m-2" controlId="validationCustom07">
                <Form.Label className="col-3 align-bottom my-auto text-end">
                  Introductory Video
                </Form.Label>

                <Col>
                {progressImg !== 0 && <ProgressBar striped variant="success" now={progressImg} />}
                  <DropzoneArea

                    acceptedFiles={["image/*"]}
                    dropzoneText={"Upload a cover picture"}
                    onChange={(files) => handleChangefil(files)}
                    maxFileSize={300000000}
                    filesLimit={1}
                    cancelButtonText={"cancel"}
                    submitButtonText={"submit"}
                  />
              {props.error.previewImg && <div className="alert-danger">{props.error.previewImg} </div>}
            
                </Col>
              </Form.Group>

              <Col className="text-center">
                <Button
                 type="submit"
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
