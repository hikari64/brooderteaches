import React, { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/TutorContext";
import { firestore, timestamp, AddArrayField } from "../../../firebase";
import AddFile from "./useAddFile";
import { storage } from "../../../firebase";

const PublishCourse = (courseId) => {
  try {
    firestore.collection("courses").doc(courseId).update({
      published: true,
    });
  } catch (error) {
    console.log(`error`, error);
  }
};

export default PublishCourse;
