import {
    AUTHORIZE_REQUEST, 
    AUTHORIZE_LOGOUT_CLEAR_LOCALSTORAGE, 
    BUY_RINGTONE_REQUEST, 
    SEARCH_REQUEST, 
    SEARCH_RESULT_CLEAN } from "../actions/actionType"

const initialState = {
    authorize: {
        status: localStorage.getItem('status') ? localStorage.getItem('status') : false,
        login: localStorage.getItem('login') ? localStorage.getItem('login') : null,
        pass: localStorage.getItem('pass') ? localStorage.getItem('pass') : null,
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
        },
    searchResponse: null
}

export default function reducer(state = initialState, action){
    switch(action.type){

        case AUTHORIZE_REQUEST:
                return {
                 ...state,
                 authorize: {
                     status: true,
                     login: localStorage.getItem('login'),
                     pass: localStorage.getItem('pass'),
                     userInfo: action.payload }
                    }  

        case AUTHORIZE_LOGOUT_CLEAR_LOCALSTORAGE:
                return {
                 ...state,
                 authorize: {
                     status: false, 
                     userInfo: null}
                    }  

        case BUY_RINGTONE_REQUEST:
             return {
              ...state,
              authorize: {
                  status: true,
                  login: localStorage.getItem('login'),
                  pass: localStorage.getItem('pass'),
                  userInfo: JSON.parse(localStorage.getItem('userInfo'))}
             }

        case SEARCH_REQUEST:
                return {
                 ...state,
                 searchResponse: action.payload                      
           } 

        case SEARCH_RESULT_CLEAN:
            return {
             ...state,
             searchResponse: null                            
       }

       default: return state   
    }
}