import {SET_COMMENTS} from "./types";


export const setComments = (data) => {
    return ({type: SET_COMMENTS, payload: data})
}