const { Schema, model } = require('mongoose');
const dateFormat = require("../utils/dateFormat");


const UserSchema = new Schema(
  {}
);

// get total count of comments and replies on retrieval
UserSchema.virtual("thoughtCount").get(function () {
  return this.thoughts.reduce((total, thought) => total + thought.replies.length + 1, 0);
});

const User = model("User", UserSchema);

module.exports = User;