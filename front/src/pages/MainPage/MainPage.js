import React, {useEffect, useState} from 'react';
import './MainPage.scss';
import useStyles from './MainPageStyles';
import {connect} from "react-redux";
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import {Grid, Paper, Box} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import Loading from "../../components/Loading/Loading";
import Hat from "../../components/Hat/Hat";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import PostMain from "../../components/PostMain/PostMain";


const MainPage = (props) => {
  const {isLoading, users, posts, userActive} = props;
  const someUsers = ["100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110"];

  const [postsToShow, setPostsToShow] = useState([]);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const subscriptions = [], toSubscribe = [];
  userActive.subscriptions.forEach(el => {
    subscriptions.push(users.find(user => user._id === el));
  });

  users.forEach(user => {
    if (user._id !== userActive._id && !subscriptions.find(obj => obj._id === user._id))
      toSubscribe.push(user);
  });

  // ниже стр 36-40 закомментить для теста InfiniteScroll
  const actualPost = [];
  posts.forEach(post => {
    if (post.creator === userActive._id || subscriptions.find(obj => obj._id === post.creator))
      actualPost.push(post);
  });

  function getNextPosts() {
    axios({
      method: 'post',
      url: '/getnextposts',
      data: `currentPostLength=${postsToShow.length}&userActiveId=${userActive._id}&subscriptions=${userActive.subscriptions}`,
    })
      .then(res => {
        setPostsToShow(res.data.postsToShow);
        setHasMorePosts(res.data.hasMore);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    getNextPosts()
  }, []);


  const classes = useStyles();
  if (isLoading) {
    return (<Loading/>)
  }
  return (
    <>
      <div id='scrollableDiv' className={classes.root}>
        <div className={classes.paddingBox}>
          <Hidden only={['xs', 'sm']}>
            <Hat/>
          </Hidden>

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
                    {/*-------- e.g. continued subscriptions --------------------*/}
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
                    {/*-------- end e.g. continued subscriptions -------------------------*/}
                    {<div className={classes.spaceNeedsAtTheEndOfList}/>}
                  </div>
                </Box>
              </Hidden>

              <Box className={classes.postsLine}>
                <Hidden only={['xs', 'sm']}>
                  <p className={classes.smallTitlePostsLine}>naPOSTU</p>
                </Hidden>
                {/*ниже стр 121-145 раскомментить для теста InfiniteScroll*/}
                {/*<InfiniteScroll*/}
                {/*  dataLength={postsToShow.length}*/}
                {/*  next={getNextPosts}*/}
                {/*  hasMore={hasMorePosts}*/}
                {/*  loader={<h4>Loading...</h4>}*/}
                {/*  scrollableTarget="scrollableDiv"*/}
                {/*  scrollThreshold="250px"*/}
                {/*  endMessage={*/}
                {/*    <p style={{ textAlign: "center" }}>*/}
                {/*      <b>Yay! You have seen all posts...</b>*/}
                {/*    </p>*/}
                {/*  }*/}
                {/*>*/}
                {/*  { postsToShow.map((el, id) => {*/}
                {/*    return (*/}
                {/*      <Paper className={classes.post} key={id} style={{}}>*/}
                {/*        <PostMain*/}
                {/*          post={el}*/}
                {/*          creator={+el.creator}*/}
                {/*        />*/}
                {/*      </Paper>*/}
                {/*    )*/}
                {/*  })*/}
                {/*  }*/}
                {/*</InfiniteScroll>*/}
                {/*ниже стр 147-158 закомментить для теста InfiniteScroll*/}
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

                  <p className={classes.smallTitle}>active profile</p>
                  <Paper className={classes.activeUserPaper}>
                    <Box className={classes.activeUserBox}>
                      <div className={classes.activeUserTxtBox}>
                        <p className={classes.activeUserTxt}>La-La-La La-La.. I post around the word!</p>
                        <p className={classes.activeUserTxt}>& maybe even More...</p>
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
                              <span className={classes.linkToSubscribe} style={{color: '#585757', marginRight: "4px"}}>
                                {`${el.email}`.substr(0, 1) + `.${el.email}`.split('@')[0]}
                              </span>
                              <span className={classes.linkToSubscribe}>check & subscribe</span>
                            </Link>
                          </div>
                        )
                      })
                    }
                    {/*-------- e.g. continued proposals for subscriptions --------------------*/}
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
                              <span className={classes.linkToSubscribe}
                                    style={{color: '#585757', marginRight: "4px"}}>s.someuser</span>
                              <span className={classes.linkToSubscribe}>check & subscribe</span>
                            </Link>
                          </div>
                        )
                      })
                    }
                    {/*-------- end e.g. continued proposals for subscriptions -----------------*/}
                  </Paper>

                </Box>
              </Grid>
            </Hidden>

          </Grid>
        </div>
      </div>
    </>
  )
};


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