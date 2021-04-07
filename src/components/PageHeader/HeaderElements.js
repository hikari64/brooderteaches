import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    align-items: center;
    justify-content: left;
    padding 0 30px;
    height: 250px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        height: 280px;
    };
`;

export const HeaderBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%
    overflow: hidden;
`;

export const HeaderContent = styled.div`
    z-index: 3;
    width: 100%;
    max-width: 1100px;
    position: absolute;
    padding: 18px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderH1 = styled.h1`
    color: #fff;
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 30px
    };

    @media screen and (max-width: 48px) {
        font-size: 20px
    };
`;


export const HeaderP = styled.p`
    color: #fff;
    margin: 12px 2px;
    font-size: 25px;
    text-align: center;
    max-width: 10px

    @media screen and (max-width: 768px) {
        font-size: 20px
    };

    @media screen and (max-width: 48px) {
        font-size: 14px
    };
`;

export const ImgWrapper = styled.div`
    padding: 100px;
`;
export const Img = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;

    object-fit: cover;
    object-position: center right;
    margin-top: 180px;
    margin-left: 150px;

    @media screen and (max-width: 768px) {
        margin-left: 20px;
        margin-top: 200px;
    };
`;

