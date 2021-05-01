
import { CREATE_TUTORIAL, RETRIEVE_TUTORIALS,  UPDATE_TUTORIAL,
         DELETE_TUTORIAL,  DELETE_ALL_TUTORIALS,              } from "../actions/types";


const initialState = [];

function tutorialReducer (tutorials = initialState, action) {
    const {type, playload } =  action;

    switch (type) {
        case CREATE_TUTORIAL:
            return [ ...tutorials, playload];
        
        case RETRIEVE_TUTORIALS:
            return playload;
        
        case UPDATE_TUTORIAL:
            return tutorials.map((tutorial) => {
                if (tutorial.id === playload.id) {
                    return {
                        ...tutorial,
                        ...playload,
                    };
                } else {
                    return tutorial;
                }
            })

        case DELETE_TUTORIAL:
            return tutorials.filter( ({id}) => id !==playload.id);

        case DELETE_ALL_TUTORIALS:
            return [];

        default:
            return tutorials;
    }
};

export default tutorialReducer;