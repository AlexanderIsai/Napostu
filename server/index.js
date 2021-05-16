
const mongoose = require('mongoose');
const { Schema } = mongoose;
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs');
const app = express()
const port = 5000;




function hash(data){
  return require("crypto")
      .createHash("sha256")
      .update(data)
      .digest("hex");
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(express.static(__dirname + "/public"))

mongoose.connect('mongodb+srv://naPostu:naPostu999@testcluster10.1e1vj.mongodb.net/naPOSTUdb', {useNewUrlParser: true, useUnifiedTopology: true});

const User = mongoose.model('User',{
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


const Post = mongoose.model("Post",{
  _id: Number,
  imageUrl: String,
  post_description: String,
  date: Date,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    }
  ],
  likers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
  likecounter: Number
});

const Comment = mongoose.model('Comment',{
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

//Добавляем нового юзера
Post.find().populate('post').then(posts => {
  const testUser = new User ({
    _id: 7,
    nickname: "Vikusya",
    email: "vikusya@test.ua",
    password: 1222,
    token: "hereIsToken",
    avatar: "url",
    subscriptions: [],
    subscribers: [],
    post: posts,
    //     favorites:[]

  })
  // testUser.save().then(()=>{})

})


User.findById(1).then(user => {
  Comment.findOne().then(comments => {
    const testPost = new Post ({
      _id: 103,
      imageUrl: "urlIMG",
      post_description: "Here is posttext3 from ivanov id 1",
      date: new Date,
      // likers: [{user : "user111"}, {user: "user444"}, {user: "user333"}],
      // like_counter: 23,
      creator: user,
      comments: comments
    })
    // testPost.save().then(()=>{})
  })
})

const authMiddleware = (req, res, next) => {

  if(!req.headers.authorization){
    const err = new Error("Not authorized!");
    err.status = 403;
    return next(err);
  }

  User.findOne({token: req.headers.authorization}).then(user => {

    if(!user){
      const err = new Error("Not authorized!");
      err.status = 403;
      return next(err);
    }

    req.userId = user.id;

    next();
    return;

  });



}



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

app.post('/signup',(req,res) => {
  const name = req.body.name;
  const password = req.body.password;

  const user = new User({
    name: name,
    password: hash(password)
  });

  user.save().then(() => {
    res.json({success: true});
  })


})

app.post('/login',(req,res,next) => {

  const name = req.body.name;
  const password = req.body.password;

  User.findOne({name: name, password: password}).then(user => {

    if(!user){
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


// ------ update Like Counter for post ----------------------------
app.post('/updatelike', (req, res) => {
  const postId = req.body.id;
  Post.findById(postId).then(post => {
    console.log("post >>>> ", post);

    console.log("post.likecounter before + >>>> ", post.likecounter);
    post.likecounter = post.likecounter+1;
    console.log("post.likecounter after + >>>> ", post.likecounter);

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
    if (user.subscriptions.includes(ownerPageId)){
      let indexToDel = user.subscriptions.indexOf(ownerPageId)
      console.log(indexToDel);
      user.subscriptions.splice(indexToDel, 1)
    } else {
      user.subscriptions.push(+ownerPageId)
    }
    console.log("userActive subscriptions AFTER >>>> ", user.subscriptions);
    user.save()
  })
    User.findById(ownerPageId).then(user => {
      console.log(user.subscribers);
      if (user.subscribers.includes(activeUserId)){
      let indexToDel = user.subscribers.indexOf(activeUserId)
      user.subscribers.splice(indexToDel, 1)
    } else {
      user.subscribers.push(+activeUserId)
    }
      console.log("Owner subscribers >>>> ", user.subscribers);
    user.save()
        .then(() => {
          res.json({user: user});
        })
  })
});

app.get('/userfeed',(req,res) => {

  User.find().populate().then(users => {
    res.json(users);
    // Promise.all(users.map(post => {
    //     return Comment.find({post: post}).then(comments => {
    //         post.comments = comments;
    //     })
    // })).then(() => {
    //     res.json(posts);
    // });


  })

})

// app.get('/userfeed/:userId',(req,res) => {
//     // const params = useParams();
//     // const {userId} = params;
//     User.findById(`${userId}`).populate().then(user => {
//         res.json(user);
//     })
// })

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


// app.use("/",authMiddleware);

app.post('/post',(req,res) => {

  const text = req.body.text;
  const imageUrl = req.body.imageUrl;

  User.findById(req.userId).then(user => {
    const post = new Post({
      imageUrl: imageUrl,
      text: text,
      date: new Date(),
      creator: user
    });

    post.save().then(() => {
      res.json(post);
    })
  })

});

app.post('/comment/:postId',(req,res) => {
  const text = req.body.text;
  const postId = req.params.postId;

  Post.findById(postId).then(post => {

    User.findById(req.userId).then(user => {

      const comment = new Comment(
          {
            text: text,
            creator: user,
            post: post,
            date: new Date(),
          }
      );

      comment.save().then(() => {
        res.json(comment);
      })

    })




  })
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
