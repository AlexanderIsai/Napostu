const mongoose = require('mongoose');
const {Schema} = mongoose;
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs');
const app = express()
const port = 5000;


function hash(data) {
  return require("crypto")
    .createHash("sha256")
    .update(data)
    .digest("hex");
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(express.static(__dirname + "/public"))

mongoose.connect('mongodb+srv://naPostu:naPostu999@testcluster10.1e1vj.mongodb.net/naPOSTUdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const User = mongoose.model('User', {
  _id: Number,
  nickname: String,
  email: String,
  avatar: String,
  password: { type: String, select: false },
  token: { type: String, select: false },
  subscribers: [],
  //     [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // }],
  subscriptions: [],
  //     [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // }],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  }]
});


const Post = mongoose.model("Post", {
  _id: Number,
  imageUrl: String,
  post_description: String,
  date: Date,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [],
  // comments: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Comment",
  //   }
  // ],
  likers: [],
  // likers: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User",
  //   }
  // ],
  likecounter: Number
});


const Comment = mongoose.model('Comment', {
  _id: Number,
  text: String,
  date: Date,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  }
});


app.post('/getnextposts', (req, res) => {
  const currentPostLength = req.body.currentPostLength;
  const userActiveId = req.body.userActiveId;

  Post.find().populate().then(data => {

    const filteredPosts = data.filter(post => {
      
      return +post.creator === +userActiveId || req.body.subscriptions.includes(post.creator)
    })

    const response = {
      postsToShow: [],
      hasMore: false
    };

    if (filteredPosts.length > +currentPostLength + 4) {
      for (let i = 0; i < +currentPostLength + 3; i++) {
        response.postsToShow.push(filteredPosts[i])
      }
      response.hasMore = true;
      res.json(response);
    } else {
      response.postsToShow = filteredPosts;
      response.hasMore = false;
      res.json(response);
    }
    
  })

})


app.post('/login', (req, res, next) => {

  const name = req.body.name;
  const password = req.body.password;

  User.findOne({name: name, password: password}).then(user => {

    if (!user) {
      next(new Error("wrong name or password"))

    }

    const token = hash(user._id + new Date());

    user.token = token;
    user.save().then(() => {
      res.json({user: user});
    })

  })

})


app.post('/reload', (req, res, next) => {
  const token = req.body.token;

  User.findOne({token: token}).then(user => {

    if(!user){
      next(new Error("wrong token"))
    }

    const token = hash(user._id + new Date());

    user.token = token;
    user.save().then(() => {
      res.json({user: user});
    })

  })

})


// +++ ------ UPDATE post.likecounter & post.likers for post in PostsDB ---------
app.post('/updatelike', (req, res) => {
  const postId = req.body.id,
        userId = req.body.userAct;
  Post.findById(postId).then(post => {
    post.likecounter = post.likecounter + 1;
    post.likers.push(+userId)
    post.save()
      .then(() => {
        res.json({post: post});
      })
  })
});


// ------ update Array of Subscriptions for post ----------------------------
app.post('/updatesub', (req, res) => {
  const activeUserId = req.body.id;
  const ownerPageId = req.body.ownId;

  User.findById(activeUserId).then(user => {
    console.log("userActive subscriptions >>>> ", user.subscriptions);
    console.log(ownerPageId);
    if (user.subscriptions.includes(ownerPageId)) {
      let indexToDel = user.subscriptions.indexOf(ownerPageId)
      console.log(indexToDel);
      user.subscriptions.splice(indexToDel, 1)
    } else if (!user.subscriptions.includes(ownerPageId)){
      user.subscriptions.push(+ownerPageId)
    }
    console.log("userActive subscriptions AFTER >>>> ", user.subscriptions);
    user.save()
      .then(() => {
        res.json({user: user});
      })
  })
  User.findById(ownerPageId).then(user => {
    console.log(user.subscribers);
    if (user.subscribers.includes(activeUserId)) {
      let indexToDel = user.subscribers.indexOf(activeUserId)
      user.subscribers.splice(indexToDel, 1)
    } else if (!user.subscribers.includes(activeUserId)){
      user.subscribers.push(+activeUserId)
    }
      console.log("Owner subscribers >>>> ", user.subscribers);

    console.log("Owner subscribers >>>> ", user.subscribers);
    user.save()
      .then(() => {
        res.json({user: user});
      })

  })
});


// +++ ------ ADD new Comment to CommentsDB & UPDATE post.comments in PostsDB -------
app.post('/addcomment', (req, res) => {
  const text = req.body.commentValue,
    postId = req.body.actPost,
    userId = req.body.userAct,
    commentId = Math.floor(Math.random() * 100001);

  User.findById(userId).then(user => {
    Post.findById(postId).then(post => {
      const newComment = new Comment({
        _id: +commentId,
        text: text,
        date: new Date(),
        creator: user,
        post: post
      })
      newComment.save()
        .then(() => {
          Comment.findById(commentId).then(comment => {
            Post.findById(postId).then(post => {
              post.comments.push(comment._id);
              post.save().then(() => {
                res.json({success: true});
              });
            })
          })
        })
    })
  })
});


app.get('/userfeed', (req, res) => {

  User.find().populate().then(users => {
    res.json(users);
  })
})


app.get('/postfeed', (req, res) => {
  Post.find().populate().then(posts => {
    res.json(posts);
  })
})


app.get('/commentfeed', (req, res) => {
  Comment.find().populate().then(comments => {
    res.json(comments);
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
