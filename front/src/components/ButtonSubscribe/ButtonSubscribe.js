import React, {useCallback, useEffect, useState} from 'react';
import "./ButtonSubscribe.scss"
import {connect} from "react-redux";
import {updateSubDB} from "../../store/users/operations";
import {updateSubscribers, updateSubscriptions} from "../../store/users/actions";
import {updateSubscriptionsUserActive} from "../../store/auth/actions";

const ButtonSubscribe = (props) => {
    const {owner, updateSubDB, updateSubscribers, updateSubscriptions, userActive} = props
    const [bn, setBn] = useState()

    useEffect(()=>{
        if (userActive.subscriptions.includes(owner._id)){
            setBn("Відписатись")
        }
        else {
                 setBn("Підписатись")
             }
    }, [])


    const changeBn = useCallback(()=>{
        setBn(bn => (bn === "Підписатись") ? "Відписатись" : "Підписатись")
    }, [])

    const handleClick = (e) => {
        updateSubDB(e, props.userActive._id, owner._id)
        updateSubscribers(props.userActive._id, owner._id)
        updateSubscriptions(props.userActive._id, owner._id)
        updateSubscriptionsUserActive(owner._id)
        changeBn()
    }

    return (
        <div>
            <input type='button' className="button-subscribe" onClick={handleClick} value={bn}/>
        </div>
    );
};

const mapStateToProps =(state) => {
    return {
        userActive: state.auth.userActive,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSubDB: (e, a, b) => dispatch(updateSubDB(e, a, b)),
        updateSubscribers: (userAct, ownerId) => dispatch(updateSubscribers(userAct, ownerId)),
        updateSubscriptions: (userAct, ownerId) => dispatch(updateSubscriptions(userAct, ownerId)),
        updateSubscriptionsUserActive: (ownerId) => dispatch(updateSubscriptionsUserActive(ownerId)),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSubscribe);

