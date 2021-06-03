import React, {useState, useEffect} from 'react';
import { CourseContainer, CourseDetails, Column11, Column22, Img, CourseRow1, 
CourseWrapper1, Heading2, PlayerStyle, Videocontainer, CourseBtnLink } from '../CourseSections/CourseElements';
import { courses } from '../AllCourses/CourseData';
import CourseDets from './index'
import ReactPlayer from "react-player"
import RelatedCoursesSection from '../CourseSections/relatedcourses';

import firestore from "../../firebase";


const CoursePrev = ({id}) => {
    let isCoursePage;

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async()=>{
        const db = firestore.firestore();
        db.collection('courses').where("id", "==", id).get().then((querySnapshot) => {
                
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach(element => {
            var data = element.data();
            setCourses(arr => [...arr , data]);
            console.log(data.length)
                
        });
    })
    }; fetchCourses();
    }, [])

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
                   <CourseDets/>
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
