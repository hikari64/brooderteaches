import React, {useState} from 'react';
import CourseAbout from '../components/CourseDetails/about';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import PageBar from '../components/PageBar';
import PageHeader from '../components/PageHeader';
import Sidebar from '../components/Sidebar';


const CoursePage = ({match:{params:{id}}}) => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

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
        <PageBar isActive={isActive} toggleClass={toggleClass} id={id}/>
        <CourseAbout id = {id}/>
        <Footer/> 
        </>
    )
}

export default CoursePage
