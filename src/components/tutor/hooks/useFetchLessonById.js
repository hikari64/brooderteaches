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
      return { ...state, loading: false, lessons: action.payload.lessons };

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

export default function useFetchLessonById(params) {
  const [state, dispatch] = useReducer(reducer, { lessons: [], loading: true });

  useEffect(() => {
    //retrieving all the courses
    let allcourses = [];
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    async function getAllCourses() {
      const courses = firestore.collection("lessons").doc(params);
      
      courses.get().then((doc) => {
        if (doc.exists) {
          allcourses=doc.data();
          dispatch({
            type: ACTIONS.GET_DATA,
            payload: { lessons: allcourses },
          });
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            return;
        }
    })
  
    }

    getAllCourses();
  }, [params]);

  return state;
}
