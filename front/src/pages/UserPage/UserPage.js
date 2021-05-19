import {useParams} from 'react-router-dom';
import {connect} from "react-redux";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import Avatar from "../../components/Avatar/Avatar";
import "./UserPage.scss"
import PostList from "../../components/PostList/PostList";
import Modal from "../../components/Modal/Modal";
import React from 'react';


const UserPage = (props) => {
  const params = useParams();
  const {userId} = params;

    let userInfo = props.users.filter(us => us._id == userId)
    return (
        <>
        <div>
            {userInfo.map(user => {
                    return <div className="user-page" key={user._id}>
                                <div className="top-user-page">
                                    <Avatar url={user.avatar}/>
                                    <InfoBlock user={user} />
                                </div>
                        <PostList id={userId}/>
                           </div>})}
        </div>
            <div>
                {props.isOpenModal && <Modal/>}
            </div>
        </>)
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        isOpenModal: state.pages.isOpenModal
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);