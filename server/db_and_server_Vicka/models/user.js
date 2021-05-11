const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
  _id: Number,
  email: String,
  password: { type: String, select: false },

  nickname: String,
  token: { type: String, select: false },

  avatarUrl: String,

  subscribers: [{}],
  subscriptions: [{}],
  posts: [{}],
  favorites: [{}],
  comments: [{}],
  likes: [{}],

},{ strict: true});


mongoose.model('user', userSchema);

