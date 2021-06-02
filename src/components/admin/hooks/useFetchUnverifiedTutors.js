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
        loadingg: false,
        error: action.payload.error,
        tutors: [],
      };

    default:
      return state;
  }
}

export default function useFetchTutors(params) {
  const [state, dispatch] = useReducer(reducer, {
    tutors: [],
    loading: true,
  });

  useEffect(() => {
    //retrieving all the tutors
    let alltutors = [];
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    async function getAlltutors() {
      const tutors = firestore
        .collection("tutors")
        .where("verified", "==", false);

      const snapshot = await tutors.get();
      if (snapshot.empty) {
        return;
      }

      snapshot.forEach((doc) => {
        alltutors.push(doc.data());
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { tutors: alltutors },
        });
      });
    }

    getAlltutors();
  }, [params]);

  return state;
}
