import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";
import { FaCalendarAlt,  FaMoneyBillWave, FaClock} from "react-icons/fa";
import ReactPlayer from "react-player";

export const SignUpH1 = styled.h4`
color: var(--unnamed-color-100855);
text-align: center;
font: normal normal bold 44px/65px Poppins;
letter-spacing: 0px;
color: #100855;
// font-weight:700;

opacity: 1;`;

export const IndicatorHeader = styled.h4`
color: var(--unnamed-color-100855);
text-align: left;
font: normal normal bold 42px/63px Poppins;
letter-spacing: 0px;
color: #100855;
font-size:40px;

opacity:1;

@media (max-width: 480px) {
    font-size: 12px
};

@media (max-width: 768px){
    font-size: 12px;
}
`;
export const IndicatorSubHeader = styled.h4`
color: var(--unnamed-color-100855);
text-align: left;
font: normal normal medium 20px/30px Poppins;
font-size:15px;
letter-spacing: 0px;
color: #100855;
opacity:1;

@media (max-width: 480px) {
    font-size: 12px
};

@media (max-width: 768px){
    font-size: 12px;
}
`;