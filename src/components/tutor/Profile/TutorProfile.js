import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

// navbar import
import Navbar from "../../Navbar/TutorNav";
import Footer from "../../Footer";

// boostrap imports
import { Container, Row, Col, Button, Form, ProgressBar } from "react-bootstrap";
import Spinner from "../../Spinner/Spinner"
// import storage ref
import { storageRef,firestore } from "../../../firebase";

// material ui imports
import { DropzoneArea } from "material-ui-dropzone";

//import ELement for this page

//import Courses Sections Component from courses

import TutorDashboardHeader from "../dashboard/TutorDashboardHeader";
import useFetchTutorsById from "../hooks/useFetchTutorById";
import { useAuth } from "../../../contexts/TutorContext";
import UpdateTutor from "../hooks/useUpdateTutor";

export default function TutorProfile(props) {
  const { userID } = useAuth ()
  const [progressImg, setProgressImg] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tutorData, setTutorData] = useState({
  });

  const UpdateData = (item, value) => {

    setTutorData((tutorData) => ({ ...tutorData, [item]: value }));
  };
  const eventHandler = (event) => {
    let val = event.target.value;
    let nam = event.target.name;

    UpdateData(nam, val);
  };
  const handleChangefil = (File) => {
    // Uploading to firebase storage
     // and updating URLS array for storage in firestore
 
     const file = File[0];
     let   nam = "photoFile"
     UpdateData(nam,file);
  //    console.log(file)
  //    if(file){
  //    var d = new Date();
  //    var n = d.getTime();
  //    const filename = n+file.name;
  //    // references
    
     
  //    const storeVideoRef = storageRef.child(`/CoverPictures/${filename}`);
     
  //    storeVideoRef.put(file).on('state_changed', (snap) => {
  //      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
  //      setProgressImg(percentage);
  //    }, (err) => {
  //      setError(err);
  //    }, async () => {
  //      const url = await storeVideoRef.getDownloadURL();
       
  //    let   nam = "photoUrl"
     
   
  //         UpdateData(nam,url); 
 
  //    });
  //  }
 
   };
  const handleUploadfil = (File) => {
    // Uploading to firebase storage
     // and updating URLS array for storage in firestore
 
     const file = tutorData.photoFile;
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
       
     let   nam = "photoUrl"
     
   
          UpdateData(nam,url); 
          UpdateData("photoFile",""); 
 
     });
   }
 
   };

   const Proceed = async()=>{
    //  alert(tutorData)

    UpdateTutor(tutorData,userID)
   }
//const [Id, setId] = useState('1267283472364');
useEffect(() => {
  let currenttutors='';
  async function Load() {
    const courses = firestore.collection("tutors").doc(userID);
    
    courses.get().then((doc) => {
      if (doc.exists) {
        currenttutors=doc.data();
        setTutorData(currenttutors)
        setLoading(false)
          console.log("lesson data: fetched", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          return;
      }
  })

  }


    Load()



}, []);

  return (
    <>
    
    
    <div fluid className="height-full">
      <TutorDashboardHeader tutors={tutorData} view={3}/>
      {loading && <Spinner/>}
      {
      !loading &&
      
      <Container className="height-half">
        
        <Row className="mt-4 mb-4">
          <Col md={8} className="mx-auto">
          <Form inline >
              {/* COURSE TITLE */}
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >First Name</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    value={tutorData.firstName}
                    name="firstName"
                    onChange={eventHandler}
                    placeholder=""
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Last Name</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                    value={tutorData.lastName}
                    name="lastName"
                    onChange={(event)=>eventHandler(event)}
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Other Names</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                    value={tutorData.otherNames}
                    onChange={(event)=>eventHandler(event)}
                    name="otherNames"

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Date of Birth</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="date"
                    placeholder=""
                    value={tutorData.dateOfBirth}
                    onChange={(event)=>eventHandler(event)}
                    name="dateOfBirth"

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Address/Location</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                    value={tutorData.address}
                    onChange={(event)=>eventHandler(event)}
                    name="address"
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Contact</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                    value={tutorData.contact}
                    onChange={(event)=>eventHandler(event)}
                    name="contact"

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Email</Form.Label>
                  <Form.Control
                  disabled
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                    value={tutorData.email}

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Expertise</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    placeholder=""
                    onChange={(event)=>eventHandler(event)}
                    value={tutorData.expertise}
                    name="expertise"

                  />
              </Form.Group>
              <Form.Group className="row m-2" controlId="validationCustom07">
                <Form.Label className="col-3 align-bottom my-auto text-end">
                  Profile Photo
                </Form.Label>

                <Col>
                {progressImg !== 0 && <ProgressBar striped variant="success" now={progressImg} />}
                
                  <DropzoneArea

                    acceptedFiles={["image/*"]}
                    dropzoneText={"Upload a Profile picture"}
                    onChange={(files) => handleChangefil(files)}
                    maxFileSize={300000000}
                    filesLimit={1}
                  />
            
                </Col>
                <Col>
                <img  
                    width="150"
                    height="150"
                    src={tutorData.photoFile ? tutorData.photoFile : tutorData.photoUrl} 
                    alt="Profile" 
                    className="rounded" />
                  {<Button
                  onClick={() => handleUploadfil()}
                  >upload photo</Button>}
            
                </Col>
              </Form.Group>
              <Form.Group className="row m-2" controlId="validationCustom07">
                <Form.Label className="col-3 align-bottom my-auto text-end">
                  ID Photo
                </Form.Label>

                <Col>
                {progressImg !== 0 && <ProgressBar striped variant="success" now={progressImg} />}
                
                  <DropzoneArea

                    acceptedFiles={["image/*"]}
                    dropzoneText={"Add a picture of your ID"}
                    onChange={(files) => handleChangefil(files)}
                    maxFileSize={300000000}
                    filesLimit={1}
                  />
            
                </Col>
                <Col>
                <img  
                    width="150"
                    height="150"
                    src={tutorData.verificationID ? tutorData.verificationID : ''} 
                    alt="Profile" 
                    className="rounded" />
                  {<Button>upload ID</Button>}
            
                </Col>
              </Form.Group>
              <Col className="text-center">
                <Button onClick={Proceed} className="primary-button text-center">
                Update
              </Button>
              </Col>
              
            </Form>
         
            </Col>
        </Row>
      </Container> } 
      <Footer />
    </div>
    
     </>
     );
}
