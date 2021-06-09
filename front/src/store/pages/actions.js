import {ACTIVE_USER_TITLE, CLOSE_MODAL, OPEN_MODAL, SET_POST_ID, SET_URL} from "./types";
import {CHANGE_BUTTON_NAME} from "../users/types";


export const activeUserTitle = (data) => {
    return ({type: ACTIVE_USER_TITLE, payload: data})
}

export const openModal = (data) => {
    return {type: OPEN_MODAL, payload: data}
}

export const closeModal = (data) => {
    return {type: CLOSE_MODAL, payload: data}
}

export const setUrl = (data) => {
    return {type: SET_URL, payload: data}
}

export const setModalPostId = (data) => {
    return {type: SET_POST_ID, payload: data}
}

