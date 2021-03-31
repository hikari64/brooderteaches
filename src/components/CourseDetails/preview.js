import React from 'react';
import { CourseContainer, CourseDetails, Column11, Column22, Img, CourseRow1, 
CourseWrapper1, Heading2, PlayerStyle, Videocontainer } from '../CourseSections/CourseElements';
import { courses } from '../AllCourses/CourseData';
import CourseDets from './index'
import ReactPlayer from "react-player"
import RelatedCoursesSection from '../CourseSections/relatedcourses';



const CoursePrev = ({id}) => {
    let isCoursePage;

    isCoursePage = courses.filter(
        (e) => e.id == id).map((courses, index) => 

<CourseContainer>
    <CourseDetails>
        <CourseWrapper1>
            <CourseRow1>
                <Column11>
                    <PlayerStyle >
                        <ReactPlayer url={courses.preview_link}
                            className={Videocontainer}
                            playing
                            width="100%"
                            height="100%"
                            controls={false}
                        />
                    </PlayerStyle>
                </Column11>
                <Column22>
                   <CourseDets/>
                </Column22>
            </CourseRow1>
        </CourseWrapper1>
        
    </CourseDetails>
<RelatedCoursesSection/>
</CourseContainer>

);
    
    return (
        <>
        <Heading2 to='' >Course Preview</Heading2>
        {isCoursePage}
        </>
    )
}

export default CoursePrev
