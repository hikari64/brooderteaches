import styled from 'styled-components';

export const CContainer = styled.div`
    display:flex; 
    flex-direction:row;
`;

export const CContainer2 = styled.div`
    display:flex; 
    flex-direction:column;
`;

export const Heading = styled.h1`
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
