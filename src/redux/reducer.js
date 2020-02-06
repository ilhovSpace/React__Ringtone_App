import categoryReducer from './reducers/categoryReducer'
import authorizeReducer from './reducers/authorizeReducer'
import playerReducer from './reducers/playerReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    categoryReducer,
    authorizeReducer,
    playerReducer
})