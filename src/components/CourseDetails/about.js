import React, {useState, useEffect} from 'react';
import { CourseContainer, CourseDetails, 
TextWrapper, Heading, Subtitle1, Column11, Column22, Img, CourseRow1, 
CourseWrapper1, CourseBtnLink } from '../CourseSections/CourseElements';
// import { coursedetails } from '../AllCourses/AboutData';
import CourseDets from './index'
import RelatedCoursesSection from '../CourseSections/relatedcourses';

import firestore from "../../firebase";



const CourseAbout = ({id}) => {
    let isCoursePage;

    const [courses, setCourses] = useState([]);

useEffect(() => {
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
}, [])

    isCoursePage = courses.map((data) =>  

<CourseContainer>
    <CourseDetails>
        <CourseWrapper1>
            <CourseRow1>
                <Column11>
                    <TextWrapper>
                        <Heading to='' >{data.title}
                        </Heading><CourseBtnLink to={`/register/${data.id}`} style={{ textAlign: 'left'}}>
                    Take this Class
                  </CourseBtnLink>
                        <Subtitle1>{data.about}
                        </Subtitle1>
                        
                    </TextWrapper>
                </Column11>
                <Column22>
                   <CourseDets/>
                </Column22>
            </CourseRow1>
            
        </CourseWrapper1>
    </CourseDetails>
    <br/><br/>
    <RelatedCoursesSection/>
</CourseContainer>

);
    
    return (
        <>
        {isCoursePage}
             </>
    )
}

export default CourseAbout
