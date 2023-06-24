import { SET_FORM_DATA } from "./actions.js";

const initialState = {
    FormData : {},
}

const formReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_FORM_DATA : 
        return{
            ...state, FormData: action.payload
        };
        default: return state
    };
};

export default formReducer;