import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;;
    padding 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%
    overflow: hidden;
`;

export const HeroContent = styled.div`
    z-index: 3;
    width: 100%;
    max-width: 1100px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 80px;
    text-align: justify;

    @media screen and (max-width: 768px) {
        font-size: 60px
    };

    @media screen and (max-width: 48px) {
        font-size: 32px
    };
`;


export const HeroP = styled.p`
    color: #fff;
    margin: 12px 2px;
    font-size: 15px;
    text-align: justify;
    max-width: 10px

    @media screen and (max-width: 768px) {
        font-size: 24px
    };

    @media screen and (max-width: 48px) {
        font-size: 18px
    };
`;


export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


