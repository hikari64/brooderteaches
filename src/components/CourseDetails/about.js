import React, {useState, useEffect} from 'react';
import { CourseContainer, CourseDetails, 
TextWrapper, Heading, Subtitle1, Column11, Column22, Img, CourseRow1, 
CourseWrapper1, CourseBtnLink } from '../CourseSections/CourseElements';
// import { coursedetails } from '../AllCourses/AboutData';
import CourseDets from './index'
import RelatedCoursesSection from '../CourseSections/relatedcourses';

import {fbapp} from "../../firebase";



const CourseAbout = ({id}) => {
    let isCoursePage;

    const [courses, setCourses] = useState([]);

useEffect(() => {
    const fetchCourses = async()=>{
    const db = fbapp.firestore();
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
}, [])

    isCoursePage = courses.map((data) =>  

<CourseContainer>
    <CourseDetails>
        <CourseWrapper1>
            <CourseRow1>
                <Column11>
                    <TextWrapper>
                        <Heading to='' >{data.title}
                        </Heading><br />
                        <CourseBtnLink to={`/register/${data.id}`} style={{ textAlign: 'left'}}>
                    Take this Class
                  </CourseBtnLink>
                        <Subtitle1>{data.tag}
                        </Subtitle1>
                        
                    </TextWrapper>
                </Column11>
                <Column22>
                   <CourseDets data={data}/>
                </Column22>
            </CourseRow1>
            
        </CourseWrapper1>
    </CourseDetails>
    <RelatedCoursesSection id={data.id} skills={data.skills}/>
</CourseContainer>

);
    
    return (
        <>
        {isCoursePage}
             </>
    )
}

export default CourseAbout
