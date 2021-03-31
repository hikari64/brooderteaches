import React from 'react';
import { RelatedCourseContainer, RelatedCourseDetails, 
RelatedTextWrapper, RelatedHeading, RelatedHeading2, RelatedSubtitle, RelatedImgWrap, RelatedColumn1, RelatedColumn2, RelatedImg, RelatedCourseRow, 
RelatedCourseWrapper, RelatedCourseBtnLink, RelatedDetails, RelatedData, RelatedDurationIcon, RelatedStartIcon, RelatedFeeIcon } from './RelatedElements';
import { courses } from '../AllCourses/CourseData';

const RelatedCoursesSection = () => {
    const result = courses.map(courses => (
        <RelatedCourseContainer>
                <RelatedCourseDetails id={courses.id} lightBg={courses.lightBg}>
                    <RelatedCourseWrapper>
                        <RelatedCourseRow imgStart={courses.imgStart}>
                            <RelatedColumn1>
                                <RelatedTextWrapper>
                                    <RelatedHeading to={`/about/${courses.id}`} >{courses.headline}
                                    </RelatedHeading>
                                    <RelatedSubtitle>{courses.description}
                                    </RelatedSubtitle>
                                    <RelatedDetails>
                                        <RelatedData><RelatedDurationIcon/> {courses.duration}</RelatedData>
                                        <RelatedData><RelatedStartIcon/>{courses.start}</RelatedData>
                                        <RelatedData><RelatedFeeIcon/>{courses.fee}</RelatedData>
                                    </RelatedDetails>
                                    <RelatedCourseBtnLink to={`/preview/${courses.id}`}>
                                        Watch Preview
                                    </RelatedCourseBtnLink>
                                </RelatedTextWrapper>
                            </RelatedColumn1>
                            <RelatedColumn2>
                                <RelatedImgWrap>
                                {/* <Img> */}
                                    <RelatedImg src={courses.img} alt={courses.alt}>
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
        {result}
             </>
    )
}

export default RelatedCoursesSection
