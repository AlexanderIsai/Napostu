const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('user');


router.get('/users',(req,res) => {

  User.find().populate().then(users => {
    res.json(users);
    // console.log("USERS: ", users);
  })

});


router.get('/user',(req,res) => {

  const id = 1888;

  User.findOne({_id: id}).then(user => {
    res.json(user);
    // console.log("USERS: ", user);
  })

});


router.post('/user',(req,res) => {
  const userData = {
    _id: 1555,
    email: "kozlov@gmail.com",
    password: 555,

    nickname: "",
    token: "",

    avatarUrl: "./images/AliceInWonder.jpg",

    subscribers: [{userId: 1}, {userId: 2}, {userId: 3}],
    posts: [{postId: 1}, {postId: 2}, {postId: 3}],
    favorites: [{postId: 1}],
    comments: [{commentID: 1}, {commentID: 2}],
    likes: [{postId: 1, commentId: 1}, {postId: 2}, {postId: 3, commentId: 3}],
  };

  const UserN = new User({
    _id: userData._id,
    email: userData.email,
    password: userData.password,

    nickname: `${userData.email}`.substr(0, 1) + `.${userData.email}`.split('@')[0],
    token: "",

    avatarUrl: userData.avatarUrl,
    subscribers: userData.subscribers,
    subscriptions: userData.subscriptions,
    posts: userData.posts,
    favorites: userData.favorites,
    comments: userData.comments,
    likes: userData.likes,
  })
  UserN.save().then(() => {
    // console.log("done");
  })


});



module.exports = router;
