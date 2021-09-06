import React, { useState,useEffect } from "react";
import { Container, Row,Modal ,Button,Col ,ProgressBar, Spinner, Alert} from "react-bootstrap";
import ReactPlayer from "react-player";
import LessonDets from "../components/CourseDetails/lessondetails";
import CoursePrev from "../components/CourseDetails/preview";
import { CourseBtnLink, PlayerStyle, Videocontainer } from "../components/CourseSections/CourseElements";
import LessonSections from "../components/CourseSections/lessons";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBar from "../components/PageBar";
import ClassBar from "../components/PageBar/classbar";
import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../contexts/AuthContext";
import { arrayAdd, fbapp, storageRef } from "../firebase";
import { PageplaceHolder } from "./pagesElement";
import { DropzoneArea } from "material-ui-dropzone";
import SubmitAssignment from "./hooks/useSubmitAssignment";


const LessonPage = ({
  match: {
    params: { id },
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [lesson, setLesson] = useState([]);
  const [isActive, setActive] = useState(1);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
const [assignmentProgress, setAssignmentProgress] = useState(0);
const [assignment, setAssignment] = useState([]);
const [url, setUrl] = useState([]);
const [error, setError] = useState(null);
const {userID} = useAuth();

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  const handleChangePdf=()=>{
    setError('');
    setLoading(true)
  
    const file = assignment[0];
    console.log(file)
    var d = new Date();
    var n = d.getTime();
   
    // references
   if(file){ 
     
      const filename = n+file.name;
    const storeVideoRef = storageRef.child(`/lessonAssigments/${filename}`);
    
      storeVideoRef.put(file).on('state_changed', (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setAssignmentProgress(percentage);
      }, (err) => {
        setError(err);
      }, async () => {
        const url = await storeVideoRef.getDownloadURL();
        
      let   nam = "assignment"

      
      dosubmitAssigment(url)
      
         

      });
    }else{
      setError('Assignment Field can\'t  be empty!')
    setLoading(false)

    }
  }

  const dosubmitAssigment = async(url)=>{
    setLoading(true)

    const {error} = await SubmitAssignment(url,id,userID,lesson.courseId);
    setError(error);
    setLoading(false)
    setShow(false)
    console.log(url);
  }

  

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  
  const endlesson = async()=>{
    const db = fbapp.firestore();        
    
              db.collection('lessons').doc(id).update({
                attendee: arrayAdd.arrayRemove(userID),
                completed: arrayAdd.arrayUnion(userID)
              }).then((querySnapshot) => {
                console.log("lesson Completed")
              })
};

  useEffect(() => {
   
      const fetchlessons = async()=>{
      const db = fbapp.firestore();
      db.collection('lessons').doc(id).get().then((querySnapshot) => {

      var data = querySnapshot.data();
          setLesson(data);
          console.log(data.length)
              
          db.collection('courses').doc(data.courseId).get().then((cours) => {
                setCourses(cours.data());  
                db.collection('lessons').doc(id).update({
                  attendee: arrayAdd.arrayUnion(userID)
                }).then((querySnapshot) => {
                  console.log("attendance taken")

                })

            });
  })
  };
  fetchlessons();
  
  }, [])

  const submittab = 
        <Modal show={show} 
        onHide={()=>setShow(false)}
        >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Col>
        {loading && <Spinner animation="border" variant="success"/>}
        {error && <Alert variant="danger">{error}</Alert>}
                 {assignmentProgress !== 0 && <ProgressBar striped now={assignmentProgress} />}
                <DropzoneArea
                     acceptedFiles={['application/pdf']}
                     dropzoneText={"Add Assignment"}
                     // onChange={handleChangePdf}
                     onChange={(files) => setAssignment(files)}
 
                     // onChange={(files) => setAssignment(files)}
                     maxFileSize	={300000000}
                     name="assignment"
                  //  value={assignment}
                     />
                     {/* {error.assignment && <div className="alert-danger">{error.assignment} </div>} */}
                </Col> 
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" onClick={()=>handleChangePdf()} >Save changes</Button>
        </Modal.Footer>
      </Modal>;


  const result = <>
  <Row className="h-50">
                  <ReactPlayer url={lesson.video}
                            // className={Videocontainer}
                            playing
                            width="100vw"
                            height="70vh"
                            controls={true}
                        />
              </Row>
       <Row className="mx-lg-5 mx-auto pt-3">
          <Container className="mx-lg-5 mx-auto">
            <h1>{courses.title}</h1>
            <h3>Lesson : {lesson.title}</h3>
         {/* <LessonDets data={courses}/> */}
        </Container>
          
       </Row>
       <Row className="mx-lg-5 mx-auto pt-3">
       <Container className="mx-lg-5 mx-auto">
            <h3 className="fw-bold">Lesson Summary</h3>
            <p>{lesson.summary}</p>
         {/* <LessonDets data={courses}/> */}
        </Container>
       </Row>
       <Row className="mx-lg-5 mx-auto pt-3">
       <Container className="mx-lg-5 mx-auto">
            <h3 className="fw-bold">Assignment</h3>
            <p>{lesson.summary}</p>
         {/* <LessonDets data={courses}/> */}
        </Container>
       </Row>
       <Row>
         <Container className="text-center mx-auto m-4">
            <CourseBtnLink to="#" onClick={()=>setShow(true)}>Submit Assignment</CourseBtnLink>
          <CourseBtnLink to="#" onClick={()=>endlesson()}> End Lesson</CourseBtnLink>
         </Container>
       </Row>
       {submittab}
      
  </>

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        navbar={navbar}
        changeBackground={changeBackground}
      />
      <PageplaceHolder> {/* placeholder for padding top only*/}
            {courses && result}
      </PageplaceHolder>

      <Footer />
    </>
  );
};

export default LessonPage;
