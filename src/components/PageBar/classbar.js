import React, {useState, useEffect} from "react";
import { BarContainer, BarItem1, BarItem2, BarItem3, BarItem4, BarMenu, BarLinks, BarItems } from "./PagebarElements";
// import { courses } from "../AllCourses/CourseData";
import { fbapp } from "../../firebase";
import { TutorSubNavbar, TutorSubNavbarLink } from "../tutor/dashboard/TutorDashboardElements";
import { Container } from "react-bootstrap";


const ClassBar = ({isActive,id,setActive}) => {
    let isCoursePage;

    

        isCoursePage = 

                    <TutorSubNavbar  >
                        <Container className="mx-lg-5 mx-sm-auto">
                             <Container className="container mx-md-5 py-4 ">
                        <TutorSubNavbarLink active={isActive === 1 && true}  onClick={()=>setActive(1)} className="mx-2" >
                            <BarLinks  to="#" onClick={()=>setActive(1)}>Unattended Classes</BarLinks>
                        </TutorSubNavbarLink>
                        <TutorSubNavbarLink active={isActive === 2 && true}  onClick={()=>setActive} className="mx-2">
                            <BarLinks to="#" onClick={()=>setActive(2)} >Past Classes</BarLinks>
                        </TutorSubNavbarLink>
                        {/* <BarItem3 isActive={isActive} onClick={toggleClass}> */}
                            {/* <BarLinks></BarLinks> */}
                        {/* </BarItem3> */}
                        {/* <BarItem4 isActive={isActive} onClick={toggleClass}> */}
                        {/* <BarLinks></BarLinks>
                        <BarLinks></BarLinks>
                        <BarLinks></BarLinks>
                        <BarLinks></BarLinks>
                        <BarLinks></BarLinks> */}
                        {/* </BarItem4> */}
                        </Container>
                        </Container>
                    </TutorSubNavbar>
        


    return (
        <> {isCoursePage}</>
    )
}

export default ClassBar
