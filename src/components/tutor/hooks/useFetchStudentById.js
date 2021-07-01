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
      return { loading: true, student: [] };

    case ACTIONS.GET_DATA:
      return { ...state, loading: false, student: action.payload.student };

    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        student: [],
      };

    default:
      return state;
  }
}

export default function useFetchStudentById(params) {
  const [state, dispatch] = useReducer(reducer, { student: [], loading: true });

  useEffect(() => {
    //retrieving all the courses
    let allcourses = [];
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    async function getAllCourses() {
      const courses = firestore.collection("students").doc(params);
      
      courses.get().then((doc) => {
        if (doc.exists) {
          allcourses=doc.data();
          dispatch({
            type: ACTIONS.GET_DATA,
            payload: { student: allcourses },
          });
            console.log("lesson data: fetched", doc.data());
        } else {
            // doc.data() will be undefined in this case
            dispatch({
              type: ACTIONS.ERROR,
              payload: { error: "Tutor Doesn't Exist" },
            });
            console.log("No such document!");
            return;
        }
    })
  
    }

    getAllCourses();
  }, [params]);

  return state;
}
