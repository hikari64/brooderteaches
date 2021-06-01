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

// auth
import { useAuth } from "../../contexts/AuthContext";

const Navbar = ({ toggle, navbar, changeBackground }) => {
  // const { currentUser } = useAuth();

  let currentUser = {
    displayName: "Okraks",
  };
  let leftlabel, largescreen;
  if (!currentUser.displayName) {
    // console.log(currentUser.email)
    leftlabel = (
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
    );
    largescreen = (
      <NavBtn>
        <NavBtnLink2 to="/tutor-login">Log in</NavBtnLink2>
        {/* <NavBtnLink to="/courses">Take A Class</NavBtnLink> */}
      </NavBtn>
    );
  } else {
    // leftlabel = <MobileIcon onClick={toggle}>{currentUser.email}</MobileIcon>
    leftlabel = (
      <MobileIcon onClick={toggle}>{currentUser.displayName}</MobileIcon>
    );
    largescreen = <Profile>{currentUser.displayName}</Profile>;
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

          <NavMenu className="">
            <NavItem>
              <NavLinks to="/courses">Courses</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="/pricing">Pricing</NavLinks>
            </NavItem> */}
            {/* <NavItem>
              <NavLinks to="/tutor">Become A Tutor</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
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