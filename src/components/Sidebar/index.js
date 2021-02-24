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
                    <SidebarLink to='courses' onClick={toggle}>Courses</SidebarLink>
                    <SidebarLink to='pricing' onClick={toggle}>Pricing</SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='tutor' onClick={toggle}>Become a Tutor</SidebarLink>
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
