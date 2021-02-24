import React from 'react'
import { FooterLinkItems, FooterLink, FooterContainer, FooterLinkTitle, 
FooterLinksWrapper, FooterWrap, FooterLinksContainer, SocialLogo, 
SocialMedia, SocialMediaWrap, WebsiteRights } from "./FooterElements";
const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    Platform
                                </FooterLinkTitle>
                                <FooterLink to='/'>Browse Courses</FooterLink>
                                <FooterLink to='/'>Course Instructors</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    Organisation
                                </FooterLinkTitle>
                                <FooterLink to='/'>About Us</FooterLink>
                                <FooterLink to='/'>In the News</FooterLink>
                                <FooterLink to='/'>Blog</FooterLink>
                                <FooterLink to='/'>Become An Instructor</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    Support
                                </FooterLinkTitle>
                                <FooterLink to='/'>Contact Us</FooterLink>
                                <FooterLink to='/'>FAQs</FooterLink>
                                <FooterLink to='/'>Sitemap</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    
                </FooterWrap>
            </FooterContainer>
            <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>
                                Copyright BrooderHall { new Date().getFullYear()} All Rights Reserved
                            </SocialLogo>
                            <WebsiteRights>Privacy Policy</WebsiteRights>
                            <WebsiteRights>Terms of Use</WebsiteRights>
                        </SocialMediaWrap>
                    </SocialMedia>
        </>
    )
}

export default Footer
