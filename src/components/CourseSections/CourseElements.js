import styled from 'styled-components';
import { Link as LinkR } from "react-router-dom";
import { FaCalendarAlt,  FaMoneyBillWave, FaClock} from "react-icons/fa";
import ReactPlayer from "react-player"


export const CourseContainer = styled.div`
    color: #fff;
    padding: 0px 0 100px;
    
    @media screen and (max-width: 768px){
        padding: 70px 0;
    }
`;

export const RegContainer = styled.div`
    color: #fff;
    padding: 0px 0 50px;
    
    @media screen and (max-width: 768px){
        padding: 70px 0;
    }
`;
export const CourseDetails = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    width: 100%;
`;

export const CourseOutlineStyle = styled.div`
    display: flex;
`;

export const OutlineVid = styled.div`
    -ms-flex: 1;  /* IE 10 */  
    flex: 1;
`;

export const OutlineContent = styled.div`
    -ms-flex: 1;  /* IE 10 */  
    flex: 1;
    padding: 20px;
`;

export const OutlineList = styled.ul`
    list-style-type: square;
`;

export const Outline = styled.li`
    font-size: 13px;
    color: black;
    line-height: 2;
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

    @media (max-width: 480px){
        margin-top: -100px;
    }
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
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => 
    imgStart ? `'col2 col1'` : `'col2 col1'` };

    @media and screen (max-width: 768px) {
        grid-auto-columns: minmax(auto, 1fr);
        grid-template-areas: ${({imgStart}) => 
        imgStart ? `'col1' 'col2'` : `'col1' 'col2'` };
    };
`;
 
export const Column1 = styled.div`
    
    margin-bottom: -100px;
    padding: 70px 10px 10px;
    grid-area: col1;

    @media screen and (max-width:768px) {
          font-size: 16px;
          text-align: left;
          vertical-align: middle;
          left: 0!important;
          margin-left: -200px;
        margin-top: 150px;
          color: white;
    }
`;

export const Column2 = styled.div`
 

    margin: 30px 0 -90px 0;
    grid-area: col2;

    @media screen and (max-width:768px) {
        vertical-align: middle;
        margin-bottom: 50px;
        margin-top: -100px;
        color: white;
        grid-area: col2;
    }

    @media (max-width: 480px) {
        margin: 30px 0 120px 0;

    };
`;

export const CourseRow1 = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: right;
    grid-template-areas: ${({imgStart}) => 
    imgStart ? `'col2 col1 col1'` : `'col1 col1 col2'` };
    margin-left: -140px;

    @media screen and (max-width: 768px) {
        margin-top: -120px;
        grid-auto-columns: minmax(1fr, auto);
        grid-template-areas: ${({imgStart}) => 
        imgStart ? `'col2' 'col1'` : `'col2 col2' 'col1 col1'` };
    }; background: url(${({imgStart}) => 
    imgStart });

    @media (max-width: 1024px){
        margin-left: 40px;
    }

    @media (max-width: 480px){
        margin-left: -60px;
        margin-top: -100px;
       
    }
`;
 
export const Column11 = styled.div`
    margin: 30px 0 20px;
    grid-area: col1;
    text-align: left;
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

export const ExtraInfo = styled.div`
    color: black;
    font-size: 17px;

    @media (max-width: 480px) {
        max-width: 100%;
        padding-left: 50px;
        margin-top: -30px;
    };
`;

export const TextWrapper = styled.div`
    width: 540px;
    padding-top: 0;
    padding-bottom: 50px;

    @media (max-width: 480px) {
        max-width: 100%;
        padding-left: 50px;
        margin-top: -30px;
    };
`;

export const Heading = styled(LinkR)`
    color: black;
    font-size: 25px;
    margin-bottom: 24px;
    line-height: 1.1;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
  
    

    &:hover {
        transition: all 0.2s ease-in-out;

    }

    @media (max-width: 480px) {
        font-size: 14px
    };  

`;

export const Heading2 = styled.h1`
padding-top
    width: 100%;
    font-size: 20px;
    color: black;

    @media (max-width: 480px) {
        font-size: 16px;
        // margin-bottom: -60px;
        // margin-left: 350px;
        // margin-top: 320px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;
    color: black;

    @media (max-width: 480px) {
        font-size: 12px;

    };  
`;

export const Subtitle1 = styled.p`
    margin-bottom: 35px;
    font-size: 14px;
    line-height: 28px;
    color: black;

    @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 24px;
    };
`;

export const ImgWrap = styled.div`
    max-width: 444px;
    height: 100%;
    
`;

export const Img = styled.img`
    width: 90%;
    height:300px; 
    object-fit: cover;  
    border-radius: 2rem;
    margin: 0 0 10px 20px;
    padding-right: 0;
    

    @media (max-width: 1024px) {
        width: 80%; 
        height:300px; 

        // margin: 0 0 10px 50px;

    };

    @media (max-width: 768px) {
        width: 100%; 
        height:10rem; 

        

        // margin: 0 0 10px 60px;

    };

    @media (max-width: 480px) {
        width: 100%;
        height:10rem; 
        margin: 15px auto;
        // margin-left: -20px;
        // margin-top: -70px;
        border-radius: 1rem;

        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    };
`;

export const CourseBtnLink = styled(LinkR)`
        border-radius: 50px;
        display:inline; 
        background: #d02c75;
        white-space: nowrap;
        padding: 10px 22px;
        color: #fff;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        margin-right: 10px;
        margin-bottom:0.3rem;
        

    &:hover {
        transition: all 0.2s ease-in-out;
        background: crimson;
        color: #fff;

    }

    
`;

export const Details = styled.div`
    display:flex; 
    flex-direction:row;
    flex-wrap:wrap;
    // margin-top: -25px;
    // font-size: 2rem;
    @media screen and (max-width:768px) {
        flex-direction:;

           
        }
`;

export const Data = styled.p`
    display:block;
    // max-width: 440px;
    font-size: 1rem;
    line-height: 24px;
    color: black;
    padding-right: 15px;
    // margin: 10px;


    @media screen and (max-width:768px) {
        display:block;
        line-height: 1.1;
    font-size: 1rem;
    // margin:5px;
           
        }
    @media screen and (max-width: 480px){
        font-size: 1rem;
        display:block;

      }
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

export const PlayerStyle = styled.div`
// padding-top: -56.25%;
height: 400px;
  width: 640px;
  border: 5px solid;
  background: #efefef;
  border-radius: 4rem;
  overflow: hidden;

  @media screen and (max-width: 480px){
    height: 200px;
    width: 300px;
    margin-left: 35px;
  }
`;

export const Videocontainer = styled.div`
    // position: absolute;
    // top: 0;
    // left: 0;

    height: 400px;
  width: 640px;
  object-fit: cover;
  border-radius: 4rem;

  @media screen and (max-width: 480px){
    height: 20px;
    width: 340px;
  }
`;


