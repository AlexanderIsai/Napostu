import React from 'react';
import useStyles from './ButtonBasicStyles';
import PropTypes from 'prop-types';
const classes = useStyles();

import {connect} from "react-redux";
import Button from '@material-ui/core/Button';

const ButtonBasic = (props) => {
  const {type, className, onClick, backgroundColor, text, icon, quantity} = props;

  // const classes = useStyles();
  return (
    <>
      <Button
        data-testid='comp-button'
        type={type}
        className={className}
        onClick={onClick}
        style={{backgroundColor: backgroundColor}}
      >
        {text}
        {icon ? <span style={{position: 'relative', top: '7px', padding: '0 5px 0 10px'}}>{icon}</span> : null}
        {quantity ? <span data-testid='product-quantity' style={{color: 'red'}}>{quantity}</span> : null}

      </Button>
    </>
  )
};


Button.defaultProps = {
  type: "button",
  className: classes.myButton,
  onClick: null,
  icon: null,
  quantity: null,
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  text: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonBasic);