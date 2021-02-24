import React from 'react'
import { HeroContainer, HeroBg, HeroBtnWrapper, HeroContent, HeroH1, HeroP } from "./HeroElements";
import { NavBtnLink } from "../Navbar/NavbarElements";

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg style={{
                    backgroundImage: `url(${require('../../images/wave.png').default})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Inspired?
                </HeroH1>
                <HeroP>
                Acquire or hone the skill that will
                <br/> land you that dream job, or get you started on
                <br/> that project. Take a class now.
                </HeroP>
                <HeroBtnWrapper>
                    <NavBtnLink to='/class'>
                        Take A Class
                    </NavBtnLink>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
