const express = require('express');

const app = express();

const port = process.env.PORT || 8085;

const users = [
  {
    "id": "01",
    "email": "orlova@gmail.com",
    "password": "orlova01",
    "token": "0000001",
    "avatar": "imgURL",

    // вместо "user1" записываем=> users.id,  "user45" => users.id и т д по коду...
    "subscriptions": ["user1", "user45", "user33", "user2", "user10"],
    "subscribers": ["user1", "user45", "user2", "user10"],

    "posts": [
      {
        "post_id": "orlova01",
        "post_date": "post_date",
        "post_img": "imgURL",
        "post_description": "description for orlova post 1",
        "post_likers": ["user1", "user45", "user33"],
        "post_likes_counter": "23",
        "post_comments": [
          {
            "user": "users.id",
            "post_id": "users.id.posts.post_id",
            "comment_id": "id",
            "text": "some comment from user1"
            },
          {
            "user": "users.id",
            "post_id": "users.id.posts.post_id",
            "comment_id": "id",
            "text": "some comment from user45"
            },
          {
            "user": "users.id",
            "post_id": "users.id.posts.post_id",
            "comment_id": "id",
            "text": "some comment from user33"
           }
        ]
      },
      {
        "post_id": "orlova02",
        "post_date": "post_date",
        "post_img": "imgURL",
        "post_description": "description for orlova post 2",
        "post_likers": ["user45", "user33", "user1",],
        "post_likes_counter": "4",
        "post_comments": [
          {
            "comment_id": "id",
            "user_commented": "users.id",
            "comment_to_post": "users.id.posts.post_id",
            "text": "some comment from user45"
          },
          {
            "comment_id": "id",
            "user_commented": "users.id",
            "comment_to_post": "users.id.posts.post_id",
            "text": "some comment from user33"
          },
          {
            "comment_id": "id",
            "user_commented": "users.id",
            "comment_to_post": "users.id.posts.post_id",
            "text": "some comment from user1"
          }
        ]
      }
    ],

    "favorites": ["users.id.posts.post_id", "users.id.posts.post_id"]
  },

  {
    "id": "02",
    "email": "kotovskiy@gmail.com",
    "password": "kotovskiy02",
    "token": "0000002",
    "avatar": "imgURL",

    "subscriptions": ["user1", "user45", "user33", "user2", "user10"],
    "subscribers": ["user1", "user45", "user2", "user10"],

    "posts": [
      {
        "post_id": "kotovskiy01",
        "post_date": "post_date",
        "post_img": "imgURL",
        "post_description": "description for kotovskiy post 1",
        "post_likers": ["user1", "user45", "user33"],
        "post_likes_counter": "23",
        "post_comments": [
          {
            "comment_id": "id",
            "user_commented": "users.id",
            "comment_to_post": "users.id.posts.post_id",
            "text": "some comment from user1"       //  (т е from ${users.id})
          },
          {
            "comment_id": "id",
            "user_commented": "users.id",
            "comment_to_post": "users.id.posts.post_id",
            "text": "some comment from user45"
          },
          {
            "comment_id": "id",
            "user_commented": "users.id",
            "comment_to_post": "users.id.posts.post_id",
            "text": "some comment from user33"
          }
        ]
      },
      {
        "post_id": "kotovskiy02",
        "post_date": "post_date",
        "post_img": "imgURL",
        "post_description": "description for kotovskiy post 2",
        "post_likers": ["user45", "user33", "user1",],
        "post_likes_counter": "4",
        "post_comments": [
          {
            "comment_id": "id",
            "user_commented": "users.id",
            "comment_to_post": "users.id.posts.post_id",
            "text": "some comment from user45"
          },
          {
            "comment_id": "id",
            "user_commented": "users.id",
            "comment_to_post": "users.id.posts.post_id",
            "text": "some comment from user33"
          },
          {
            "comment_id": "id",
            "user_commented": "users.id",
            "comment_to_post": "users.id.posts.post_id",
            "text": "some comment from user1"
          }
        ]
      }
    ],

    "favorites": ["users.id.posts.post_id", "users.id.posts.post_id", "users.id.posts.post_id"]
  },
]

app.get('/api/users', (req, res) => {
  res.send(users)
})

app.get('/api/users/:userId', (req, res) => {
  const {userId} = req.params;                // console.log(userId)  // console.log(users.find(el => el.id === userId))
  res.send(users.find(el => el.id === userId))
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
