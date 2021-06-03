import React, {useState, useEffect} from "react";
import { BarContainer, BarItem1, BarItem2, BarItem3, BarItem4, BarMenu, BarLinks, BarItems } from "./PagebarElements";
// import { courses } from "../AllCourses/CourseData";
import firestore from "../../firebase";


const PageBar = ({isActive, toggleClass, id}) => {
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

        isCoursePage = courses.map((data, index) =>

        <BarContainer>
                {/* <BarMenu> */}
                    <BarItems isActive={isActive} onClick={toggleClass} >
                        {/* <BarItem1 isActive={isActive} onClick={toggleClass} > */}
                            <BarLinks to={`/about/${data.id}`}>About</BarLinks>
                        {/* </BarItem1> */}
                        {/* <BarItem2 isActive={isActive} onClick={toggleClass}> */}
                            <BarLinks to={`/preview/${data.id}`}>Course Preview</BarLinks>
                        {/* </BarItem2> */}
                        {/* <BarItem3 isActive={isActive} onClick={toggleClass}> */}
                            <BarLinks to={`/preview/${data.id}`}>Reviews</BarLinks>
                        {/* </BarItem3> */}
                        {/* <BarItem4 isActive={isActive} onClick={toggleClass}> */}
                        <BarLinks to={`/preview/${data.id}`}>Projects and Resources</BarLinks>
                        <BarLinks></BarLinks>
                            <BarLinks></BarLinks>
                            <BarLinks></BarLinks>
                            <BarLinks></BarLinks>
                        {/* </BarItem4> */}
                    </BarItems>
                {/* </BarMenu> */}
            </BarContainer>
        

);

    return (
        <> {isCoursePage}</>
    )
}

export default PageBar
