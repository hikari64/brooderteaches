import React from 'react';
import { BarContainer, BarItem1, BarItem2, BarItem3, BarItem4, BarMenu, BarLinks } from "./PagebarElements";
import { courses } from "../AllCourses/CourseData";

const PageBar = ({isActive, toggleClass, id}) => {
    let isCoursePage;

    isCoursePage = courses.filter(
        (e) => e.id == id).map((courses, index) => 

        <BarContainer>
                <BarMenu>
                    {/* <BarList> */}
                        <BarItem1 isActive={isActive} onClick={toggleClass} >
                            <BarLinks to={`/about/${courses.id}`}>About</BarLinks>
                        </BarItem1>
                        <BarItem2 isActive={isActive} onClick={toggleClass}>
                            <BarLinks to={`/preview/${courses.id}`}>Course Preview</BarLinks>
                        </BarItem2>
                        <BarItem3 isActive={isActive} onClick={toggleClass}>
                            <BarLinks to='/item1'>Reviews</BarLinks>
                        </BarItem3>
                        <BarItem4 isActive={isActive} onClick={toggleClass}>
                            <BarLinks to='/item1'>Projects and Resources</BarLinks>
                        </BarItem4>
                    {/* </BarList> */}
                </BarMenu>
            </BarContainer>
        

);

    return (
        <> {isCoursePage}</>
    )
}

export default PageBar
