import React from 'react';
import "./InfoBlock.scss"
import CountInfo from "../CountInfo/CountInfo";
import {handleUserNav} from "../../store/pages/operations";
import {connect} from "react-redux";
import ButtonSubscribe from "../ButtonSubscribe/ButtonSubscribe";

const InfoBlock = (props) => {
    const {user} = props
    let commentUser = props.comments.filter(com => com.creator === user._id)
    return (
        <div className="info-block">
            <div className="info-block__row-one">
            <p className="user-nickname">{user.nickname}</p>
            {/*<select className="user-select">*/}
            {/*    <option>Відстежується</option>*/}
            {/*    <option>Не відстежувати</option>*/}
            {/*</select>*/}
            <ButtonSubscribe owner={user}/>
            <span className="three-points">...</span>
            </div>
                <div className="info-block__row-two">
                    <CountInfo title={" постів"} count={user.posts.length}/>
                    <CountInfo title={" коментарів"} count={commentUser.length}/>
                    <CountInfo title={" стежать"} count={user.subscribers.length}/>
                </div>
            <p className="user-name">{user.nickname}</p>
            <p className="user-subscribe">Стежать всяко разно и т.п.</p>


        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments
    }
}


export default connect(mapStateToProps)(InfoBlock);

