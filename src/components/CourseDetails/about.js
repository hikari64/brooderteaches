import React from 'react';
import { CourseContainer, CourseDetails, 
TextWrapper, Heading, Subtitle1, Column11, Column22, Img, CourseRow1, 
CourseWrapper1 } from '../CourseSections/CourseElements';
import { coursedetails } from '../AllCourses/AboutData';
import CourseDets from './index'
import RelatedCoursesSection from '../CourseSections/relatedcourses';


const CourseAbout = ({id}) => {
    let isCoursePage;

    isCoursePage = coursedetails.filter(
        (e) => e.id == id).map((coursedetails, index) => 

<CourseContainer>
    <CourseDetails>
        <CourseWrapper1>
            <CourseRow1>
                <Column11>
                    <TextWrapper>
                        <Heading to='' >{coursedetails.headline}
                        </Heading>
                        <Subtitle1>{coursedetails.content}
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
