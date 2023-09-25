const fs = require("fs");
const posts = require("../database/posts");
const PostModel = require("../models/post");

function create(title, body) {
  let newPost = new PostModel(posts.id++, title, body);
  posts.data.push(newPost);

  fs.writeFileSync("./database/posts.json", JSON.stringify(posts, null, 4));
}

function index() {
  let readFile = fs.readFileSync("./database/posts.json", "utf-8");
  let data = JSON.parse(readFile).data;
  console.log(data[1]);
}

function show(id) {
  let readFile = fs.readFileSync("./database/posts.json", "utf-8");
  
}

function update(id, title, body) {}
function destroy(id) {}

module.exports = { create, index, show, update, destroy };
