import React from 'react';
import './Modal.scss'
import {connect} from "react-redux";
import {hideModal} from "../../store/pages/operations";
import PostContent from "../PosrContent/PostContent";

const Modal = (props) =>{


        return (
            <div className="modal" onClick={(e)=>props.closeModal(e)}>
                        <div className="post-active">
                                <img src={props.urlPost}/>
                                <PostContent postId={props.modalPostId}/>
                        </div>
            </div>
        );

}

const mapStateToProps =(state) => {
        return {
            urlPost: state.pages.urlPost,
            posts: state.posts.posts,
            modalPostId: state.pages.modalPostId

        }
}

const mapDispatchToProps = (dispatch) => {
        return {
                closeModal: (e) => dispatch(hideModal(e))
        }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);


