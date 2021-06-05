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
import {useAuth} from '../../contexts/AuthContext'


const CourseSections = () => {

const lightBg = false;
const imgStart = true;
const { userID } = useAuth()
console.log(userID)
const db = fbapp.firestore();


 const [courses, setCourses] = useState([]);

//  Delete this function and rather implement the hook for fetching 
//  courses based on the user's ID
//  user ID is defined here: const { userID } = useAuth()

 function fetchMyCourses(item, index, array) {

 }


useEffect(() => {
    const fetchCourses = async()=>{
    db.collection('students').doc(userID)
        .get()
        .then((doc) => {
            if (doc.exists) {
                var data = doc.data().courses
                console.log(data)
                console.log(data.length)
                // setCourses(arr => [...arr , data]);
                 data.forEach(fetchMyCourses)


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
            
    //   });
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
      

      return <>{result}</> 
 
};

export default CourseSections;
