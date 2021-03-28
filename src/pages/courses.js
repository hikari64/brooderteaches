import React, {useState} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Sidebar from '../components/Sidebar';
import AllCourses from '../components/AllCourses';
import CourseSideMenu from '../components/CourseSideMenu.js';
import {CContainer, CContainer2 } from './PagesElements';

const Courses = () => {
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

    // Define an image to give to Pageheader
    // Pass that image to the Pageheader

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} navbar={navbar} changeBackground={changeBackground}/>
        <PageHeader/>
        <CContainer>
             <CourseSideMenu/>
            <CContainer2>
                <AllCourses/>
            </CContainer2> 
        </CContainer> 

        <Footer/> 
        </>
    )
}

export default Courses
