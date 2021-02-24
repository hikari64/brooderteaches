import React, { useState, useEffect } from 'react'
import { FaBars } from "react-icons/fa";
import { MobileIcon, Nav, NavbarContainer, 
    NavBtn, NavBtnLink2, NavBtnLink, NavItem, 
    NavLinks, NavLogo, NavMenu } from './NavbarElements'

const Navbar = ({ toggle, navbar, changeBackground }) => {
    


    return (
        <>
        <Nav onScroll={changeBackground} navbar={ navbar }>
            <NavbarContainer>
                <NavLogo to='/'>BrooderHall</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='/courses'>Courses</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='/pricing'>Pricing</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='/tutor'>Become A Tutor</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='/about'>About</NavLinks>
                </NavItem>

            </NavMenu>
            <NavBtn>
            </NavBtn>
            <NavBtn>
            <NavBtnLink2 to='/login'>Log in</NavBtnLink2>
            <NavBtnLink to='/class'>Take A Class</NavBtnLink>
            </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
