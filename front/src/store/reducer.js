import {combineReducers} from 'redux';

import usersReducer from './users/reducer';
import postsReducer from './posts/reducer';
import commentsReducer from './comments/reducer';

const reducer = combineReducers({
  users: usersReducer,
  // posts: postsReducer,
  // comments: commentsReducer,
});

export default reducer;