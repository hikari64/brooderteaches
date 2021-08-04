import React from 'react'
import styled from 'styled-components';


export const CourseContainer = styled.div`
    color: #fff;
    
    
    @media screen and (max-width: 768px){
        padding: 100px 0;
        
        
    }

    @media screen and (max-width: 480px){
        display: none;
    }
`;

export const CourseContainer1 = styled.div`
    color: #fff;
    
    
    @media screen and (max-width: 768px){
        display: none;
        
        
    }
`;

export const CourseSelectors = styled.div`
    display: grid;
    z-index: 1;
    height: 400px;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 60px;
    padding: 0 24px;
    justify-content: center;

`;

export const SelectorWrap = styled.div`
    display: grid;
    z-index: 1;
    height: 60px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    

`;

export const Column1Header = styled.h1`
    color: black;
    font-size: 18px;
    line-height: 1.1;
    font-weight: 600;

    @media and screen(max-width: 480px) {
        font-size: 16px;
    }; 
    
    @media and screen(max-width: 768px) {
        font-size: 16px;
    }; 
`;

export const Column1Details = styled.div`
    
    font-size: 14px;
    line-height: 24px;
    color: black;

    @media and screen(max-width: 768px) {
        font-size: 12px;

    };  
`;

export const CourseWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 600px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;


export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    display: inline-block;
    white-space: nowrap;
    margin: 2px;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    transition: all 150ms;
  `;

  export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const StyledCheckbox = styled.div`
    ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
    };

`;

export const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

export const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )


