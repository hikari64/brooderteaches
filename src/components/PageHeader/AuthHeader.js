import React from 'react'
import { HeaderBg, Img, HeaderContainer, HeaderContent, HeaderH1, HeaderP, ImgWrapper } from "./HeaderElements";
import { courses } from '../AllCourses/CourseData';
import {useAuth} from '../../contexts/AuthContext'


const AuthHeader = ({ id }) => {
    const { currentUser} = useAuth();
    console.log(currentUser.displayName)

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
        <>
        <HeaderContainer>
            <HeaderBg style={{
                    backgroundImage: `url(${require('../../images/wave.png').default})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
            </HeaderBg>
            {/* {isCoursePage} */}
            <Img style={{
                // backgroundImage: `url(${require(currentUser.photoURL)})`,
                backgroundImage: `url(${currentUser.photoURL})`,
                }}></Img>
        </HeaderContainer>
        {/* <ImgWrapper> */}
            
        {/* </ImgWrapper> */}
    </>  
        
    )
}

export default AuthHeader