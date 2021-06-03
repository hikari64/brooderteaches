import React, {useRef, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'
import {storage} from '../../firebase'
import StudentDashboardHeader from '../PageHeader/StudentDashboardHeader'
import Footer from '../Footer/index'
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import firestore from '../../firebase';

const UpdateProfile = ({ref}) => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const displayNameRef = useRef()
    const photoRef = useRef()
    const locationRef = useRef()
    const firstNameRef= useRef()
    const lastNameRef = useRef()
    const otherNamesRef = useRef()
    const dobRef = useRef() 
    const contactRef = useRef()
    const { currentUser, updateEmail, updatePassword, updateProfile } = useAuth()
    const [error, setError ] = useState('')
    const [loading, setLoading ] = useState(false)
    const history = useHistory();
  const db = firestore.firestore();


    const allInputs = {photoURL: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }

    // var photoRef = storageRef.child('images/mountains.jpg');
    // const [state, setState] = useState({
    //         email: "",
    //         firstName: "",
    //         lastName: "",
    //         location: "",
    //         otherNames: "",
    //         password: "",
    //         dob: "",
    //         contact: "",
    //         username: "",
    //   });

    // const addUser = (e) => {
    //     e.preventDefault();
    //     console.log("got here")
    //     const db = firestore.firestore();
    //     db.settings({
    //         timestampsInSnapshots: true
    //     });
    //     db.collection('students').add({
    //         fullname: state.fullname,
    //         email: state.email,
    //         lastName: state.lastName,
    //         location: state.location,
    //         otherNames: state.otherNames,
    //         password: state.password,
    //         dob: state.dob,
    //         contact: state.contact,
    //         username: state.username,
    //     }).then((docRef) => {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch((error) => {
    //         console.error("Error adding document: ", error);
    //     });
    //     setState({
    //         email: "",
    //         firstName: "",
    //         lastName: "",
    //         location: "",
    //         otherNames: "",
    //         password: "",
    //         dob: "",
    //         contact: "",
    //         username: "",
    //       });
    //     };

    // const updateInput = (evt) => {  
    //     setState( {
    //     ...state,
    //     [evt.target.name] : evt.target.value
    // });
    // }


    function handleSubmit(e) {
        setLoading(true)
        setError('')
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        // if (emailRef.current.value !== currentUser.email) {
        //     promises.push(updateEmail(emailRef.current.value))
        // }

        if(imageAsFile === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
          }

        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        //initiates the firebase side uploading 
        uploadTask.on('state_changed', 
        (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused': // or 'paused'
                console.log('Upload is paused');
                break;
              case 'running': // or 'running'
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User canceled the upload
                break;
        
              // ...
        
              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
          }, 
          () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                // promises.push(updateProfile(displayNameRef.current.value, downloadURL) )

            });
        })

        var updateUserRef = db.collection("students").doc(ref);

          return updateUserRef.update({
              email: emailRef.current.value,
              password: passwordRef.current.value,
              username: displayNameRef.current.value,
              profile_picture: photoRef.current.value,
              address: locationRef.current.value,
              firstName: firstNameRef.current.value,
              lastName: lastNameRef.current.value,
              otherNames: otherNamesRef.current.value,
              dob: dobRef.current.value,
              contact: contactRef.current.value,
          })
          .then(() => {
              console.log("Document successfully updated!");
              history.push('/profile')
          })
          .catch((error) => {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
          });
            // promises.push(updatePassword(passwordRef.current.value))

            
        // Promise.all(promises).then(() => {
        //     history.push('/profile')
        // }).catch(() =>{
        //     setError('Failed to update account')
        // }).finally(()=> {
        //     setLoading(false)
        // })


    }


    return (
        <div>
            <StudentDashboardHeader/>
            {/* <h1>Update Profile</h1>
            {error && <Alert variant="danger">{error}</Alert> }
            <Form onSubmit={handleSubmit}>
                <Form.Group id="displayName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" ref={displayNameRef} required defaultValue={currentUser.displayName} />
                </Form.Group>
                <Form.Group id="profilePhoto">
                    <Form.Label>Profile Picture</Form.Label>
                    <input type="file" ref={photoRef} name="photo" onChange={handleImageAsFile}/>
                </Form.Group>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} placeholder='Leave blank to keep the same' />
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} placeholder='Leave blank to keep the same' />
                </Form.Group>
                <Button disabled={loading} type="submit">Update</Button>
            </Form>
            <img src={imageAsUrl.imgUrl} alt="image tag" /> */}

            <Container className="height-half">

        <Row className="mt-4 mb-4">
          <Col md={8} className="mx-auto">
          {error && <Alert variant="danger">{error}</Alert> }
            <Form onSubmit={handleSubmit} inline>
              {/* COURSE TITLE */}
          <h3 style={{ textAlign: 'center'}}>Update Profile</h3><br />

              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Profile Picture</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="file" ref={photoRef} name="photo" 
                    onChange={handleImageAsFile} 
                    // onChange={updateInput}
                        // value={state.fullname}
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Username</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    ref={displayNameRef} required 
                    // defaultValue={currentUser.displayName}
                    // onChange={updateInput}
                    //     defaultValue={state.username}
                    // ref = {displayNameRef}
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >First name</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    required 
                    ref={firstNameRef}
                    // onChange={updateInput}
                    //     defaultValue={state.firstName}
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Last Name</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    // required defaultValue={currentUser.lastName}
                    // onChange={updateInput}
                    //     defaultValue={state.lastName}
                    ref={lastNameRef}

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Other Names</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    // defaultValue={currentUser.otherNames}
                    // onChange={updateInput}
                    //     defaultValue={state.otherNames}
                    ref={otherNamesRef}

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Date of Birth</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="date"
                    // defaultValue={currentUser.dob}
                    // onChange={updateInput}
                    //     defaultValue={state.dob}
                    ref={dobRef}

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Address/Location</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    // defaultValue={currentUser.location}
                    // onChange={updateInput}
                    //     defaultValue={state.location}
                    ref={locationRef}

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Contact</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    // defaultValue={currentUser.contact}
                    // onChange={updateInput}
                    //     defaultValue={state.contact}
                    ref={contactRef}

                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >Email</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                    required 
                    // // defaultValue={currentUser.email}
                    // onChange={updateInput}
                    //     defaultValue={state.email}
                    ref={emailRef}

                  />
              </Form.Group>
             
              <Col className="text-center">
                <Button className="primary-button text-center">
                Update
              </Button>
            <Link to='/profile'>Cancel </Link>

              </Col>
              
            </Form>
         
            </Col>
        </Row>
      </Container>
            <Footer />
        </div>
    );
};

export default UpdateProfile;
