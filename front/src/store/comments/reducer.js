import {LOAD_COMMENTS_FAILURE, LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, SET_COMMENTS} from "./types";


const initialState = {
    comments:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_COMMENTS_REQUEST:
            return {...state, isLoading: true}

        case LOAD_COMMENTS_SUCCESS:
            return {...state, isLoading: false}

        case SET_COMMENTS:
            return {...state, comments: action.payload}

        case LOAD_COMMENTS_FAILURE:
            return {...state, comments: action.payload}

        default:
            return state;

    }
}

export default reducer;
// import {} from "../comments/types";
//
// const initialState = {
//   isFieldOpenToAddComment: false,
// }
//
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//
//     case TOGGLE_FAVORITE:
//       return {...state, isLoading: true}
//
//     case SET_USERS:
//       return {...state, users: action.payload}
//
//
//     default:
//       return state;
//   }
// }
//
// export default reducer;

