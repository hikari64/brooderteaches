import React from 'react'
import { HeaderBg, HeaderContainer, HeaderContent, HeaderH1, HeaderP } from "./PgHeaderElements";
import { courses } from '../AllCourses/CourseData';


const PageHeader = ({ id }) => {
    


    let isCoursePage;
    if (typeof id !== 'undefined') {
        // the variable is defined
        isCoursePage = courses.filter(
            (e) => e.id == id).map((courses, index) => 

        <HeaderContent key={index}>
        <HeaderH1>{courses.headline}
        </HeaderH1>
        <HeaderP>
        {courses.tagline}
        </HeaderP>
    </HeaderContent>
    );
    } else {
        isCoursePage = <HeaderContent>
                <HeaderH1>Start Your Journey
                </HeaderH1>
                <HeaderP>
                Pick a course
                </HeaderP>
            </HeaderContent>;
    }
    return (
        <HeaderContainer>
            <HeaderBg style={{
                    backgroundImage: `url(${require('../../images/wave.png').default})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
            </HeaderBg>
            {isCoursePage}
        </HeaderContainer>
    )
}

export default PageHeader
