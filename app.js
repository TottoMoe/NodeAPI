const express = require("express");
const app = express();
const morgan = require("morgan");

// bring in routes
const { getPosts } = require("./routes/post");

// middleware
const myOwnMiddleware = (req, res, next) => {
  console.log("Middleware applied!!!");
  next();
}
app.use(morgan("dev"));
app.use(myOwnMiddleware)
//************************ */

app.get("/", getPosts);

const port = 3000;

app.listen(port, () => {
  console.log(`Node js API is listing on port: ${port}`);
});
