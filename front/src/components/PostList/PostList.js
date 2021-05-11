import React from 'react';
import "./PostList.scss"
import MyPost from "../MyPost/MyPost";

import {connect} from "react-redux";

const PostList = (props) => {
    const {id} = props
    let postInfo = props.posts.filter(po => po.creator == id)
    return (
        <div className="post-list">
            {postInfo.map((post, index) => {
                return <div  key={index}>
                <MyPost post={post}/>
            </div>
                })
            }

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        // users: state.users.users
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//
//     }
// }

export default connect(mapStateToProps)(PostList);

// export default PostList;