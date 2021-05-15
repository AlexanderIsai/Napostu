import React from 'react';
import './MainPage.scss';
import useStyles from './MainPageStyles';

import {connect} from "react-redux";
import {Grid, Paper, Box} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import Loading from "../../components/Loading/Loading";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import PostMain from "../../components/PostMain/PostMain";


const MainPage = (props) => {
  const {isLoading, users, posts, userActive} = props;

  const subscriptions = [], toSubscribe = [], actualPost = [];
  userActive.subscriptions.forEach(el => {
    subscriptions.push(users.find(user => user._id === el));
  });

  users.forEach(user => {
    if (user._id !== userActive._id && !subscriptions.find(obj => obj._id === user._id))
      toSubscribe.push(user);
  });

  posts.forEach(post => {
    if (post.creator === userActive._id || subscriptions.find(obj => obj._id === post.creator))
      actualPost.push(post);
  });

  // console.log("USERS:", users);
  // console.log("subscriptions:", subscriptions);
  // console.log("toSubscribe:", toSubscribe);
  // console.log("actualPost:", actualPost);


  const someUsers = ["100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110"];


  const classes = useStyles();
  if (isLoading) {
    return (<Loading/>)
  }
  return (
    <>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Hidden only={['xs', 'sm']}>
            <div style={
              {
                background: "linear-gradient(90deg, rgba(240,241,242,1) 0%, " +
                  "rgba(253,253,253,1) 25%, rgba(255,255,255,1) 50%, rgba(254,254,254,1) 75%, " +
                  "rgba(240,241,242,1) 100%)",
                height: "178px", position: "sticky", top: "0px", marginBottom: "16px",
              }}>
              <span style={{position: "relative", top: "25px", fontSize: "6.48em", color: "#f7f7f7"}}>NaPOSTU</span>
            </div>
          </Hidden>
          {/*<img width={"6%"} style={{position: 'fixed', top: "5px", left: "20px"}} alt="logoNaPost" src="LogoNaPOSTu.png" className="logoNaPostu"/>*/}


          <Grid container spasing={0}>
            <Grid item xs={12} md={8}>
              <Hidden only={['xs', 'sm']}>
                <Box className={classes.subscribtionElBoxSticky}>
                  <p className={classes.smallTitle} style={{textAlign: "left"}}>subscribtions</p>
                  <div className={classes.subscribtions}>
                    {

                      subscriptions.map((el, id) => {
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
                              example={true}
                            />
                          </div>
                        )

                      })
                    }
                    {/*-------- end продолжение подписок -------------------------*/}

                    {<div className={classes.spaceNeedsAtTheEndOfList}/>}
                  </div>
                </Box>
              </Hidden>

              <Box className={classes.postsLine}>
                <p className={classes.smallTitlePostsLine} style={{}}>news</p>
                {
                  actualPost.map((el, id) => {
                    return (
                      <Paper className={classes.post} key={id} style={{}}>
                        <PostMain
                          post={el}
                          creator={+el.creator}
                        />
                      </Paper>
                    )
                  })
                }
              </Box>
            </Grid>


            <Hidden only={['xs', 'sm']}>
              <Grid item md={4}>
                <Box className={classes.sideBarStickyBox}>

                  <p className={classes.smallTitle} style={{color: '#3f51b5'}}>active profile</p>
                  <Paper className={classes.activeUserPaper}>
                    <Box className={classes.activeUserBox}>
                      <div className={classes.activeUserTxtBox}>
                        <p className={classes.activeUserTxt}>NaPOSTU around the word!</p>
                        <p className={classes.activeUserTxt}>POST your every moment!</p>
                      </div>

                      <div className={classes.activeUserAvatarBox}>
                        <UserAvatar
                          size="large"
                          user={userActive}
                          textLink={false}
                          borderAround={true}
                        />
                      </div>
                    </Box>
                  </Paper>

                  <p className={classes.smallTitle}>to subscribe</p>
                  <Paper className={classes.sideBarOfferToSubscribe}>
                    {
                      toSubscribe.map((el, id) => {
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
                            <Link component={RouterLink} to={`/users/${el._id}`}
                                  className={classes.offerToSubscribeItem}
                                  style={{textDecoration: 'none'}}>
                              <span className={classes.linkToSubscribe}>
                                {`${el.email}`.substr(0, 1) + `.${el.email}`.split('@')[0]} || check & subscribe
                              </span>
                            </Link>
                          </div>
                        )
                      })
                    }

                    {/*-------- например продолжение предложений о подписке --------------------*/}
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
                              <span className={classes.linkToSubscribe}>s.someuser || check & subscribe</span>
                            </Link>
                          </div>
                        )
                      })
                    }
                    {/*-------- end например продолжение предложений о подписке -----------------*/}
                  </Paper>

                </Box>
              </Grid>
            </Hidden>


          </Grid>


        </div>
      </div>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    isLoading: state.users.isLoading,
    userActive: state.auth.userActive,
    users: state.users.users,
    posts: state.posts.posts,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);