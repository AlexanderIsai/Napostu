import React from 'react';
import "./ButtonSubscribe.scss"
import {connect} from "react-redux";
import {hideModal} from "../../store/pages/operations";
import {updateSubDB} from "../../store/users/operations";

const ButtonSubscribe = (props) => {
    const {owner} = props
    const title1 = "Subscribe"
    let title = "Subscribe";
    if (props.userActive.subscriptions.includes(owner._id)) {
        title = "Unsubscribe"
    }

    return (
        <div>
            <button className="button-subscribe" onClick={()=>props.updateSubDB(props.userActive._id, owner._id)}>{title}</button>
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
        updateSubDB: (a, b) => dispatch(updateSubDB(a, b))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSubscribe);

