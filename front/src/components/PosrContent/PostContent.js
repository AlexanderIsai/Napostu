import React from 'react';
import {connect} from "react-redux";
import {hideModal} from "../../store/pages/operations";
import "./PostContent.scss"
import PostFooter from "../PostFooter/PostFooter";

const PostContent = (props) => {
    const {postId} = props
    const post = props.posts.find(post => post._id == postId)
    console.log(post);
    const commentPost = props.comments.filter(com => com.post == postId)
    console.log(commentPost);
    let author = props.users.find(user => user._id == post.creator)
    return (
        <div className="post-content">



            <div>
                <div className="post-comment_user author-post"><img className="avatar-comment" src={author.avatar}/>{author.nickname}</div>
                {commentPost.map((comment, index) => {
                let user = props.users.find(user => user._id == comment.creator)
                return <div className="post-comment" key={index}>
                    <div className="post-comment_user"><img className="avatar-comment" src={user.avatar}/>{user.nickname}</div>
                    {comment.text}
                </div>
            })}
            </div>
            <PostFooter />
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

