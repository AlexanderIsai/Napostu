import React from 'react';
import {connect} from "react-redux";
import {hideModal} from "../../store/pages/operations";
import "./PostContent.scss"

const PostContent = (props) => {
    const {postId} = props
    const post = props.posts.find(post => post._id == postId)
    console.log(post);
    const commentPost = props.comments.filter(com => com.post == postId)
    console.log(commentPost);
    return (
        <div className="post-content">
            {commentPost.map(comment => {
                let user = props.users.find(user => user._id == comment.creator)
                console.log(user);
                return <div className="post-comment">
                    <div className="post-comment_user"><img className="avatar-comment" src={user.avatar}/>{user.nickname}</div>
                    {comment.text}
                </div>
            })}
        </div>
    );
}

const mapStateToProps =(state) => {
    return {
        modalPostId: state.pages.modalPostId,
        posts: state.posts.posts,
        comments: state.comments.comments,
        users: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: (e) => dispatch(hideModal(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContent);

