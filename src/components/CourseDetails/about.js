import React from 'react';
import { CourseContainer, CourseDetails, 
TextWrapper, Heading, Subtitle, Column1, Column2, Img, CourseRow, 
CourseWrapper } from '../CourseSections/CourseElements';
import { coursedetails } from '../AllCourses/AboutData';
import CourseDets from './index'

const CourseAbout = ({id}) => {
    let isCoursePage;

    isCoursePage = coursedetails.filter(
        (e) => e.id == id).map((coursedetails, index) => 

    <CourseContainer>
    <CourseDetails>
        <CourseWrapper>
            <CourseRow>
                <Column1>
                    <TextWrapper>
                        <Heading to='' >{coursedetails.headline}
                        </Heading>
                        <Subtitle>{coursedetails.content}
                        </Subtitle>
                        
                    </TextWrapper>
                </Column1>
                <Column2>
                   <CourseDets/>
                </Column2>
            </CourseRow>
        </CourseWrapper>
    </CourseDetails>
</CourseContainer>

);
    
    return (
        <>
        {isCoursePage}
             </>
    )
}

export default CourseAbout
