import {
  SEND_UPDATE_SUBSCRIBE_REQUEST,
  SET_USERS,
  UPDATE_SUBSCRIBERS,
  UPDATE_SUBSCRIPTIONS,
  UPDATE_SUBSCRIPTIONS_USER_ACTIVE
} from './types';

export const setUsers = (data) => {
  return ({type: SET_USERS, payload: data})
}

export const sendRequestForUpdateSub = () => {
  return ({type: SEND_UPDATE_SUBSCRIBE_REQUEST});
}

export const updateSubscribers = (userAct, ownerId) => {
  return ({type: UPDATE_SUBSCRIBERS, payload: {"userAct": userAct, "ownerId": ownerId}});
}

export const updateSubscriptions = (userAct, ownerId) => {
  return ({type: UPDATE_SUBSCRIPTIONS, payload: {"userAct": userAct, "ownerId": ownerId}});
}

