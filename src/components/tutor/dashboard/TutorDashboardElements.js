import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";
import { FaCalendarAlt,  FaMoneyBillWave, FaClock} from "react-icons/fa";
import ReactPlayer from "react-player";

export const ProfileImge = styled.img`
// top: 186px;
// left: 150px;
// width: 246px;
// height: 246px;
background: transparent url('${props=>props.picture}') 0% 0% no-repeat padding-box;
opacity: 1;
`;

export const TutorName = styled.h4`
color: var(--unnamed-color-e6e6e6);
text-align: left;
font: normal normal 600 54px/81px Poppins;
letter-spacing: 0px;
color: #E6E6E6;
opacity: 1;
`;
export const TutorLinks = styled(LinkR)`
color: var(--unnamed-color-ffffff);
text-align: left;
font: normal normal medium 24px/35px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
text-decoration: none;
font-size: 15px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #FFFFFF;

    }

    @media (max-width: 480px) {
        font-size: 12px
    };

    @media (max-width: 768px){
        font-size: 12px;
    }

    ${props=>props.active ? `
    background: var(--unnamed-color-d02c75) 0% 0% no-repeat padding-box;
    background: #D02C75 0% 0% no-repeat padding-box;
    border-radius: 15px;
    font-size: 15px;
    text-decoration: none;
        `:``
        }
`;


export const TutorSubNavbar = styled.div`
    background: var(--unnamed-color-e6e6e6) 0% 0% no-repeat padding-box;
    background: #E6E6E6 0% 0% no-repeat padding-box;
    opacity: 1;
`;

export const TutorSubNavbarLink = styled(LinkR)`
        color: var(--unnamed-color-100855);
        text-align: left;
        font: normal normal medium 25px/38px Poppins;
        letter-spacing: 0px;
        color: #100855;
        opacity: 1;
        font-size: 15px;
        text-decoration: none;
       
        ${props=>props.active ? `
            border-bottom: 2px solid;
            border-color: #100855;
            padding-bottom: 5px;
        `:``
        }

        &:active {
            

        }
        &:hover {
            transition: all 0.2s ease-in-out;
            color: #100855;
        }

        @media (max-width: 480px) {
            font-size: 12px
        };

        @media (max-width: 768px){
            font-size: 12px;
        }
`;
// Circle styles
export const NewCourseTabHeaders=styled.span`
    color: var(--unnamed-color-100855);
    text-align: left;
    font: normal normal medium 35px/53px Poppins;
    letter-spacing: 0px;
    color: #100855;
    opacity: 1;
    font-weight: 600;
`;
export const Circle = styled.div`
    width:70px;
    height:70px;
    border: 2px solid #000000;
    display:inline;
    ${props=>props.active ? `
    background: var(--unnamed-color-100855) 0% 0% no-repeat padding-box;
    background: #100855 0% 0% no-repeat padding-box;
    border: 2px solid #000000;
    opacity: 1;
        `:``
        }

`;