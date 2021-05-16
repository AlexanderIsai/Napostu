import React from 'react';
import "./ButtonSubscribe.scss"
import {connect} from "react-redux";
import {hideModal} from "../../store/pages/operations";
import {updateSubDB} from "../../store/users/operations";

const ButtonSubscribe = (props) => {
    const {owner} = props
    let title = "Підписатись";
    if (props.userActive.subscriptions.includes(owner._id)) {
        title = "Відписатись"
    }

    return (
        <div>
            <input type='button' className="button-subscribe" onClick={(e)=>props.updateSubDB(e, props.userActive._id, owner._id)} value={title}/>
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
        updateSubDB: (e, a, b) => dispatch(updateSubDB(e, a, b))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSubscribe);

