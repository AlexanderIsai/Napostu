import React, {useEffect} from 'react';
import useStyles from './MainPageStyles';

import {Grid, Paper, Box, Typography} from '@material-ui/core';// import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import UserAvatar from "../../components/Avatar/Avatar";
import {connect} from "react-redux";
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
        <div style={
          {
            background: "linear-gradient(90deg, rgba(240,241,242,1) 0%, " +
              "rgba(253,253,253,1) 25%, rgba(255,255,255,1) 50%, rgba(254,254,254,1) 75%, " +
              "rgba(240,241,242,1) 100%)",
            height: "178px", position: "sticky", top: "0px", marginBottom: "16px",
            // background: "green"
          }}>
          <span style={{position: "relative", top: "25px", fontSize: "6.48em", color: "#f7f7f7"}}>NaPOSTU</span>

        </div>

        {/*<div style={{position: "relative"}}>*/}
        <Grid container spasing={0}>

          <Grid item xs={12} md={8}>
            <Box className={classes.subscribtionElBoxSticky}>
              <Typography className={classes.smallTitle} style={{textAlign: "left"}}>subscribtions</Typography>
              <Paper className={classes.subscribtions}>
                {
                  users.map((el, id) => {
                    return (
                      <div className={classes.subscribtionElBox} key={id}>
                        <UserAvatar
                          size="medium"
                          user={el}
                          textLink={true}
                          borderAround={false}
                        />
                      </div>
                    )
                  })
                }
                {/*-------- например продолжение подписок --------------------*/}
                {
                  someUsers.map((el, id) => {
                    return (
                      <div className={classes.subscribtionElBox} key={id}>
                        <UserAvatar
                          size="medium"
                          user={el}
                          textLink={true}
                          borderAround={false}
                        />
                      </div>
                    )

                  })
                }
                {/*-------- end продолжение подписок -------------------------*/}

                {<div className={classes.spaceNeedsAtTheEndOfList}/>}
              </Paper>
            </Box>

            <Box className={classes.postsLine}>
              <Typography className={classes.smallTitlePostsLine} style={{}}>news</Typography>
              <Paper className={classes.post} style={{}}>
                <PostMain/>
              </Paper>
              <Paper className={classes.post} style={{}}>
                <PostMain/>
              </Paper>
              <Paper className={classes.post} style={{}}>
                <PostMain/>
              </Paper>
              <Paper className={classes.post} style={{}}>
                <PostMain/>
              </Paper>
              <Paper className={classes.post} style={{}}>
                <PostMain/>
              </Paper>
              <Paper className={classes.post} style={{}}>
                <PostMain/>
              </Paper>
            </Box>
          </Grid>


          <Hidden only={['xs', 'sm']}>
            <Grid item md={4}>
              <Box className={classes.sideBarStickyBox}>

                <Typography className={classes.smallTitle} style={{color: '#3f51b5'}}>active profile</Typography>
                <Paper className={classes.activeUserPaper}>
                  <Box className={classes.activeUserBox}>
                    <div className={classes.activeUserTxtBox}>
                      <Typography className={classes.activeUserTxt}>NaPOSTU around the word!</Typography>
                      <Typography className={classes.activeUserTxt}>POST your every moment!</Typography>
                    </div>

                    {(userActive) &&
                    <div className={classes.activeUserAvatarBox}>
                      <UserAvatar
                        size="large"
                        user={userActive}
                        textLink={false}
                        borderAround={true}
                      />
                    </div>
                    }
                  </Box>
                </Paper>

                <Typography className={classes.smallTitle}>to subscribe</Typography>
                {/*-------- например предложения о подписке --------------------*/}
                <Paper className={classes.sideBarOfferToSubscribe}>
                  {
                    someUsers.map((el, id) => {
                      return (
                        <div className={classes.offerToSubscribeElBox} key={id}>
                          <div className={classes.offerToSubscribeItem}>
                            <UserAvatar
                              size="small"
                              user={el}
                              textLink={false}
                              borderAround={false}
                            />
                          </div>
                          <Link component={RouterLink} to={`/users/${el}`} className={classes.offerToSubscribeItem}
                                style={{textDecoration: 'none'}}>
                            user {el} || short info of user
                          </Link>
                        </div>
                      )
                    })
                  }
                </Paper>
                {/*-------- end например предложения о подписке-----------------*/}

              </Box>
            </Grid>
          </Hidden>


        </Grid>
        {/*</div>*/}


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