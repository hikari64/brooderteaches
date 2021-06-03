import React, {useState, useEffect, useRef} from "react";
import {
  HeaderBg,
  HeaderContainer,
  HeaderContent,
  HeaderH1,
  HeaderP,
} from "./PgHeaderElements";
import firestore from "../../firebase";

const PageHeader = ({ id }) => {
  let isCoursePage = useRef('');
  const [courses, setCourses] = useState([]);

    useEffect(() => {
      if (typeof id !== "undefined") {
        // the variable is defined
            const fetchCourses = async()=>{
              const db = firestore.firestore();
              db.collection('courses').where("id", "==", id).get().then((querySnapshot) => {
                      
              // Loop through the data and store
              // it in array to display
              querySnapshot.forEach(element => {
                  var data = element.data();
                  setCourses(arr => [...arr , data]);
                  console.log(data.length)
                      
              });
          })
          }; fetchCourses();    
            isCoursePage.current = courses.map((data, index) => (
            <HeaderContent key={index}>
              <HeaderH1>{data.title}</HeaderH1>
              <HeaderP>{data.subtitle}</HeaderP>
            </HeaderContent>
          ));
      } else {
        isCoursePage = (
          <HeaderContent>
            <HeaderH1>Start Your Journey</HeaderH1>
            <HeaderP>Pick a course</HeaderP>
          </HeaderContent>
        );
      }
        
    }, [])

  
  return (
    <HeaderContainer>
      <HeaderBg
        style={{
          backgroundImage: `url(${require("../../images/wave.png").default})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></HeaderBg>
      {isCoursePage}
    </HeaderContainer>
  );
};

export default PageHeader;
