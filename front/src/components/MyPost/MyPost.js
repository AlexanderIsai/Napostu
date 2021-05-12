import React from 'react';
import "./MyPost.scss"
import LikesComments from "../LikesCooments/LikesComments";
import "../LikesCooments/LikesComments.scss"
import {connect} from "react-redux";
import {showModal} from "../../store/pages/operations";

const MyPost = (props) => {
    const {post}= props
    return (
        <div className="post-item" onClick={(e) => props.viewModal(e)}>
            <img id={`${post._id}`} src={post.imageUrl} />
            <LikesComments />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        // users: state.users.users,
        // posts: state.posts.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        viewModal: (e) => dispatch(showModal(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPost);