import React from 'react';
import useStyles from './HatStyles';


const Hat = () => {
  const classes = useStyles();
  return (
      <>
        <div className={classes.root}>
          <span className={classes.textItem}>NaPOSTU</span>
        </div>
      </>
    )
};

export default Hat;