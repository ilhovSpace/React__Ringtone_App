import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { 
    GET_ALL_CATEGORY,
    SET_PARENT_CATEGORY_SELECTED,
    GET_ALL_SOUNDS,
    SET_CHILD_CATEGORY_SELECTED,
    AUTHORIZE_REQUEST,
    AUTHORIZE_LOGOUT_CLEAR_LOCALSTORAGE,
    BUY_RINGTONE_REQUEST,
    SEARCH_REQUEST,
    SEARCH_RESULT_CLEAN,
    PLAYER_STARTED_PLAY_WITH_ID,
    PLAYER_STOPED_PLAY
} from "./actionType";
import { 
    getAllCategoryFromServer, 
    getAllSoundsFromServer, 
    authorize, 
    buyRingtone, 
    searchTracks 
} from '../../services/services'


export function setChildCategorySelected(id){
    return (dispatch) => {
        dispatch({
            type: SET_CHILD_CATEGORY_SELECTED,
            payload: id
        })
    }
}

export function authorizeLogout(){
    localStorage.removeItem('login')
    localStorage.removeItem('pass')
    localStorage.removeItem('status')
    localStorage.removeItem('userInfo')
    return (dispatch) => {
        dispatch({
            type: AUTHORIZE_LOGOUT_CLEAR_LOCALSTORAGE,
        })
    }
}

export function setParentCategorySelected(id){
    return (dispatch) => {
        dispatch({
            type: SET_PARENT_CATEGORY_SELECTED,
            payload: id
        })
    }
}

export function getAllCategory() {
    return (dispatch) => {
        getAllCategoryFromServer()
        .then((res) => JSON.parse(res.request.response))
        .then((response) => {
            dispatch({
                type: GET_ALL_CATEGORY,
                payload: response.searchResult.element,
            })
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}

export function getAllSounds() {
    return (dispatch) => {
        getAllSoundsFromServer()
        .then((res) => JSON.parse(res.request.response))
        .then((response) => {
            dispatch({
                type: GET_ALL_SOUNDS,
                payload: response.searchResult.element,
            })
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}


export function authorizeRequest(login, pass, window = true) {
    function message(name){
        const MySwal = withReactContent(Swal)
        MySwal.fire(
            {
                position: 'top',
                icon: name ? 'success' : 'error',
                title: name ? `Hello, ${name}` : 'Subscriber authentication failed',
                showConfirmButton: false,
                timer: 1500
              }
           
        )
    }
    return (dispatch) => {
        authorize(login, pass)
        .then((res) => JSON.parse(res.request.response))
        .then((response) => {
            localStorage.setItem('status', true)
            localStorage.setItem('login', login)
            localStorage.setItem('pass', pass)
            localStorage.setItem('userInfo', JSON.stringify(response))
            if(window){message(response.subscriber.subsIdent)}
            return dispatch({
                type: AUTHORIZE_REQUEST,
                payload: response
            })
        })
        .catch(function (error) {
            if(window){message()}
            console.log(error);
        });
    }
}

export function buyRingtoneRequest(subs, pass, contentNo) {
    function message(response){
        const MySwal = withReactContent(Swal)
        MySwal.fire(
            {
                position: 'top',
                icon: response ? 'success' : 'error',
                title: response ? 'The purchase was successful' : 'The purchase was not successful',
                html: '',
                showConfirmButton: false,
                timer: 1500
              }
           
        )
    }
    return (dispatch) => {
        buyRingtone(subs, pass, contentNo)
        .then((response) => {
            message(response)
            authorize(subs, pass).then((res) => JSON.parse(res.request.response))
            .then(res => localStorage.setItem('userInfo', JSON.stringify(res))).then(()=>{
                return dispatch({
                    type: BUY_RINGTONE_REQUEST
                })
            })
        })
        .catch(function (error) {
            message()
            console.log(error);
        });
    }
}

export function searchRequest(title){
    return(dispatch) => {
        searchTracks(title)
        .then(res => JSON.parse(res.request.response))
        .then((res)=>{
            return dispatch({
                type: SEARCH_REQUEST,
                payload: res
        })
    })
    .catch(function (error) {
        console.log(error);
      });
    }
    
}

export function cleanSearchResult(){
    return (dispatch) => {
        dispatch({
            type: SEARCH_RESULT_CLEAN
        })
    }
}

export function setPlayTrackId(id){
    return (dispatch) => {
        dispatch({
            type: PLAYER_STARTED_PLAY_WITH_ID,
            payload: id
        })
    }
}

export function stopPlayer(){
    return (dispatch) => {
        dispatch({
            type: PLAYER_STOPED_PLAY
        })
    }
}