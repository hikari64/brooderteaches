import React, {useState} from 'react'
import ProfileContent from '../components/Profile/content'
import Footer from '../components/Footer';
import AuthHeader from '../components/PageHeader/AuthHeader';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';


const Profile = () => {
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
            <AuthHeader/>
            <ProfileContent/>
            <Footer/>
            
        </>
    )
}

export default Profile
