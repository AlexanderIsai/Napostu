import {LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, SET_POSTS} from "./types";


const initialState = {
    posts:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_POSTS_REQUEST:
            return {...state, isLoading: true}

        case LOAD_POSTS_SUCCESS:
            return {...state, isLoading: action.payload}

        case SET_POSTS:
            return {...state, posts: action.payload}

        case LOAD_POSTS_FAILURE:
            return {...state, posts: action.payload}

        default:
            return state;

    }
}

export default reducer;