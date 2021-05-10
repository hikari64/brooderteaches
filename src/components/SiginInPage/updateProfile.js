import React, {useRef, useState} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'
import {storage} from '../../firebase'


const UpdateProfile = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const displayNameRef = useRef()
    const photoRef = useRef()
    const { currentUser, updateEmail, updatePassword, updateProfile } = useAuth()
    const [error, setError ] = useState('')
    const [loading, setLoading ] = useState(false)
    const history = useHistory();

    const allInputs = {photoURL: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }

    // var photoRef = storageRef.child('images/mountains.jpg');

    function handleSubmit(e) {
        setLoading(true)
        setError('')
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }


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
                promises.push(updateProfile(displayNameRef.current.value, downloadURL) )

            });
        })

        if (passwordRef.current.value !== currentUser.password) {
            promises.push(updatePassword(passwordRef.current.value))
        }

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
            <h1>Update Profile</h1>
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
            {/* <img src={imageAsUrl.imgUrl} alt="image tag" /> */}

            <Link to='/profile'>Cancel </Link>
        </div>
    );
};

export default UpdateProfile;
