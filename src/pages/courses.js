import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import CourseSideMenu from "../components/CourseSideMenu.js";
import { CContainer, CContainer2 } from "./PagesElements";
import CourseSections from "../components/CourseSections";
import { fbapp } from "../firebase";
import Spinner from "../components/Spinner/Spinner";
import { Alert,Button,Col,Row,Container } from "react-bootstrap";


const Courses = () => {
  
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [last, setLast] = useState('');
  const [loadmore, setloadMoreBtn] = useState(false);
  const [ref,setRef] = useState(fbapp.firestore().collection("courses"))

  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

//  const [courseLevel,setCourseLevel] = useState(0);




const LoadMore =async()=>{
  let newref = '';
  if (last){
    newref =  ref.startAfter(last).limit(10);
    const snapshot = await newref.get();

       
      const items = [];

      if (snapshot.empty) {
       setloadMoreBtn(false)
      }
      var lastVisible = snapshot.docs[snapshot.docs.length-1];
      setLast(lastVisible);
      console.log("last", lastVisible);
      snapshot.forEach((doc) => {
        items.push(doc.data());
      
      });
      setCourses((courses) => [ ...courses,...items]);
  }
}

useEffect(() => {
  async function getCourses() {
    setCourses([]);
    setLoading(true);
    setloadMoreBtn(true)
    setError(null)
   
      const snapshot = await ref.limit(10).get();

       
      const items = [];

      if (snapshot.empty) {
       
       setError('Sorry, content not found')
          setLoading(false);
        return;
      }
      var lastVisible = snapshot.docs[snapshot.docs.length-1];
      setLast(lastVisible);
      console.log("last", lastVisible);
      snapshot.forEach((doc) => {
        items.push(doc.data());
      
      });
      setCourses(items);
      setLoading(false);
  
  }
  getCourses();
}, [ref]);

// const courses =  useFetchCourses();

  // const [filteredCourse, setFilteredCourse] = useState(courses)
  // filter mock data


  const DataFilter= (courseLength,courseLevel) =>{
    

    if((courseLevel !== 0) && (courseLength !== 0)){
      //load course with this specifications
    const filterRef = fbapp.firestore().collection("courses").where("published", "==", true).where("period", "==", courseLength).where("level", "==", courseLevel);

    setRef(filterRef)
    }
    if((courseLevel !== 0) && (courseLength === 0)){
       const filterRef = fbapp.firestore().collection("courses").where("published", "==", true).where("level", "==", courseLevel);


      setRef(filterRef) 
    }
    if((courseLevel === 0) && (courseLength !== 0)){
      const filterRef = fbapp.firestore().collection("courses").where("published", "==", true).where("period", "==", courseLength);
      setRef(filterRef) 
    }
     if (courseLength + courseLevel === 0 ){
     

      setRef(fbapp.firestore().collection("courses").where("published", "==", true)) 
    }
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

  // Define an image to give to Pageheader
  // Pass that image to the Pageheader

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        navbar={navbar}
        changeBackground={changeBackground}
      />
      <PageHeader />
     
          <Row>

          <Col sm={0} md={3} className="d-none d-md-flex hide-on-mobile" >
            <CourseSideMenu className="col-sm-3 hide-on-mobile"
            DataFilter={DataFilter}  
            />
          </Col>
          {/* <Col xs={3} >
            <CourseSideMenu className="col-sm-3 hide-on-mobile"
            DataFilter={DataFilter}  
            />
          </Col> */}

          <Col  sm={12} md={8} className="mt-md-5 p-4">
          {error && 

          <Row className="">
            <Alert variant="danger"  className="col">
            <Alert.Heading>{error}</Alert.Heading>
            
            </Alert>
          </Row>}
          {loading && <Spinner className="text-center"/>}
            {(!error && !loading) && <CourseSections className="text-start" courses={courses} />
            
            }
            
            <Col  className="text-center">
            {(loadmore) && <Button
            className="primary-button"
            onClick={()=>LoadMore()}
            >
              load more
            </Button>
            
            }
          {!loadmore && <p>End of Courses</p> }

            </Col>
            
          </Col>
        </Row>

      <Footer />
    </>
  );
};

export default Courses;
