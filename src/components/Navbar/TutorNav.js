import React, { useState, useEffect } from "react";
import { Link, useHistory} from "react-router-dom";

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
  MenuItem,
} from "./NavbarElements";
import {Dropdown} from 'react-bootstrap'
// auth
import { useAuth } from "../../contexts/TutorContext";
import { auth } from "../../firebase";

const Navbar = ({ toggle, navbar, changeBackground,tutor }) => {
  const { currentUser } = useAuth();
  const history = useHistory();
  

  const logout = () => {
    return auth.signOut();
  };
  // let currentUser = {
  //   displayName: "Okraks",
  // };
  if(!currentUser){
    

    history.push("/tutor-login")
    
  }
  
  let leftlabel, largescreen;
  if (!(currentUser)){
      // console.log(currentUser.email)
      leftlabel = <MobileIcon onClick={toggle}>
      <FaBars/>
  </MobileIcon> 
      largescreen = <NavBtn>
      <NavBtnLink2 to='/tutor-login'>Log in</NavBtnLink2>
      <NavBtnLink to='/tutor'>Become A Tutor</NavBtnLink>
      </NavBtn>
  } else {
      // leftlabel = <MobileIcon onClick={toggle}>{currentUser.email}</MobileIcon>
      leftlabel = <MobileIcon onClick={toggle}>{currentUser.email}</MobileIcon>
      largescreen = <Profile>
       <span>{currentUser.email}</span>
        <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
      
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {/* <Dropdown.Item><MenuItem to='/tutor-courses'>Dashboard</MenuItem></Dropdown.Item> */}
        <Dropdown.Item><MenuItem to='/tutor-courses'>My Courses</MenuItem></Dropdown.Item>
        <Dropdown.Item><MenuItem to='/tutor-profile'>Profile</MenuItem></Dropdown.Item>
        <Dropdown.Item><MenuItem to='/tutor-create-course'>Create New Course</MenuItem></Dropdown.Item>
        <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></Profile>
  }




  // let leftlabel, largescreen;
  // if (!currentUser) {
  //   // console.log(currentUser.email)
  //   leftlabel = (
  //     <MobileIcon onClick={toggle}>
  //       <FaBars />
  //     </MobileIcon>
  //   );
  //   largescreen = (
  //     <NavBtn>
  //       <NavBtnLink2 to="/tutor-login">Log in</NavBtnLink2>
  //       {/* <NavBtnLink to="/courses">Take A Class</NavBtnLink> */}
  //     </NavBtn>
  //   );
  // } else {
  //   // leftlabel = <MobileIcon onClick={toggle}>{currentUser.email}</MobileIcon>
  //   leftlabel = (
  //     <MobileIcon onClick={toggle}>{currentUser.displayName}</MobileIcon>
  //   );
  //   largescreen = <Profile>{currentUser.displayName}</Profile>;
  // }

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

          <NavMenu className="">
            <NavItem>
              <NavLinks to="/tutor-courses">Courses</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="/pricing">Pricing</NavLinks>
            </NavItem> */}
            {/* <NavItem>
              <NavLinks to="/tutor">Become A Tutor</NavLinks>
            </NavItem> */}
            
            {/* <NavItem>
              <NavLinks to="/tutor-login">Tutor LogIn</NavLinks>
            </NavItem> */}
          </NavMenu>
          <NavBtn></NavBtn>
          {largescreen}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
