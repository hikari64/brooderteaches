import React, {useRef, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'
import {storage} from '../../firebase'
import StudentDashboardHeader from '../PageHeader/StudentDashboardHeader'
import Footer from '../Footer/index'
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import firestore from '../../firebase';

const UpdateProfile = () => {
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
    const { userID, currentUser, updateEmail, updatePassword, updateProfile } = useAuth()
    const [error, setError ] = useState('')
    const [loading, setLoading ] = useState(false)
    const history = useHistory();

    const [imageUrl, setImageUrl] = useState(null)

    const handleImageAsFile = async (e) => {
      console.log("successfully set the image");
        const file = e.target.files[0];
        const fileRef = storage.ref().child(`images/${file.name}`);
        await fileRef.put(file)
        setImageUrl(await fileRef.getDownloadURL())
    }

    function handleSubmit(e) {
      console.log(userID)
        setLoading(true)
        setError('')
        e.preventDefault()

        console.log("do you even get here?")
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        console.log("you made a promise!")

        if (emailRef.current.value !== currentUser.email) {
        console.log("we're changing email")
           
          promises.push(updateEmail(emailRef.current.value))
        }

        console.log("ok so maybe email didnt change or not")

        if (passwordRef.current.value) {
        console.log("did you?")
        promises.push(updatePassword(passwordRef.current.value))
        }

        console.log("password changed? nope")

        promises.push(updateProfile(displayNameRef.current.value, imageUrl, 
                  userID, emailRef.current.value,
                  passwordRef.current.value,
                  locationRef.current.value,
                  firstNameRef.current.value,
                  lastNameRef.current.value,
                  otherNamesRef.current.value,
                  dobRef.current.value,
                  contactRef.current.value) )
            
        Promise.all(promises).then(() => {
            history.push('/profile')
        }).catch(() =>{
            setError('Failed to update account')
        }).finally(()=> {
            setLoading(false)
        })


    }

    return (
        <div>
            <StudentDashboardHeader/>
            <Container className="height-half">

        <Row className="mt-4 mb-4">
          <Col md={8} className="mx-auto">
          {error && <Alert variant="danger">{error}</Alert> }
            <Form onSubmit={handleSubmit} inline>
          <h3 style={{ textAlign: 'center'}}>Update Profile</h3><br />

              <Form.Group className="row">
            <img src={imageUrl} alt="image tag" /> 
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
                    ref={displayNameRef} 
                     
                    defaultValue={currentUser.displayName}
                    
                  />
              </Form.Group>
              <Form.Group className="row">
                <Form.Label  className="col-3 align-bottom text-end my-auto" >First name</Form.Label>
                  <Form.Control
                    className="form-input col lg"
                    type="text"
                     
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
                     
                    // // defaultValue={currentUser.email}
                    // onChange={updateInput}
                    //     defaultValue={state.email}
                    defaultValue={currentUser.email}
                    ref={emailRef}

                  />
              </Form.Group>
              <Form.Group className="row" id="password">
                    <Form.Label className="col-3 align-bottom text-end my-auto">Password</Form.Label>
                    <Form.Control className="form-input col lg" type="password" ref={passwordRef} placeholder='Leave blank to keep the same' />
                </Form.Group>
                <Form.Group className="row" id="password-confirm">
                    <Form.Label className="col-3 align-bottom text-end my-auto">Confirm Password</Form.Label>
                    <Form.Control className="form-input col lg" type="password" ref={passwordConfirmRef} placeholder='Leave blank to keep the same' />
                </Form.Group>
             
              <Col className="text-center">
                <Button type="submit" disabled={loading} className="primary-button text-center">
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
