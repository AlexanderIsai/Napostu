import {
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  SET_USERS,
  LOAD_USERS_FAILURE,
  UPDATE_SUBSCRIBERS,
  UPDATE_SUBSCRIPTIONS,
} from './types';


const initialState = {
  isLoading: true,
  users: [],
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_REQUEST:
      return {...state, isLoading: true}

    case LOAD_USERS_SUCCESS:
      return {...state, isLoading: false}

    case SET_USERS:
      return {...state, users: action.payload}

    case LOAD_USERS_FAILURE:
      return {...state, users: action.payload}


    case UPDATE_SUBSCRIBERS:

      const updateUsersSubscribers = state.users.map(user => {
        if (user._id === action.payload.ownerId) {

          if (!user.subscribers.includes(action.payload.userAct)){
            user.subscribers.push(action.payload.userAct)

          }
          else {
            let indexToDel = user.subscribers.indexOf(action.payload.userAct)
            user.subscribers.splice(indexToDel, 1)
          }
        }

        return user;
      })
      return {...state, users: updateUsersSubscribers}

    case UPDATE_SUBSCRIPTIONS:
      const updateUsersSubscriptions = state.users.map(user => {
        if (user._id === action.payload.userAct) {
          if (!user.subscriptions.includes(action.payload.ownerId)){
            user.subscriptions.push(action.payload.ownerId)

          }
          else {
            let indexToDel = user.subscriptions.indexOf(action.payload.ownerId)
            user.subscriptions.splice(indexToDel, 1)
          }

        }
        return user;
      })
      return {...state, users: updateUsersSubscriptions}




    default:
      return state;
  }
}

export default reducer;