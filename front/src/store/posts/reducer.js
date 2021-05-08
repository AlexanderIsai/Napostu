import {LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, SET_POSTS, LOAD_POSTS_FAILURE, UPDATE_LIKE_COUNTER} from './types';

const initialStatePosts = {
  isLoading: true,
  posts: []
}

const reducer = (state = initialStatePosts, action) => {
  switch (action.type) {
    case LOAD_POSTS_REQUEST:     // console.log(action.type);
      return {...state, isLoading: true}

    case LOAD_POSTS_SUCCESS:
      return {...state, isLoading: false}

    case SET_POSTS:
      return {...state, posts: action.payload}

    case UPDATE_LIKE_COUNTER:
      const updatePosts = state.posts.map(el => {
        if (el._id === action.payload) {
          el.like_counter = ++el.like_counter;
        }
        return el;
      })
      return {...state, posts: updatePosts}

    case LOAD_POSTS_FAILURE:
      return {...state, posts: action.payload}

    default:
      return state;
  }
}

export default reducer;