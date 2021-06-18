import React, {useState, useEffect} from 'react';
import { RelatedCourseContainer, RelatedCourseDetails, 
RelatedTextWrapper, RelatedHeading, RelatedHeading2, RelatedSubtitle, RelatedImgWrap, RelatedColumn1, RelatedColumn2, RelatedImg, RelatedCourseRow, 
RelatedCourseWrapper, RelatedCourseBtnLink, RelatedDetails, RelatedData, RelatedDurationIcon, RelatedStartIcon, RelatedFeeIcon } from './RelatedElements';
// import { courses } from '../AllCourses/CourseData';

import {fbapp} from "../../firebase";

const RelatedCoursesSection = () => {

    const lightBg = false;
const imgStart = true;

 const [courses, setCourses] = useState([]);

useEffect(() => {
    const fetchCourses = async()=>{
    const db = fbapp.firestore();
    const coursesRef = db.collection('courses').orderBy("createdAt").limit(3);
    coursesRef.get().then((querySnapshot) => {
             
      // Loop through the data and store
      // it in array to display
      querySnapshot.forEach(element => {
          var data = element.data();
          setCourses(arr => [...arr , data]);
            
      });
  })
}; fetchCourses();
}, [])

    const result = courses.map(data => (
        <RelatedCourseContainer>
                <RelatedCourseDetails id={data.id} lightBg={lightBg}>
                    <RelatedCourseWrapper>
                        <RelatedCourseRow imgStart={imgStart}>
                            <RelatedColumn1>
                                <RelatedTextWrapper>
                                    <RelatedHeading to={`/about/${data.id}`} >{data.title}
                                    </RelatedHeading>
                                    <RelatedSubtitle>{data.about}
                                    </RelatedSubtitle>
                                    <RelatedDetails>
                                        <RelatedData><RelatedDurationIcon/> {data.duration}</RelatedData>
                                        <RelatedData><RelatedStartIcon/>{data.startDate}</RelatedData>
                                        <RelatedData><RelatedFeeIcon/>{data.price}</RelatedData>
                                    </RelatedDetails>
                                    <RelatedCourseBtnLink to={`/preview/${data.id}`}>
                                        Watch Preview
                                    </RelatedCourseBtnLink>
                                </RelatedTextWrapper>
                            </RelatedColumn1>
                            <RelatedColumn2>
                                <RelatedImgWrap>
                                {/* <Img> */}
                                    <RelatedImg src={data.img} alt={data.alt}>
                                    </RelatedImg>
                                </RelatedImgWrap>
                            </RelatedColumn2>
                        </RelatedCourseRow>
                    </RelatedCourseWrapper>
                </RelatedCourseDetails>
            </RelatedCourseContainer>
       
    ));
    return (
        <>
        <RelatedHeading2 to='' >Related Courses</RelatedHeading2>
        <br />
        {result}
             </>
    )
}

export default RelatedCoursesSection
