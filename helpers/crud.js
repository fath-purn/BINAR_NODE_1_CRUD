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

function show(id) { }
function update(id, { title, body }) {
  const result = fs.readFileSync('./database/posts.json', 'utf-8');
  const posts = JSON.parse(result);
  const post = posts.data.find((post) => post.id === id);
  if (!post) return 'Post not found';

  const updatedPost = posts.data.map((post) => {
    if (post.id === id) {
      return {
        id,
        title,
        body,
      };
    }
    return post;
  });

  fs.writeFileSync('./database/posts.json', JSON.stringify({ id: posts.id, data: updatedPost }, null, 4));
}

function destroy(id) {}

module.exports = { create, index, show, update, destroy };