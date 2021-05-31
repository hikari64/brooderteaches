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
      return { loadingg: true, admins: [] };

    case ACTIONS.GET_DATA:
      return { ...state, loadingg: false, admins: action.payload.admins };

    case ACTIONS.ERROR:
      return {
        ...state,
        loadingg: false,
        error: action.payload.error,
        admins: [],
      };

    default:
      return state;
  }
}

export default function useFetchAdmins(params) {
  const [state, dispatch] = useReducer(reducer, { admins: [], loading: true });

  useEffect(() => {
    //retrieving all the admins
    let alladmins = [];
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    async function getAlladmins() {
      const admins = firestore.collection("admins");

      const snapshot = await admins.get();
      if (snapshot.empty) {
        return;
      }

      snapshot.forEach((doc) => {
        alladmins.push(doc.data());
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { admins: alladmins },
        });
      });
    }

    getAlladmins();
  }, [params]);

  return state;
}
