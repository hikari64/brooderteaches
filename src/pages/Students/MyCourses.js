import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { CContainer, CContainer2 } from "../PagesElements";
import StudentDashboardHeader from "../../components/PageHeader/StudentDashboardHeader";
import Navbar from '../../components/Navbar/StudentNav';
import CourseSections from "../../components/CourseSections";
import {fbapp} from "../../firebase";
import {useAuth} from '../../contexts/AuthContext'
import Spinner from "../../components/Spinner/Spinner";
import { Container, Card, Button } from "react-bootstrap";
import {
  CourseContainer,
  CourseDetails,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Column1,
  Column2,
  Img,
  CourseRow,
  CourseWrapper,
  CourseBtnLink,
  Details,
  Data,
  DurationIcon,
  StartIcon,
  FeeIcon,
} from "../../components/CourseSections/CourseElements";
import { NavBtnLink } from "../../components/Navbar/NavbarElements";



const MyCourses = () => {
  const { userID } = useAuth()
  

  const db = fbapp.firestore();
  
  const [loading, setLoading] = useState(true);
  const [emptyCourse, setEmptyCourse] = useState(false);
  //  const [courseLevel,setCourseLevel] = useState(0);
  
  const [mycourses, setMyCourses] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchCourses = async()=>{
    db.collection('students').doc(userID)
        .get()
        .then((doc) => {
            if (doc.exists) {
                var data = doc.data().courses
                console.log(data)
                
                if(data){
                  if (!!data) {
                    setEmptyCourse(true)
                  setLoading(false)
                  } 
                  // data.forEach((dat) => {
                  //allcourses.push(doc.data());
                  // setFilteredCourse(filteredCourse => [...filteredCourse ,data]);
                  
                else { data.forEach((dat) => {
                  db.collection("courses").where("id", "==", dat)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data = doc.data();
          setMyCourses(arr => [...arr , data]);
          setEmptyCourse(false)
          setLoading(false)
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
   } ) 
  }

                // });
                }else{
                  setEmptyCourse(true)
                  setLoading(false)

                }
                // setCourses(arr => [...arr , data]);
                
                


            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
      // Loop through the data and store
      // it in array to display
    //   querySnapshot.forEach(element => {
    //       var data = element.data();
    //       setCourses(arr => [...arr , data]);
    //       console.log(data.length)
           // data.forEach(fetchMyCourses)
    //   });
  })
}; fetchCourses();
}, [])
 
const lightBg = false;
const imgStart = true;

const result =  mycourses.map((data, index) => (
  <CourseContainer key={index}>
    <CourseDetails id={data.id}  lightBg={lightBg}>
      <CourseWrapper>
        <CourseRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <Heading to={`/about/${data.id}`}>
                {data.title}
              </Heading>
              <Subtitle>{data.about}</Subtitle>
              <Details>
                <Data>
                  <DurationIcon /> {data.duration}
                </Data>
                <Data>
                  <StartIcon />
                  {data.startDate}
                </Data>
                <Data>
                  <FeeIcon />
                  {data.price}
                </Data>
              </Details>
              <CourseBtnLink to={`/preview/${data.id}`}>
                Watch Preview
              </CourseBtnLink>
              <CourseBtnLink to={`/register/${data.id}`}>
                Take this Class
              </CourseBtnLink>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              {/* <Img> */}
              <Img src={data.img} alt={data.alt}></Img>
            </ImgWrap>
          </Column2>
        </CourseRow>
      </CourseWrapper>
    </CourseDetails>
  </CourseContainer>
  ));
  // scroll to top
  
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

  // Define an image to give to Pageheader
  // Pass that image to the Pageheader

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />      
      <Navbar toggle={toggle} navbar={navbar} changeBackground={changeBackground}/>
      <StudentDashboardHeader/>
      <Container>
        {loading && <Spinner/>}
        {emptyCourse && 
        <Container><br /><br />
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Ooops</Card.Title>
              <Card.Text>
             You have no courses yet, consider taking a course already!
              </Card.Text>
              <NavBtnLink to='/courses'>
                        Take A Class
              </NavBtnLink>
            </Card.Body>
          </Card><br /><br />
        </Container>}
        {!loading && result}
        
      </Container>

      <Footer />
    </>
  );
};

export default MyCourses;
