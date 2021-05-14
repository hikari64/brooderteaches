import React, { useEffect, useState } from "react";
import {
  Checkbox,
  CourseContainer,
  CourseSelectors,
  Column1Header,
  Column1Details,
  SelectorWrap,
} from "./SideMenuElements";




const CourseSideMenu = ({setCourseLength,setCourseLevel,DataFilter}) => {
  // const state = { checked: false } setting state for the different periods
  const [isPwChecked, setIsPwChecked] = useState(false);
  const [isPmChecked, setIsPmChecked] = useState(false);
  const [isPaChecked, setIsPaChecked] = useState(true);
  const [periodKey, setPeriodKey] = useState(null);

  // setting state for the different levels of difficulty
  const [levelKey, setLevelKey] = useState(null);

  const [isLbChecked, setIsLbChecked] = useState(false);
  const [isLiChecked, setIsLiChecked] = useState(false);
  const [isLaChecked, setIsLaChecked] = useState(false);
  const [isLallChecked, setIsLallChecked] = useState(true);

  const setLevelCheck = (levelKey) =>{
     
    setIsLbChecked(false)
    setIsLiChecked(false)
    setIsLaChecked(false)
    setIsLallChecked(false)

    setIsLallChecked(levelKey === 0 ? true: false )
    setIsLbChecked(levelKey === 1 ? true: false )
    setIsLiChecked(levelKey === 2 ? true: false ) 
    setIsLaChecked(levelKey === 3 ? true: false ) 
    
  }
  const setPeriodCheck = (periodKey) =>{
     
    setIsPwChecked(false)
    setIsPmChecked(false)
    setIsPaChecked(false)
    setIsPaChecked(periodKey === 0 ? true: false )
    setIsPwChecked(periodKey === 1 ? true: false )
    setIsPmChecked(periodKey === 2 ? true: false ) 
    
  }
  // const handleCheckboxChange = event => {this.setState({ setIsChecked: event.target.checked })}
  //handle change for duration
  const handlePeriodCheckboxChange = event => {
     var value = parseInt(event.target.getAttribute('data-key'));
    setPeriodKey(value);
    setPeriodCheck(value);
    DataFilter(value,levelKey);
  };


  //handle change for level of difficulty
  const handleLevelCheckboxChange = event => {
    var lvalue = parseInt(event.target.getAttribute('data-key'));
    setLevelKey(lvalue);
    setLevelCheck(lvalue);
    DataFilter(periodKey,lvalue);
  };

  return (
      <>
      <CourseContainer>
        <CourseSelectors>
          <SelectorWrap>
            <Column1Header>Course Level</Column1Header>
            <Column1Details>
              <label>
                <Checkbox checked={isLallChecked} data-key="0" onClick={handleLevelCheckboxChange} />
                <span style={{ marginLeft: 30 }}>All</span>
              </label>
            </Column1Details>
            <Column1Details>
              <label>
                <Checkbox checked={isLbChecked} data-key="1" onClick={handleLevelCheckboxChange} />
                <span style={{ marginLeft: 30 }}>Beginner</span>
              </label>
            </Column1Details>
            <Column1Details>
              <label>
                <Checkbox checked={isLiChecked} data-key="2" onClick={handleLevelCheckboxChange} />
                <span style={{ marginLeft: 30 }}>Intermediate</span>
              </label>
            </Column1Details>
            <Column1Details>
              <label>
                <Checkbox checked={isLaChecked} data-key="3" onClick={handleLevelCheckboxChange} />
                <span style={{ marginLeft: 30 }}>Advanced</span>
              </label>
            </Column1Details>
          </SelectorWrap>

          <SelectorWrap>
            <Column1Header>Course Length</Column1Header>
            <Column1Details>
              <label>
                <Checkbox checked={isPaChecked} data-key="0" onClick={handlePeriodCheckboxChange} />
                <span style={{ marginLeft: 30 }}>Any</span>
              </label>
            </Column1Details>
            <Column1Details>
              <label>
                <Checkbox checked={isPwChecked} data-key="1" onClick={handlePeriodCheckboxChange} />
                <span style={{ marginLeft: 30 }}>Week</span>
              </label>
            </Column1Details>
            <Column1Details>
              <label>
                <Checkbox checked={isPmChecked} data-key="2"  onClick={handlePeriodCheckboxChange} />
                <span style={{ marginLeft: 30 }}>Month</span>
              </label>
            </Column1Details>
          </SelectorWrap>
        </CourseSelectors>
      </CourseContainer>
    </>
  );
};

export default CourseSideMenu;
