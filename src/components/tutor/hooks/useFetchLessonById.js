import { useReducer, useEffect } from "react";

//importing firebase and initializing db constant
import { firestore } from "../../../firebase";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, lessons: [] };

    case ACTIONS.GET_DATA:
      return { ...state, loading: false, lessons: action.payload.courses };

    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        lessons: [],
      };

    default:
      return state;
  }
}

export default function useFetchLessonById(params,setStateMylessons) {

  useEffect(() => {
    //retrieving all the courses
    async function getAllCourses(setStateMylessons) {
      const courses = firestore.collection("lessons").doc(params);
      
      courses.get().then((doc) => {
        if (doc.exists) {
          setStateMylessons(doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            return;
        }
    })
  
    }

    getAllCourses(setStateMylessons);
  }, []);

  return ;
}
