import React, {useState} from 'react';
import AllCourses from '../components/AllCourses';
import CourseAbout from '../components/CourseDetails/about';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import PageBar from '../components/PageBar';
import PageHeader from '../components/PageHeader';
import Sidebar from '../components/Sidebar';
import {CContainer, CContainer2, Heading } from './PagesElements';


const CoursePage = ({match:{params:{id}}}) => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        if(window.scrollY >=150){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    
    window.addEventListener('scroll', changeBackground)

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} navbar={navbar} changeBackground={changeBackground}/>
        <PageHeader id = {id} />
        <PageBar/>
        <CourseAbout id = {id}/>
        <CContainer>
            <CContainer2>
            <Heading to='' >Related Courses
                        </Heading>
                <AllCourses/>
            </CContainer2>
        </CContainer> 

        <Footer/> 
        </>
    )
}

export default CoursePage
