import React from "react";
import { Col, Button, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import {
  CourseTitle,
  ReviewHeadings,
  CourseDescription,
  PlayerStyle,
  Videocontainer,
} from "../../dashboard/TutorDashboardElements";
import {
  CourseContainer,
  // CourseDetails,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Column1,
  Column2,
  Img,
  CourseRow,
  CourseWrapper,
  CourseBtnLink,
  Details,
  Data,
  DurationIcon,
  StartIcon,
  FeeIcon,
} from "../../../CourseSections/CourseElements";
import { Link } from "react-router-dom";

export const CourseReviewDetails = (props) => {
  return (
    <Col xs={8} className="">
      <CourseTitle className="m-2 mx-auto">{props.courses.title}</CourseTitle>
      <CourseDescription>{props.courses.tag}</CourseDescription>
      <hr />
      <Details className="row">
        <Data className="col">
          <DurationIcon /> {props.courses.duration}
        </Data>
        <Data className="col">
          <StartIcon />
          {props.courses.startDate}
        </Data>
        <Data className="col">
          <FeeIcon />
          {props.courses.price}
        </Data>
      </Details>

      <ReviewHeadings className="m-2 mx-auto">About This Course</ReviewHeadings>
      <CourseDescription>{props.courses.about}</CourseDescription>
    </Col>
  );
};
export const CourseDetails = (props) => {
  return (
    <Col xs={8} className="mx-md-auto">
      <ReviewHeadings className="m-2 mx-auto">Course Title</ReviewHeadings>
      <CourseTitle>{props.courses.title}</CourseTitle>
      <ReviewHeadings className="m-2 mx-auto">
        Course Description
      </ReviewHeadings>
      <CourseDescription>{props.courses.about}</CourseDescription>
      <ReviewHeadings className="m-2 mx-auto">
        Introductory Video
      </ReviewHeadings>
      <PlayerStyle>
        <ReactPlayer
          url={props.courses.preview}
          className={Videocontainer}
          playing
          width="100%"
          height="100%"
          controls={true}
        />
      </PlayerStyle>
    </Col>
  );
};
export const ViewLessonDetails = (props) => {
  return (
    <Col xs={8} className="mx-md-auto ">
      <ReviewHeadings className="m-2 mx-auto">Lesson Title</ReviewHeadings>
      <CourseTitle>{props.courses.title}</CourseTitle>
      <ReviewHeadings className="m-2 mx-auto">Lesson Summary</ReviewHeadings>
      <CourseDescription>{props.courses.summary}</CourseDescription>
      <ReviewHeadings className="m-2 mx-auto">Lesson Video</ReviewHeadings>
      <PlayerStyle>
        <ReactPlayer
          url={props.courses.video}
          className={Videocontainer}
          playing
          width="100%"
          height="100%"
          controls={true}
        />
      </PlayerStyle>
    </Col>
  );
};
export const AccessDenied = (props) => {
  return (
    <Col md={8} className="mx-md-auto ">
      <ReviewHeadings className="m-2 mx-auto">Oops</ReviewHeadings>

      <CourseDescription>
        You must be verified to create a course.
      </CourseDescription>
      <CourseDescription className="text-info">
        if you haven't uploaded your ID for verification , follow this link to
      </CourseDescription>
      <Col className="text-center m-3">
        <Link to={"/tutor-profile"} className="primary-button ">
          Verify your account
        </Link>
      </Col>
    </Col>
  );
};
