import React from 'react';
import { CourseContainer, CourseDetails, 
TextWrapper, Heading, Subtitle, ImgWrap, Column1, Column2, Img, CourseRow, 
CourseWrapper, CourseBtnLink, Details, Data, DurationIcon, StartIcon, FeeIcon } from './CourseElements';
import { courses } from '../AllCourses/CourseData';

const CourseSections = () => {
    const result = courses.map(courses => (
        <CourseContainer>
                <CourseDetails id={courses.id} lightBg={courses.lightBg}>
                    <CourseWrapper>
                        <CourseRow imgStart={courses.imgStart}>
                            <Column1>
                                <TextWrapper>
                                    <Heading to={`/about/${courses.id}`} >{courses.headline}
                                    </Heading>
                                    <Subtitle>{courses.description}
                                    </Subtitle>
                                    <Details>
                                        <Data><DurationIcon/> {courses.duration}</Data>
                                        <Data><StartIcon/>{courses.start}</Data>
                                        <Data><FeeIcon/>{courses.fee}</Data>
                                    </Details>
                                    <CourseBtnLink to={`/preview/${courses.id}`}>
                                        Watch Preview
                                    </CourseBtnLink>
                                </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                {/* <Img> */}
                                    <Img src={courses.img} alt={courses.alt}>
                                    </Img>
                                </ImgWrap>
                            </Column2>
                        </CourseRow>
                    </CourseWrapper>
                </CourseDetails>
            </CourseContainer>
       
    ));
    return (
        <>
        {result}
             </>
    )
}

export default CourseSections
