import React from 'react';
import { SidebarContainer, Icon, CloseIcon, 
    SidebarLink, SideBtnWrap, SidebarRoute, SidebarWrapper, SidebarMenu } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarRoute to='/courses' onClick={toggle}>Courses</SidebarRoute>
                    <SidebarRoute to='/pricing' onClick={toggle}>Pricing</SidebarRoute>
                    <SidebarRoute to='/about' onClick={toggle}>About</SidebarRoute>
                    <SidebarRoute to='/tutor' onClick={toggle}>Become a Tutor</SidebarRoute>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/login' onClick={toggle}>Login</SidebarRoute>
                </SideBtnWrap><br></br>
                <SideBtnWrap>
                    <SidebarRoute to='/class' onClick={toggle}>Take A Class</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
