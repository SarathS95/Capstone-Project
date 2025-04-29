'use strict';
const User = require("./user")
const Post = require("./post")
const Comment = require("./comment")
const Like = require("./like")

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });
Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });
User.hasMany(Like, { foreignKey: 'userId' });
Like.belongsTo(User, { foreignKey: 'userId' });
Post.hasMany(Like, { foreignKey: 'postId' });
Like.belongsTo(Post, { foreignKey: 'postId' });

async function init() {
    await User.sync();
    await Post.sync();
    await Comment.sync();
    await Like.sync();
};

init();

module.exports = {
    User, Post, Comment, Like
}