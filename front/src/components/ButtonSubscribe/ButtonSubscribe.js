import React from 'react';
import "./ButtonSubscribe.scss"
import {connect} from "react-redux";
import {updateSubDB} from "../../store/users/operations";
import {updateSubscribers, updateSubscriptions} from "../../store/users/actions";

const ButtonSubscribe = (props) => {
    const {owner, updateSubDB, updateSubscribers, updateSubscriptions} = props
    let title = "Підписатись";
    if (props.userActive.subscriptions.includes(owner._id)) {
        title = "Відписатись"
    }
    const handleClick = (e) => {
        updateSubDB(e, props.userActive._id, owner._id)
        updateSubscribers(props.userActive._id, owner._id)
        updateSubscriptions(props.userActive._id, owner._id)
    }

    return (
        <div>
            <input type='button' className="button-subscribe" onClick={handleClick} value={title}/>
        </div>
    );
};

const mapStateToProps =(state) => {
    return {
        userActive: state.auth.userActive

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSubDB: (e, a, b) => dispatch(updateSubDB(e, a, b)),
        updateSubscribers: (userAct, ownerId) => dispatch(updateSubscribers(userAct, ownerId)),
        updateSubscriptions: (userAct, ownerId) => dispatch(updateSubscriptions(userAct, ownerId))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSubscribe);

