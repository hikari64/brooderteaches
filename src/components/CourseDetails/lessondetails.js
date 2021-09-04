import React from 'react';
import { CourseContainer1, CourseSelectors, Column1Header, Column1Details, SelectorWrap, } from '../CourseSideMenu.js/SideMenuElements';


const LessonDets = ({data}) => {


    return (
        <>
        <CourseContainer1>
            <CourseSelectors>
                    <SelectorWrap>
                        <Column1Header>
                            Course Summary
                        </Column1Header>
                        <Column1Details>
                        {data && data.about}
                        </Column1Details>
                    </SelectorWrap>
                    <SelectorWrap>
                        <Column1Header>
                            Related Skills
                        </Column1Header>
                        <Column1Details>
                        {}
                        </Column1Details>
                    </SelectorWrap>
                </CourseSelectors>
            </CourseContainer1>
        </>
    )
}

export default LessonDets
