const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/mytesting', {useNewUrlParser: true, useUnifiedTopology: true});

const User = mongoose.model("User", {
    _id: Number,
    nickname: String,
    email: String,
    password: { type: String, select: false },
    token: { type: String, select: false },
    avatar: String,
    subscriptions: [{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User",
    }],
    subscribers: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    }],
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    }],
    // favorites: Array
})

const Post = mongoose.model("Post",{

    imageUrl: String,
    post_description: String,
    date: Date,
    likers: Array,
    like_counter: Number,
    creator: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User",
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
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User",
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    }
});


Post.find().populate('post').then(posts => {
const testUser = new User ({
    _id: 6,
    nickname: "Test",
    email: "test@test.ua",
    password: 123321,
    token: "hereIsToken",
    avatar: "url",
    subscriptions: ["user111", "user444", "user333"],
    subscribers: ["user111", "user444", "user333"],
    post: posts,
    //     favorites:[]

})
    testUser.save().then(()=>{})

})

User.findOne().then(user => {
    Comment.findOne().then(comments => {
    const testPost = new Post ({
        imageUrl: "urlIMG",
        post_description: "Just random text",
        date: new Date,
        likers: [{user : "user111"}, {user: "user444"}, {user: "user333"}],
        like_counter: 23,
        creator: user.nickname,
        comments: comments
    })
    testPost.save().then(()=>{})
})
})


Post.findOne().then(posts => {
    const testComment = new Comment({
        text: "Just comment",
        date: new Date(),
        creator: {},
        post: posts
    })
    testComment.save().then(() => {
    })
})

User.find().then(users => {
    console.log(users);
})