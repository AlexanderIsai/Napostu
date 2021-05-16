import axios from "axios";
import {LOAD_COMMENTS_FAILURE, LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS} from "./types";
import {setComments} from "./actions";


const path = `/commentfeed`;

export const getComments = () => (dispatch) => {
    dispatch({type: LOAD_COMMENTS_REQUEST})

    axios(`${path}`)
        .then(res => {
            const data = res.data;
            dispatch({type: LOAD_COMMENTS_SUCCESS, payload: false})
            return data;
        })
        .then(res => {
            dispatch(setComments(res));
            return res;
        })
        .catch(error => {
            dispatch({type: LOAD_COMMENTS_FAILURE, payload: error})
        })
}