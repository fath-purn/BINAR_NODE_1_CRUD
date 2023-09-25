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
//Azza Maulana Aulia
function update(id, title, body) { 
    function update(id, title, body) {
    const postIndex = posts.data.findIndex(post => post.id === id);

    if (postIndex !== -1) {
        posts.data[postIndex].title = title;
        posts.data[postIndex].body = body;
        fs.writeFileSync('./database/posts.json', JSON.stringify(posts, null, 4));
        return true; // Mengembalikan true jika pembaruan berhasil
    }

    return false; // Mengembalikan false jika posting dengan ID tertentu tidak ditemukan
}
}
function destroy(id) { }

module.exports = { create, index, show, update, destroy };