import React, {useState, useEffect, useRef} from "react";
import {
  HeaderBg,
  HeaderContainer,
  HeaderContent,
  HeaderH1,
  HeaderP,
} from "./PgHeaderElements";
import {fbapp} from "../../firebase";
// import wave from '../../images/wave.pngy'
 
const PageHeader = ({ id,courses }) => {
  let isCoursePage = useRef('');
  const [bgImg ,setbgImg] = useState('');
  // const [courses, setCourses] = useState([]);

      if ((courses !== [])) {
        // the variable is defined
           
                setbgImg(courses.previewImg);

                  // setCourses(data);                      
        
            // bgImg = (courses.previewImg);

            isCoursePage = (
            <HeaderContent>
              <HeaderH1>{courses.title}</HeaderH1>
              <HeaderP>{courses.subtitle}</HeaderP>
            </HeaderContent>)
          
      } else {
        isCoursePage = (
          <HeaderContent>
            <HeaderH1>Start Your Journey</HeaderH1>
            <HeaderP>Pick a course</HeaderP>
          </HeaderContent>
        );
      }
        

  
  return (
    <HeaderContainer bgImg={bgImg ? bgImg :''}> 
      <HeaderBg 
      
        style={{
          // backgroundImage:`url(${require(bgImg || `../../images/wave.png`).default})`,
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
