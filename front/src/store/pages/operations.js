import {activeUserTitle, closeModal, openModal, setModalPostId, setUrl} from "./actions";


export const handleUserNav = (e) => (dispatch) => {
    const userTitleElement = document.querySelectorAll('.space50')
        userTitleElement.forEach(el => {
            el.classList.remove('space50-active')
        })
        e.target.classList.add('space50-active')
        dispatch(activeUserTitle(true))
}

export const showModal = (e) =>(dispatch) => {
    let cursorTarget = e.target
    dispatch(setUrl(cursorTarget.src))
    dispatch(setModalPostId(cursorTarget.id))
    // console.log(cursorTarget.id);
    dispatch(openModal( true))
}



export const hideModal = (e) => (dispatch) =>  {
    if (e.currentTarget.classList.contains('modal')) {
        dispatch(closeModal( false))
    }
}