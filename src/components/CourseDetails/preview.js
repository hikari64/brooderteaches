import React from 'react';
import { CourseContainer, CourseDetails, Column11, Column22, Img, CourseRow1, 
CourseWrapper1 } from '../CourseSections/CourseElements';
import { courses } from '../AllCourses/CourseData';
import CourseDets from './index'
import AllCourses from '../AllCourses';
import ReactPlayer from "react-player"



const CoursePrev = ({id}) => {
    let isCoursePage;

    isCoursePage = courses.filter(
        (e) => e.id == id).map((courses, index) => 

<CourseContainer>
    <CourseDetails>
        <CourseWrapper1>
            <CourseRow1>
                <Column11>
                <ReactPlayer
        url={courses.preview_link}
      />
                </Column11>
                <Column22>
                   <CourseDets/>
                </Column22>
            </CourseRow1>
        </CourseWrapper1>
    </CourseDetails>
<AllCourses/>
</CourseContainer>

);
    
    return (
        <>
        {isCoursePage}
             </>
    )
}

export default CoursePrev
