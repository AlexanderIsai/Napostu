import React from 'react';
import {
  useStyles,
  MyIconButton,
  MyAddCommentIcon,
  MyFavoriteIcon
} from './IconsStyle';


export const IAddComment = (props) => {
  const {onClick} = props;
  const clicked = () => {
    onClick();
  }

  const classes = useStyles();
  return (
    <>
      {/*<ColorIconButton aria-label="add comment" variant="contained" color="primary" className={classes.margin}>*/}
      {/*  <AddCommentIcon*/}
      {/*    onClick={clicked}*/}
      {/*  />*/}
      {/*</ColorIconButton>*/}


      <MyIconButton aria-label="add comment" variant="contained" color="primary" className={classes.iconStile}>
        <MyAddCommentIcon
          onClick={clicked}
        />
      </MyIconButton>


      {/*<ThemeProvider theme={theme}>*/}
      {/*  <Button variant="contained" color="primary" className={classes.margin}>*/}
      {/*    Theme Provider*/}
      {/*  </Button>*/}
      {/*</ThemeProvider>*/}
    </>
  );
};


export const IFavoritePost = (props) => {
  const {onClick} = props;
  const clicked = () => {
    onClick();
  }

  const classes = useStyles();
  return (
    <>
      <MyIconButton aria-label="add favorite" variant="contained" color="primary" className={classes.iconStile}>
        <MyFavoriteIcon
          onClick={clicked}
        />
      </MyIconButton>
    </>
  );
}

