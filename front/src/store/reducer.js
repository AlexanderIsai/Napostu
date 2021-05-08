import {combineReducers} from 'redux';

import usersReducer from './users/reducer';
import postsReducer from './posts/reducer';
// import commentsReducer from './comments/reducer';
import authReducer from './auth/reducer';

const reducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  posts: postsReducer,
  // comments: commentsReducer,
});

export default reducer;