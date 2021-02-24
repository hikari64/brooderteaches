import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #1D1D1D;
`;

export const FooterWrap = styled.div`
    padding: 40px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 1100px
`;

export const FooterLinksContainer = styled.div`
    justify-content: center;
    display: flex;

    @media screen and(max-width: 820px) {
        padding-top: 32px
    };
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;
    pointer: cursor;


    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%
    };
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled.div`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: #01bf71;
        transition: 0.3 ease-in-out;
    };
`;

export const SocialMedia = styled.section`
background-color: #000000;

`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    alilgn-items: center;
    max-width: 1100px;
    padding: 40px 40px 40px 40px;
    margin: 0px auto 0 auto;
    background-color: #000000;


    @media screen and (max-width: 820px){
        flex-direction: column;
    };
`;

export const SocialLogo = styled(Link)`
    color: white;
    justify-self: start;
    cursor: pointer;
    font-size: 14;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;
