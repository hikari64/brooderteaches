import React, {useState, useEffect} from 'react';
import { CourseContainer, CourseDetails, Column11, Column22, Img, CourseRow1, 
CourseWrapper1, Heading2, PlayerStyle, Videocontainer, CourseBtnLink } from '../CourseSections/CourseElements';
import { courses } from '../AllCourses/CourseData';
import CourseDets from './index'
import ReactPlayer from "react-player"
import RelatedCoursesSection from '../CourseSections/relatedcourses';

import { fbapp } from "../../firebase";


const CoursePrev = ({courses}) => {
    let isCoursePage;

    

    isCoursePage = courses.map((data) =>

<CourseContainer>
    <CourseDetails>
        <CourseWrapper1>
        <CourseBtnLink to={`/register/${data.id}`} style={{ textAlign: 'left'}}>
                    Take this Class
                  </CourseBtnLink>
            <CourseRow1>
                <Column11>
                    <PlayerStyle >
                        <ReactPlayer url={data.preview}
                            className={Videocontainer}
                            playing
                            width="100%"
                            height="100%"
                            controls={false}
                        />
                    </PlayerStyle>
                </Column11>
                <Column22>
                   <CourseDets data={data}/>
                </Column22>
            </CourseRow1>
        </CourseWrapper1>
        
    </CourseDetails>
<RelatedCoursesSection/>
</CourseContainer>

);
    
    return (
        <>
        {/* <Heading2 to='' >Course Preview</Heading2> */}
        
        {isCoursePage}
        </>
    )
}

export default CoursePrev
