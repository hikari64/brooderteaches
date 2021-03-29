import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";
import { FaCalendarAlt,  FaMoneyBillWave, FaClock} from "react-icons/fa";


export const CourseContainer = styled.div`
    color: #fff;
    padding: 0px 0 100px;
    
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

export const CourseDetails = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    width: 100%;
`;

export const CourseWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const CourseWrapper1 = styled.div`
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-left: auto;
    justify-content: center;
`;

export const CourseRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(2fr, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => 
    imgStart ? `'col2 col1'` : `'col1 col2'` };

    @media and screen (max-width: 768px) {
        grid-auto-columns: minmax(auto, 1fr);
        grid-template-areas: ${({imgStart}) => 
        imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` };
    };
`;
 
export const Column1 = styled.div`
    margin-bottom: 0;
    padding: 0 10px;
    grid-area: col1;

    @media screen and (max-width:768px) {
          font-size: 16px;
          text-align: center;
          vertical-align: middle;
          left: 0!important;
          margin-left: -200px;
        margin-bottom: -40px;
          color: white;
    }
`;

export const Column2 = styled.div`
    margin: 20px 0 20px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width:768px) {
        vertical-align: middle;
        margin-top: -350px;
        margin-left: 60px;
        margin-bottom: 50px;
        color: white;
    }
`;

export const CourseRow1 = styled.div`
    display: grid;
    grid-auto-columns: minmax(1fr, 1fr);
    align-items: right;
    grid-template-areas: ${({imgStart}) => 
    imgStart ? `'col2 col1'` : `'col1 col2'` };

    @media and screen (max-width: 768px) {
        grid-auto-columns: minmax(1fr, auto);
        grid-template-areas: ${({imgStart}) => 
        imgStart ? `'col2' 'col1'` : `'col2 col2' 'col1 col1'` };
    };
`;
 
export const Column11 = styled.div`
    margin: 30px 0 20px;
    grid-area: col1;
    text-align: left;
    margin-left: auto;
    line-height: 4.1;

    
    @media screen and (max-width:768px) {
    line-height: 1.1;
        text-align: left;
        vertical-align: middle;
        margin-left: 20px;
        margin-bottom: -100px;
        color: white;
    }
`;

export const Column22 = styled.div`
    margin: 20px 0 20px;
    grid-area: col2;

    @media screen and (max-width:768px) {
        vertical-align: middle;
        margin-top: 20px;
        margin-left: 100px;
        margin-bottom: 50px;
        color: white;
    }
`;


export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const Heading = styled(LinkR)`
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

    @media and screen(max-width: 480px) {
        font-size: 32px
    };  
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 12px;
    line-height: 24px;
    color: black;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%
`;

export const Img = styled.img`
    height: 50%; 
    width: 100%; 
    object-fit: contain;  
    border-radius: 10%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const CourseBtnLink = styled(LinkR)`
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

export const Details = styled.div`
    display:flex; 
    flex-direction:row;
    margin-top: -25px;

`;

export const Data = styled.p`
    max-width: 440px;
    margin-bottom: 5px;
    font-size: 11px;
    line-height: 24px;
    color: black;

`;

export const DurationIcon = styled(FaClock)`
    color: #000;
`;

export const StartIcon = styled(FaCalendarAlt)`
    color: #000;
`;

export const FeeIcon = styled(FaMoneyBillWave)`
    color: #000;
`;

