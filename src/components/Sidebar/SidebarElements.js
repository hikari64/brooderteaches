import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";


export const SidebarContainer = styled.aside`
    background: #0d0d0d;
    left: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    transition: 0.3s ease-in-out;
    top: 0;
    top: ${( {isOpen }) => (isOpen ? '0' : '-100%')};
    opacity: ${( {isOpen }) => (isOpen ? '100%' : '0')};

`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;    
    outline: none;
    background: transparent;
    cursor: pointer;
    font-size: 2rem;
    top: 1.2rem;
    right: 1.5rem;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: lfr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    cursor: pointer;
    list-style: none;
    transition: 0.2s ease-in-out;
    justify-content: center;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none; 

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;


