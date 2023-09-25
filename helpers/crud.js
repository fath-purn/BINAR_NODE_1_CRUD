const fs = require('fs');
const posts = require('../database/posts');
const PostModel = require('../models/post');

function create(title, body) {
    let newPost = new PostModel(posts.id++, title, body);
    posts.data.push(newPost);

    fs.writeFileSync('./database/posts.json', JSON.stringify(posts, null, 4));
}

function index() { }
function show(id) { }
function update(id, title, body) {

}
function destroy(id) {
    let newPosts = posts.data.filter(post => post.id != id);
    posts.data = newPosts;

    fs.writeFileSync('./database/posts.json', JSON.stringify(posts, null, 4));
}

module.exports = { create, index, show, update, destroy };