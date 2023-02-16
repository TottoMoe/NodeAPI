const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

// db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

// bring in routes
const postRoutes = require("./routes/post");

// ******* middleware *****/
// const myOwnMiddleware = (req, res, next) => {
//   console.log("Middleware applied!!!");
//   next();
// }
// app.use(myOwnMiddleware)

app.use(morgan("dev"));
app.use("/", postRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Node js API is listing on port: ${port}`);
});
