
import { CREATE_TUTORIAL,  RETRIEVE_TUTORIALS,  UPDATE_TUTORIAL,
         DELETE_TUTORIAL,  DELETE_ALL_TUTORIALS                  } from "./types";

import TutorialDataService from "./../services/tutorial.service.js";
 
// --------------------------------------------------------------------------

export const createTutorial = (title, description) => async (dispatch) => {
    
    try {
        const res = await TutorialDataService.create({title, description});

        dispatch({
            type: CREATE_TUTORIAL,
            playload: res.data
        });
        return Promise.resolve(res.data); 

    } 
    catch (err) {
        return Promise.reject (err);
    }
}

// --------------------------------------------------------------------------
export const retrieveTutorials = () => async(dispatch) => {
    
    try {
        const res = await TutorialDataService.getAll();
        
        dispatch({
            type: RETRIEVE_TUTORIALS,
            playload: res.data,
        });
        
    } 
    catch (err){
        console.log(err);
    }
};

// --------------------------------------------------------------------------
export const updateTutorial = (id, data) => async (dispatch) => {
    
    try {
        const res = await TutorialDataService.update(id, data);
        
        dispatch({
            type: UPDATE_TUTORIAL,
            playload: data,
        });
        return Promise.resolve(res.data);  
    } 
    
    catch (err) {
        return Promise.reject(err);
    }
};

// --------------------------------------------------------------------------
export const deleteTutorial = id => async (dispatch) => {
    
    try {
        await TutorialDataService.delete(id);
        
        dispatch( {
            type: DELETE_TUTORIAL,
            playload: {id}
        });
    }
    
    catch (err) {
        return Promise.reject(err)
    }
};

// --------------------------------------------------------------------------
export const deleteAllTutorials = () => async (dispatch) => {
    
    try {
        const res=  await TutorialDataService.deleteAll();

        dispatch({
            type: DELETE_ALL_TUTORIALS,
            playload: res.data
        });

        return Promise.resolve(res.data);
    }

    catch (err) {
        return Promise.reject(err);
    }
};


export  const findTutorialsByTitle = title => async (dispatch) => {

    try { 
        const res= await TutorialDataService.findByTitle(title);

        dispatch({
            type: RETRIEVE_TUTORIALS,
            playload: res.data,
        });
    }

    catch (err) {
        console.log(err)
    }
};