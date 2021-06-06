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
      return { loadingg: true, courses: [] };

    case ACTIONS.GET_DATA:
      return { ...state, loadingg: false, courses: action.payload.courses };

    case ACTIONS.ERROR:
      return {
        ...state,
        loadingg: false,
        error: action.payload.error,
        courses: [],
      };

    default:
      return state;
  }
}

export default function useFetchCoursesByTutorId(params) {
  const [state, dispatch] = useReducer(reducer, { courses: [], loading: true });

  useEffect(() => {
    //retrieving all the courses
    let allcourses = [];
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    async function getAllCourses() {
      const courses = firestore.collection("courses").where("tutorId", "==", params);

      const snapshot = await courses.get();
      if (snapshot.empty) {
        return;
      }

      snapshot.forEach((doc) => {
        allcourses.push(doc.data());
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { courses: allcourses },
        });
      });
    }

    getAllCourses();
  }, [params]);

  return state;
}
