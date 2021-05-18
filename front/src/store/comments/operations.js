import axios from "axios";
import {LOAD_COMMENTS_FAILURE, LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS} from "./types";
import {requestHeaders} from "../../helpers/requests_helper";
import {setComments} from "./actions";
import {getPosts} from "../posts/operations";

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
};


export const addComment = (commentValue, actPost, userAct) => (dispatch) => {
  axios({
    method: 'POST',
    url: '/addcomment',
    data: `commentValue=${commentValue}&actPost=${actPost}&userAct=${userAct}`,
    headers: requestHeaders
  }).then( res => {
    dispatch(getComments())
    return res;
  })
    .then( res => {
      dispatch(getPosts())
      return res;
  })
    .catch(err => {
      console.log(err);
    });

};
