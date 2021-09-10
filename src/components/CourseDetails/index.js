import React from 'react';
import { Badge } from 'react-bootstrap';
import { CourseContainer1, CourseSelectors, Column1Header, Column1Details, SelectorWrap, } from '../CourseSideMenu.js/SideMenuElements';


const CourseDets = ({data}) => {


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
                        {data.skills && data.skills.map((skill,index)=>(
                       <Badge pill bg="secondary" variant="dark" text="dark" className=" bg-secondary mx-1">
                    {skill}
                    </Badge>
                      ))}
                        </Column1Details>
                    </SelectorWrap>
                </CourseSelectors>
            </CourseContainer1>
        </>
    )
}

export default CourseDets
