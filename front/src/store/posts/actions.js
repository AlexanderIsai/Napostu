import {SET_POSTS, UPDATE_LIKE_COUNTER} from './types';

export const setPosts = (data) => {
  // console.log("NOT Sorted by date: ");
  // data.forEach((el, ind) => { console.log(el._id, el.date); });

  data.sort((a, b) =>{
    return (new Date(b.date)) - (new Date(a.date))
  });

  // console.log("Sorted by date: ");
  data.forEach((el, ind) => {
    // console.log(el._id, el.date);
    // let day = new Date(el.date).getDate();
    // let month = new Date(el.date).toLocaleString('en', { month: 'long',});
    // let year = new Date(el.date).getFullYear();
    // console.log(day, month, year);

    let dateString = new Date(el.date).toUTCString()
    // console.log(dateString);
    el.dateString = dateString;
  });

  return ({type: SET_POSTS, payload: data});
}

export const updateLikeCounter = (data) => {           // console.log("data", data);
  return ({type: UPDATE_LIKE_COUNTER, payload: data});
}