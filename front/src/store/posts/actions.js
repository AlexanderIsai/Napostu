import {SET_POSTS} from "./types";


export const setPosts = (data) => {
    return ({type: SET_POSTS, payload: data})
}