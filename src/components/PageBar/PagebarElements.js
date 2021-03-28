import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const BarContainer = styled.div`
    margin: 0;
    padding: 0;
    background: grey;
`;

export const BarItem1 = styled.li`
    grid-area: item1;
    height: 40px;
    display: inline-block;
`;

export const BarItem2 = styled.li`
    grid-area: item2;
    height: 40px;
    display: inline-block;
`;

export const BarItem3 = styled.li`
    grid-area: item3;
    height: 40px;
    display: inline-block;
`;

export const BarItem4 = styled.li`
    grid-area: item4;
    height: 40px;
    display: inline-block;
`;

export const BarLinks = styled(LinkR)`
    color: #fff;
    display: block;
    text-decoration: none;
    transition: 0.3s background-color;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #D02C75;

    }

    &:active {
        background: yellow;
        cursor: default;
        color: green;
    }
`;

export const BarMenu = styled.ul`
    display: grid;
    grid-template-areas: 'item1 item2 item3 item4 item5 item';
    grid-gap: 10px;
    padding: 15px;
`;

export const BarList = styled.li`
    font-size: 1.2em;
    line-height: 40px;
    height: 40px;
    border-bottom: 1px sollid #888;
`;