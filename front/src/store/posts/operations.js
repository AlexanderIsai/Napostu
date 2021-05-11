import axios from "axios";
import {LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS} from "./types";
import {setPosts} from "./actions";

const path = `/postfeed`;

export const getPosts = () => (dispatch) => {
    dispatch({type: LOAD_POSTS_REQUEST})

    axios(`${path}`)
        .then(res => {
            const data = res.data;
            dispatch({type: LOAD_POSTS_SUCCESS, payload: data})
            return data;
        })
        .then(res => {
            dispatch(setPosts(res));
            return res;
        })
        .catch(error => {
            dispatch({type: LOAD_POSTS_FAILURE, payload: error})
        })
}