import React ,{ useState ,useEffect} from "react";
import {storage} from '../../../firebase';

function AddFile(file){
    let progress = 0
    let error = '';
    let newUrl ='';
    
        //references
        const storageRef = storage.ref(file.name);
        storageRef.put(file).on('state_changed',(snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            progress = percentage;
        }, (err) => {
            error =err;
        }, async () =>{
            const url = await storageRef.getDownloadURL();
            newUrl=url;
        })
        
    

    return {progress,newUrl,error}

}

export default AddFile;