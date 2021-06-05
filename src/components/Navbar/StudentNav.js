import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink2,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  Profile,
} from "./NavbarElements";
import {Dropdown} from 'react-bootstrap'

// auth
import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../firebase";


const Navbar = ({ toggle, navbar, changeBackground }) => {
  const logout = () => {
    return auth.signOut();
  };
  
    const { currentUser } = useAuth();
    // console.log(currentUser.email)
    let leftlabel, largescreen;
    if (!(currentUser)){
        // console.log(currentUser.email)
        leftlabel = <MobileIcon onClick={toggle}>
        <FaBars/>
    </MobileIcon> 
        largescreen = <NavBtn>
        <NavBtnLink2 to='/login'>Log in</NavBtnLink2>
        <NavBtnLink to='/courses'>Take A Class</NavBtnLink>
        </NavBtn>
    } else {
        // leftlabel = <MobileIcon onClick={toggle}>{currentUser.email}</MobileIcon>
        leftlabel = <MobileIcon onClick={toggle}>{currentUser.displayName}</MobileIcon>
        largescreen = <Profile><Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
        {currentUser.displayName}
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown></Profile>
    }

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav onScroll={changeBackground} navbar={navbar}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            BrooderHall
          </NavLogo>
          {leftlabel}
          {/* <NavBtn></NavBtn> */}
          {largescreen}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
