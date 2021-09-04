import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const BarContainer = styled.div`
    margin: 0;
    padding: 0;
    background: grey;
    padding: 20px 30px;

`;

export const BarItems = styled.div`
    display: flex; 
    justify-content: space-evenly;  
    // background: ${( {isActive }) => (isActive ? 'red' : '#D02C75')}; 

      
    @media screen and (max-width: 480px){
        display: inline-block;
    }

`;

export const BarItem1 = styled.li`
    grid-area: item1;
    height: 40px;
    display: inline-block;
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 10px;
    background: ${( {isActive }) => (isActive ? 'red' : '#D02C75')};
`;

export const BarItem2 = styled.li`
    grid-area: item2;
    height: 40px;
    padding-top: 20px;
    padding-bottom: 40px;
    display: inline-block;

`;

export const BarItem3 = styled.li`
    grid-area: item3;
    height: 40px;
    padding-top: 20px;
    padding-bottom: 40px;
    display: inline-block;

`;

export const BarItem4 = styled.li`
    grid-area: item4;
    height: 40px;
    padding-top: 20px;
    padding-bottom: 40px;
    display: inline-block;

`;


export const BarLinks = styled(LinkR)`
    color: #100855;
    display: inline;
    text-decoration: none;
    transition: 0.3s background-color;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #D02C75;

    }
`;

export const BarMenu = styled.ul`
    display: grid;
    grid-template-areas: 'item1 item2 item3 item4 item5 item item7';
    grid-gap: 40px;
`;
