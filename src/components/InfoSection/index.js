import React from 'react'
import { InfoContainer, InfoRow, InfoWrapper, ImgWrap, img, Column1, Column2, Heading, Subtitle, TextWrapper, Img } from './InfoElements'
import { NavBtnLink } from "../Navbar/NavbarElements";


const InfoSection = ({id, imgStart, headline, description, img, alt, lightBg }) => {
    return (
        <>
            <InfoContainer id={id} lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading>{headline}
                                </Heading>
                                <Subtitle>{description}
                                </Subtitle>
                                <NavBtnLink to='/class'>
                                    Take A Class Now!
                                </NavBtnLink>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            {/* <Img> */}
                                <Img src={img} alt={alt}>
                                </Img>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
