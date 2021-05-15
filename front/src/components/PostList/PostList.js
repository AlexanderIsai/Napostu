import React from 'react';
import "./PostList.scss"
import MyPost from "../MyPost/MyPost";
import {connect} from "react-redux";
import UserTitle from "../UserTitle/UserTitle";
import {handleUserNav} from "../../store/pages/operations";

const PostList = (props) => {
    const {id} = props
    let postInfo = props.posts.filter(po => po.creator == id)
    return (
        <div>
            <UserTitle click={props.active}/>
            <div className="post-list">
            {postInfo.map((post, index) => {
                return <div  key={index}>
                <MyPost post={post}/>
            </div>
                })
            }
        </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        users: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        active: (e) => dispatch(handleUserNav(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

// export default PostList;