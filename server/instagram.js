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

mongoose.connect('mongodb://localhost:27017/napostu', {useNewUrlParser: true, useUnifiedTopology: true});

const User = mongoose.model('User',{
    nickname: String,
    username: String,
    avatarUrl: String,
    password: { type: String, select: false },
    token: { type: String, select: false },
    subscribers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }]
});


const Post = mongoose.model("Post",{
    imageUrl: String,
    text: String,
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
    ]
});

const Comment = mongoose.model('Comment',{
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

    User.findOne({name: name, password: hash(password)}).then(user => {

        if(!user){
            next(new Error("wrong name or password"))

        }

        const token = hash(user._id + new Date());

        user.token = token;
        user.save().then(() => {
            res.json({token: token});
        })

    })


})


app.get('/feed',(req,res) => {

    Post.find().populate().then(posts => {
        console.log(posts);
        res.json(posts);
        // Promise.all(users.map(post => {
        //     return Comment.find({post: post}).then(comments => {
        //         post.comments = comments;
        //     })
        // })).then(() => {
        //     res.json(posts);
        // });


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
User.find().then(users => {
    console.log(users);
})