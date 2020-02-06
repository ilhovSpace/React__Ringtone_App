import {
    PLAYER_STARTED_PLAY_WITH_ID, 
    PLAYER_STOPED_PLAY
 } from "../actions/actionType"

const initialState = {
    playerPlayWithId: 0,
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case PLAYER_STARTED_PLAY_WITH_ID:
            return {
                ...state,
                playerPlayWithId: action.payload
            }
        case PLAYER_STOPED_PLAY:
            return {
                ...state,
                playerPlayWithId: 0
            }
        default: return state        
         }    
}
