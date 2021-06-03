import React, {useState, useEffect} from 'react';

import React from 'react'
import { HeaderBg, Img, HeaderContainer, HeaderContent, HeaderH1, HeaderP, ImgWrapper } from "./HeaderElements";
import { courses } from '../AllCourses/CourseData';
import {useAuth} from '../../contexts/AuthContext'

import firestore from "../../firebase";



const AuthHeader = ({ id }) => {
    const { currentUser} = useAuth();
    console.log(currentUser.displayName)

    let isCoursePage;
    if (typeof id !== 'undefined') {
        // the variable is defined
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

        isCoursePage = courses.map((data, index) => 

        <HeaderContent key={index}>
        <HeaderH1>{data.title}
        </HeaderH1>
        <HeaderP>
        {data.subtitle}
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
