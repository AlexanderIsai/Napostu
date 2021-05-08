import React from 'react';
import useStyles from './CommentStyles';

import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';

import {Link as RouterLink} from "react-router-dom";
import Link from "@material-ui/core/Link";


const Comment = (props) => {
  const {} = props;

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const classes = useStyles();
  return (
    <div className={classes.commentBox}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-multiline-flexible"
          label="Your comment"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
      </form>
    </div>
  )
};


const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment);