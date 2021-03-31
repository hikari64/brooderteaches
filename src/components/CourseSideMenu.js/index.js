import React, {useState} from 'react';
import { Checkbox, CourseContainer, CourseSelectors, Column1Header, Column1Details, SelectorWrap, } from './SideMenuElements';


const CourseSideMenu = () => {

    // const state = { checked: false }
    const[isChecked, setIsChecked] = useState(false);

    // const handleCheckboxChange = event => {this.setState({ setIsChecked: event.target.checked })}
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    };

    return (
        <>
        <CourseContainer>
            <CourseSelectors>
                    <SelectorWrap>
                        <Column1Header>
                            Course Level
                        </Column1Header>
                        <Column1Details>
                            <label>
                                <Checkbox checked={isChecked} onChange={handleCheckboxChange}/>
                                <span style={{ marginLeft: 30 }}>Beginner</span>
                            </label>
                        </Column1Details>
                        <Column1Details>
                        
                            <label>
                                <Checkbox checked={isChecked} onChange={handleCheckboxChange}/>
                                <span style={{ marginLeft: 30 }}>Intermediate</span>
                            </label>
                        </Column1Details>
                        <Column1Details>
                        
                            <label>
                                <Checkbox checked={isChecked} onChange={handleCheckboxChange}/>
                                <span style={{ marginLeft: 30 }}>Advanced</span>
                            </label>
                        </Column1Details>
                    </SelectorWrap>
                    <SelectorWrap>
                        <Column1Header>
                            Course Length
                        </Column1Header>
                        <Column1Details>
                            <label>
                                <Checkbox checked={isChecked} onChange={handleCheckboxChange}/>
                                <span style={{ marginLeft: 30 }}>Week</span>
                            </label>
                        </Column1Details>
                        <Column1Details>
                            <label>
                                <Checkbox checked={isChecked} onChange={handleCheckboxChange}/>
                                <span style={{ marginLeft: 30 }}>Month</span>
                            </label>
                        </Column1Details>
                    </SelectorWrap>
                </CourseSelectors>
            </CourseContainer>
        </>
    )
}

export default CourseSideMenu
