const express = require('express');
const app = express();


// bring in routes
const { getPosts } = require('./routes/post')


app.get('/', getPosts);

const port = 3000


app.listen(port, () => {
  console.log(`Node js API is listing on port: ${port}`)
})