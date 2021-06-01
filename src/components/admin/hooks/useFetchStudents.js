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
      return { loading: true, students: [] };

    case ACTIONS.GET_DATA:
      return { ...state, loading: false, students: action.payload.students };

    case ACTIONS.ERROR:
      return {
        ...state,
        loadingg: false,
        error: action.payload.error,
        students: [],
      };

    default:
      return state;
  }
}

export default function useFetchStudents(params) {
  const [state, dispatch] = useReducer(reducer, {
    students: [],
    loading: true,
  });

  useEffect(() => {
    //retrieving all the Students
    let allStudents = [];
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    async function getAllStudents() {
      const students = firestore.collection("students");

      const snapshot = await students.get();
      if (snapshot.empty) {
        return;
      }

      snapshot.forEach((doc) => {
        allStudents.push(doc.data());
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { students: allStudents },
        });
      });
    }

    getAllStudents();
  }, [params]);

  return state;
}
