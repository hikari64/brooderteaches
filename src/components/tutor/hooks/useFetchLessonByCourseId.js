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
    
    case ACTIONS.EMPTY_DATA:
      return { loading: false, lessons: [] };

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

export default function useFetchLessonByCourseId(params) {
  const [state, dispatch] = useReducer(reducer, { lessons: [], loading: true });

  useEffect(() => {
    //retrieving all the lessons form course
    
    let allcourses = [];
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    async function getAllCourses() {
      const courses = firestore.collection("lessons").where("courseId", "==", params);
      
      const snapshot = await courses.get();
      if (snapshot.empty) {
       
        dispatch({
          type: ACTIONS.EMPTY_DATA, 
        });
        return;
      }

      snapshot.forEach((doc) => {
        allcourses.push(doc.data());
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { lessons: allcourses  },
        });
      });
  
    }

    getAllCourses();
  }, [params]);

  return state;
}
