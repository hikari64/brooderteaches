import React, { useEffect, useState } from "react";
import {
  Checkbox,
  CourseContainer,
  CourseSelectors,
  Column1Header,
  Column1Details,
  SelectorWrap,
} from "./SideMenuElements";
import {Row,Col,Container} from "react-bootstrap"



const CourseSideMenu = ({setCourseLength,setCourseLevel,DataFilter}) => {
  // const state = { checked: false } setting state for the different periods
 
  const [periodKey, setPeriodKey] = useState(0);

  // setting state for the different levels of difficulty
  const [levelKey, setLevelKey] = useState(0);



  
  //handle change for duration
  const handlePeriodCheckboxChange = event => {
     var value = parseInt(event.target.getAttribute('data-key'));
    setPeriodKey(value);
    DataFilter(value,levelKey);
  };


  //handle change for level of difficulty
  const handleLevelCheckboxChange = event => {
    var lvalue = parseInt(event.target.getAttribute('data-key'));
    setLevelKey(lvalue);
    DataFilter(periodKey,lvalue);
  };

  return (
      <>
      <Row >
        <CourseSelectors>
          <Row>
            <Column1Header>Course Level</Column1Header>
            <Column1Details>
              <label>
                <Checkbox checked={levelKey === 0 ? true: false} data-key="0" onClick={handleLevelCheckboxChange} />
                <span style={{ marginLeft: 30 }}>All</span>
              </label>
            </Column1Details>
            <Column1Details>
              <label>
                <Checkbox checked={levelKey === 1 ? true: false} data-key="1" onClick={handleLevelCheckboxChange} />
                <span style={{ marginLeft: 30 }}>Beginner</span>
              </label>
            </Column1Details>
            <Column1Details>
              <label>
                <Checkbox checked={levelKey === 2 ? true: false} data-key="2" onClick={handleLevelCheckboxChange} />
                <span style={{ marginLeft: 30 }}>Intermediate</span>
              </label>
            </Column1Details>
            <Column1Details>
              <label>
                <Checkbox checked={levelKey === 3 ? true: false} data-key="3" onClick={handleLevelCheckboxChange} />
                <span style={{ marginLeft: 30 }}>Advanced</span>
              </label>
            </Column1Details>
          </Row>

          <Row>
            <Column1Header className="col-sm-12 ">Course Length</Column1Header>
            <Column1Details>
              <label>
                <Checkbox checked={periodKey === 0 ? true: false} data-key="0" onClick={handlePeriodCheckboxChange} />
                <span style={{ marginLeft: 30 }}>Any</span>
              </label>
            </Column1Details>
            <Column1Details>
              <label>
                <Checkbox checked={periodKey === 1 ? true: false} data-key="1" onClick={handlePeriodCheckboxChange} />
                <span style={{ marginLeft: 30 }}>Week</span>
              </label>
            </Column1Details>
            <Column1Details>
              <label>
                <Checkbox checked={periodKey === 2 ? true: false} data-key="2"  onClick={handlePeriodCheckboxChange} />
                <span style={{ marginLeft: 30 }}>Month</span>
              </label>
            </Column1Details>
          </Row>
        </CourseSelectors>
      </Row>
    </>
  );
};

export default CourseSideMenu;
