import React from 'react'
import { Col } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { CourseTitle, ReviewHeadings ,CourseDescription,PlayerStyle,Videocontainer} from '../../dashboard/TutorDashboardElements'

export const CourseDetails =(props)=>{
    return(
        <Col xs={8} className="mx-md-auto">
            <ReviewHeadings className="m-2 mx-auto">
            Course Title
            </ReviewHeadings>
            <CourseTitle>
            {props.courses.title}

            </CourseTitle>
            <ReviewHeadings className="m-2 mx-auto">Course Description</ReviewHeadings>
            <CourseDescription>
            {props.courses.about}
            </CourseDescription>
            <ReviewHeadings  className="m-2 mx-auto">Introductory Video</ReviewHeadings>
            <PlayerStyle >
                        <ReactPlayer url={props.courses.preview}
                            className={Videocontainer}
                            playing
                            width="100%"
                            height="100%"
                            controls={false}
                        />
            </PlayerStyle>
      </Col>

    )
}  
export const ViewLessonDetails =(props)=>{
    return(
        <Col xs={8} className="mx-md-auto ">
            <ReviewHeadings className="m-2 mx-auto">
            Lesson Title
            </ReviewHeadings>
            <CourseTitle>
            {props.courses.title}

            </CourseTitle>
            <ReviewHeadings className="m-2 mx-auto">Lesson Summary</ReviewHeadings>
            <CourseDescription>
            {props.courses.summary}
            </CourseDescription>
            <ReviewHeadings  className="m-2 mx-auto">Lesson Video</ReviewHeadings>
            <PlayerStyle >
                        <ReactPlayer url={props.courses.video}
                            className={Videocontainer}
                            playing
                            width="100%"
                            height="100%"
                            controls={true}
                        />
            </PlayerStyle>
      </Col>

    )
}  