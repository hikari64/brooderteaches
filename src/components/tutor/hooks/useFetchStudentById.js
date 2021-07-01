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
      return { loading: true, tutors: [] };

    case ACTIONS.GET_DATA:
      return { ...state, loading: false, tutors: action.payload.tutors };

    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        tutors: [],
      };

    default:
      return state;
  }
}

export default function useFetchStudentById(params) {
  const [state, dispatch] = useReducer(reducer, { tutors: [], loading: true });

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
            payload: { tutors: allcourses },
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
