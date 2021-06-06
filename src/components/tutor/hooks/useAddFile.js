import { useReducer ,useEffect} from "react";
import {storage} from '../../../firebase';

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

  
function AddFile(file,path){
    const [state, dispatch] = useReducer(reducer, { progress:0, loading: true });

    let progress = 0
    let error = '';
    let newUrl ='';
    
        //references
        const storageRef = storage.ref();
        storageRef.put(path/file).on('state_changed',(snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            
            dispatch({
                type: ACTIONS.MAKE_REQUEST,
                payload: { progress: percentage },
              });
        }, (err) => {
            error =err;
        }, async () =>{
            const url = await storageRef.getDownloadURL();
            dispatch({
                type: ACTIONS.GET_DATA,
                payload: { newUrl:  url},
              });
        })
        
    

        return state;

}

export default AddFile;