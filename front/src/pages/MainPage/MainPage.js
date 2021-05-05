import React, {useEffect} from 'react';
import useStyles from './MainPageStyles';

import {Grid, Paper, Box, Typography} from '@material-ui/core';
// import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import UserAvatar from "../../components/Avatar/Avatar";
import {connect} from "react-redux";
// import {getUsers} from "../../store/users/operations";
import Hidden from '@material-ui/core/Hidden';
import Loading from "../../components/Loading/Loading";
import PostMain from "../../components/PostMain/PostMain";

const MainPage = (props) => {
  const {users, isLoading, userActive} = props;
  const someUsers = ["3", "4", "5", "6", "7", "8", "9", "10"];

  const classes = useStyles();

  if (isLoading) {
    return (<Loading/>)
  }

  if (!users) {
    return
  }


  return (
    <>
      <div className={classes.root}>
        {/*<Typography className={classes.title}>main page</Typography>*/}
        <Grid container spasing={0}>

          <Grid item xs={12} md={8}>
            <Box className={classes.subscribtionElBoxSticky}>
              <Typography className={classes.smallTitle} style={{textAlign: "left"}}>subscribtions</Typography>
              <Paper className={classes.subscribtions}>
                {
                  users.map((el, id) => {
                    return (
                      <Box className={classes.subscribtionElBox} key={id}>
                        <Link component={RouterLink} to={`/users/${el.id}`} style={{textDecoration: 'none'}}>
                          <UserAvatar alt={`${el.email}`.substr(0, 1).toUpperCase() + ` .${el.email}`.split('@')[0]}
                                      src={el.avatar}
                                      size="medium"
                                      userActive={el}
                                      userId={el.id}
                                      userEmail={el.email}
                          />
                        </Link>
                        <Link component={RouterLink} to={`/users/${el.id}`} color="inherit" className={classes.link}
                              style={{textDecoration: 'none'}}>
                          {`${el.email}`.substr(0, 1) + `.${el.email}`.split('@')[0]}
                        </Link>
                      </Box>
                    )
                  })
                }
                {/*-------- например продолжение подписок --------------------*/}
                {
                  someUsers.map((el, id) => {
                    return (
                      <Box className={classes.subscribtionElBox} key={id}>
                        <Link component={RouterLink} to="/" style={{textDecoration: 'none'}}>
                          <UserAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" size="medium"/>
                        </Link>
                        <Link component={RouterLink} to="/" color="inherit" className={classes.link}
                              style={{textDecoration: 'none'}}>
                          user {el}
                        </Link>
                      </Box>
                    )
                  })
                }
                {/*-------- end например -------------------------------------*/}
              </Paper>
            </Box>

            <Box className={classes.postsLine}>
              <Typography className={classes.smallTitlePostsLine} style={{}}>NaPOSTU news</Typography>
              <Paper className={classes.post} style={{}}>
                <PostMain />
              </Paper>
              <Paper className={classes.post} style={{}}>
                <PostMain />
              </Paper>
              <Paper className={classes.post} style={{}}>
                <PostMain />
              </Paper>
              <Paper className={classes.post} style={{}}>
                <PostMain />
              </Paper>
              <Paper className={classes.post} style={{}}>
                <PostMain />
              </Paper>
              <Paper className={classes.post} style={{}}>
                <PostMain />
              </Paper>
            </Box>
          </Grid>


          <Hidden only={['xs', 'sm']}>
            <Grid item md={4}>
              <Box className={classes.sideBarStickyBox}>

                <Typography className={classes.smallTitle} style={{color: '#3f51b5'}}>active profile</Typography>
                <Paper className={classes.activeUserPaper}>
                  {/*<Box className={classes.activeUserBox}>*/}
                  {/*  <Box className={classes.activeUserTxtBox}>*/}
                  {/*    <Typography className={classes.activeUserTxt}>be NaPOSTU with all the word!</Typography>*/}
                  {/*    <Typography className={classes.activeUserTxt}>POST your life moments!</Typography>*/}
                  {/*  </Box>*/}

                  {/*  <Box className={classes.activeUserAvatarBox}>*/}
                  {/*    <Link component={RouterLink} to={`/users/${userActive.id}`} style={{textDecoration: 'none'}}>*/}
                  {/*      <UserAvatar*/}
                  {/*        alt={`${userActive.email}`.substr(0, 1).toUpperCase() + ` .${userActive.email}`.split('@')[0]}*/}
                  {/*        src={userActive.avatar}*/}
                  {/*        size="large"*/}
                  {/*        userId={userActive.id}*/}
                  {/*        userEmail={userActive.email}/>*/}
                  {/*    </Link>*/}
                  {/*    /!*<Link component={RouterLink} to={`/users/${userActive.id}`}*!/*/}
                  {/*    /!*      className={classes.ActiveUserlink} style={{textDecoration: 'none'}}>*!/*/}
                  {/*    /!*  {`${userActive.email}`.substr(0, 1) + `.${userActive.email}`.split('@')[0]}*!/*/}
                  {/*    /!*</Link>*!/*/}
                  {/*  </Box>*/}
                  {/*</Box>*/}
                </Paper>

                <Typography className={classes.smallTitle}>to subscribe</Typography>
                <Paper className={classes.sideBarOfferToSubscribe}>
                  {/*-------- например продолжения о подписке --------------------*/}
                  {
                    someUsers.map((el, id) => {
                      return (
                        <Box className={classes.offerToSubscribeElBox} key={id}>
                          <Link component={RouterLink} to="/" style={{textDecoration: 'none'}} className={classes.offerToSubscribeItem}>
                            <UserAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" size="small"/>
                          </Link>
                          <Link component={RouterLink} to="/" className={classes.offerToSubscribeItem}
                                style={{textDecoration: 'none'}}>
                            user {el} || short info of user
                          </Link>
                        </Box>
                      )
                    })
                  }
                  {/*-------- end например -------------------------------------*/}
                </Paper>

              </Box>
            </Grid>
          </Hidden>


        </Grid>

      </div>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getUsers: () => dispatch(getUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);