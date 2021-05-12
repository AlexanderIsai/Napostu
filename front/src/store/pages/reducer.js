import {ACTIVE_USER_TITLE, CLOSE_MODAL, OPEN_MODAL, SET_POST_ID, SET_URL} from "./types";


const initialState = {
    isOpenModal: false,
    urlPost: null,
    modalPostId: null,
    userTitle: {
        isActive: false
    }

}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case OPEN_MODAL:
            return {...state, isOpenModal: action.payload}
        case CLOSE_MODAL:
            return {...state, isOpenModal: action.payload}
        case ACTIVE_USER_TITLE:
            return {...state, userTitle: {...state.userTitle, isActive: action.payload}}
        case SET_URL:
            return {...state, urlPost: action.payload}
        case SET_POST_ID:
            return {...state, modalPostId: action.payload}

        default:
            return state
    }
}

export default reducer;