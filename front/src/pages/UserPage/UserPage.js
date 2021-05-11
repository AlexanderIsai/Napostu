import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import Avatar from "../../components/Avatar/Avatar";
import "./UserPage.scss"
import UserTitle from "../../components/UserTitle/UserTitle";
import PostList from "../../components/PostList/PostList";
import {handleUserNav} from "../../store/pages/operations";
import Modal from "../../components/Modal/Modal";
import React from 'react';
// import axios from 'axios';
// import {useParams} from 'react-router-dom';
// import {useEffect} from 'react';



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
                                    <InfoBlock name={user.nickname} />
                                </div>
                        <UserTitle click={props.active}/>
                        <PostList id={userId}/>
                           </div>})}

        </div>
            <div>
                {props.isOpenModal && <Modal/>}
            </div>
        </>)
  // const params = useParams();
  // const {userId} = params;          // console.log("userId: ", userId);
  //
  // useEffect(() => {
  //   axios(`/api/users/${userId}`)
  //     .then(res => {
  //       console.log(`user ${userId}: `, res.data);     // user from http://localhost:3000/users/userId (userId -> 01 или -> 02)
  //       return res.data;
  //     })
  // }, [userId]);


}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        isOpenModal: state.pages.isOpenModal
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        active: (e) => dispatch(handleUserNav(e)),
        // getPosts: () => dispatch(getPosts())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);