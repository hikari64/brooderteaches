import React from 'react';
import CourseSections from "../CourseSections/";
import { courses } from './CourseData';


const AllCourses = () => {
    return (
        <>
        <CourseSections {...courses}/>
        </>
    )
}

export default AllCourses
