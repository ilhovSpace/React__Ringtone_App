import {GET_ALL_CATEGORY, 
    SET_PARENT_CATEGORY_SELECTED, 
    GET_ALL_SOUNDS, 
    SET_CHILD_CATEGORY_SELECTED } from "../actions/actionType"

const initialState = {
    parentCategory: [],
    allSounds: [],
    selectedParentCategoryId: 0,
    selectedChildCategoryId: 0,
    soundPlayId: 0,
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_CATEGORY:
            return {
                ...state,
                parentCategory: action.payload
            }
        case SET_PARENT_CATEGORY_SELECTED:
            return {
                ...state,
                selectedParentCategoryId: action.payload
            }
        case SET_CHILD_CATEGORY_SELECTED:
            return {
                ...state,
                selectedChildCategoryId: action.payload
            }                
        case GET_ALL_SOUNDS:
                return {
                    ...state,
                    allSounds: action.payload
                }  
        default: return state         
    }    
}
