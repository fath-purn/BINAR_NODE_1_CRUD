const { create, index, show, update, destroy } = require('./helpers/crud');

// test create post
create('test title', 'test data');

// test show all post
index();
// test show detail post by id
// test update post by id
update(3, { title: 'bahasa pemrograman', body: 'mempelajari tentang berbagai macam bahasa pemrograman' });
// test delete post by id
destroy(1);