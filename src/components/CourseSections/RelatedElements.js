import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";
import { FaCalendarAlt,  FaMoneyBillWave, FaClock} from "react-icons/fa";


export const RelatedCourseContainer = styled.div`
    color: #fff;
    padding: 0px 0 100px;
    max-width: 700px;
    margin-left: -60px;

    @media screen and (max-width: 768px){
        margin-left: 0;
    }
`;


export const RelatedCourseDetails = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    width: 100%;
`;

export const RelatedCourseWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 900px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: -110px;
    padding: 0 24px;
    justify-content: center;

    @media (max-width: 480px){
        margin-top: -100px;
    }

    
`;


export const RelatedCourseRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, auto);
    align-items: center;
    grid-template-areas: ${({imgStart}) => 
    imgStart ? `'col2 col1'` : `'col1 col2'` };

    @media screen and (max-width: 480px){
        grid-template-areas: ${({imgStart}) => 
        imgStart ? `'col2' 'col1'` : `'col2 col2' 'col1 col1'` };
    
    }
`;
 
export const RelatedColumn1 = styled.div`
    
    
    grid-area: col1;

`;

export const RelatedColumn2 = styled.div`
 

    grid-area: col2;

    @media (max-width: 480px) {
        margin: 100px 10px 1px 0;

    };
`;


export const RelatedTextWrapper = styled.div`
    max-width: 600px;
    padding-top: 0;
    padding-bottom: 30px;
    margin-right: 20px;

    @media (max-width: 480px) {
        max-width: auto;
        padding-left: 50px;
    };

    @media (max-width: 768px){
        margin-left: -70px;
    }
`;

export const RelatedHeading = styled(LinkR)`
    color: black;
    font-size: 20px;
    margin-bottom: 24px;
    line-height: 1.1;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;

    }

    @media (max-width: 480px) {
        font-size: 12px
    };
    
    @media (max-width: 768px){
        font-size: 12px;
    }

`;

export const RelatedHeading2 = styled.h1`
    color: black;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    padding: 100px 60px 0 55px;
    margin-top: 110px 0 0 0;
    font-weight: 600;
    line-height: 1.1;
    font-size: 20px;

    @media (max-width: 480px) {
        font-size: 12px
    };
    
    @media (max-width: 768px){
        font-size: 12px;
    }
`;

export const RelatedSubtitle = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    font-size: 10px;
    color: black;

    @media (max-width: 480px) {
        font-size: 8px;

    };
    
    @media (max-width: 768px){
        font-size: 10px;
    }
`;

export const RelatedImgWrap = styled.div`
    max-width: 555px;
    height: 100%
`;

export const RelatedImg = styled.img`
    width: 75%;
    border-radius: 58px;
    margin-left: 50px;

    @media (max-width: 768px) {
        width: 60%; 
        margin: 0 0 10px 30px;

    };

    @media (max-width: 480px) {
        width: 50%; 
    };
`;

export const RelatedCourseBtnLink = styled(LinkR)`
    border-radius: 10px;
    background: #D02C75;
    white-space: nowrap;
    padding: 8px 10px;
    color: #fff;
    font-size: 12px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: crimson;
        color: #fff;

    }
`;

export const RelatedDetails = styled.div`
    display:flex; 
    flex-direction:row;
    margin-top: -25px;

`;

export const RelatedData = styled.p`
    max-width: 440px;
    margin-bottom: 5px;
    font-size: 11px;
    line-height: 24px;
    color: black;

`;

export const RelatedDurationIcon = styled(FaClock)`
    color: #000;
`;

export const RelatedStartIcon = styled(FaCalendarAlt)`
    color: #000;
`;

export const RelatedFeeIcon = styled(FaMoneyBillWave)`
    color: #000;
`;

