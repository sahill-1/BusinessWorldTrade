<!-- STORE.JS  -->
import {createStore} from "redux";

<!-- Creating Initial State -->
cont initialState = {
    formData : {},
}

<!-- Creating Reducer -->
const formReducer = (state=initialState, action) =>{
    switch(action.type){
        case "UPDATE_FORM_DATA" :
        return {
            ...state,
            formData: {
                ...state.formData,
                [action.payload.fieldName]: action.payload.fieldValue
            }
        }
        default : return state
    }
}

const store = createStore(formReducer)
export default store
<!-- STORE.JS -->


<!-- FORM.JS -->
import 


<!-- FORM.JS -->
import React, {useState} from "react";
import {useDispatch} from "react-redux";

const Form = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const dispatch = useDispatch();
    
}