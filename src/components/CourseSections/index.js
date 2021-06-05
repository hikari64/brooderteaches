import React, { useState, useEffect } from "react";
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
} from "./CourseElements";

// firebase imports
import {fbapp} from "../../firebase";

// IMPORTING MOCK DATA FOR NOW
//import { courses } from "../../mock/mock.js";  Disabled inport at this level to rec
// ieve courses list as props from course section

const CourseSections = () => {
  // DISABLED FIREBASE CALLS FOR NOW
  //   const [courses, setCourses] = useState([]);
  //   const [loading, setLoading] = useState(false);

  //   const ref = firebase.firestore().collection("courses");

  //   function getCourses() {
  //     setLoading(true);
  //     ref.onSnapshot((querySnapshot) => {
  //       const items = [];
  //       querySnapshot.forEach((doc) => {
  //         items.push(doc.data());
  //       });
  //       setCourses(items);
  //       setLoading(false);
  //     });
  //   }

  //   useEffect(() => {
  //     getCourses();
  //   }, []);

  //   if (loading) {
  //     return <h1>Fetching Courses...</h1>;
  //   }

  // MOCK DATA COURSES
  //const courses = filteredCourse
  // const db = firestore.firestore();
  // db.collection('courses').get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //   });
  // });
  const lightBg = false;
  const imgStart = true;

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const db = firestore.firestore();
      db.collection("courses")
        .get()
        .then((querySnapshot) => {
          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach((element) => {
            var data = element.data();
            setCourses((arr) => [...arr, data]);
            console.log(data.length);
          });
        });
    };
    fetchCourses();
  }, []);

useEffect(() => {
    const fetchCourses = async()=>{
    const db = fbapp.firestore();
    db.collection('courses').get().then((querySnapshot) => {
             
      // Loop through the data and store
      // it in array to display
      querySnapshot.forEach(element => {
          var data = element.data();
          setCourses(arr => [...arr , data]);
          console.log(data.length)
            
      });
  })
}; fetchCourses();
}, [])
   
  
    
    const result =  courses.map((data) => (
      <CourseContainer key={data.id}>
        <CourseDetails id={data.id}  lightBg={lightBg}>
          <CourseWrapper>
            <CourseRow imgStart={lightBg}>
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
      

  return <>{result}</>;
};

export default CourseSections;
