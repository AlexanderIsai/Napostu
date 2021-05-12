import React from 'react';
import './Modal.scss'
import {connect} from "react-redux";
import {hideModal} from "../../store/pages/operations";

const Modal = (props) =>{


        return (
            <div className="modal" onClick={(e)=>props.closeModal(e)}>
                        <div className="post-active">

                                <img src={props.urlPost}/>
                        </div>
            </div>
        );

}

const mapStateToProps =(state) => {
        return {
        urlPost: state.pages.urlPost,
            modalPostId: state.pages.modalPostId,
            posts: state.posts.posts,
            comments: state.comments.comments

        }
}

const mapDispatchToProps = (dispatch) => {
        return {
                closeModal: (e) => dispatch(hideModal(e))
        }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);


