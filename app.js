const express = require("express"); // npm i express
const app = express();
const mongoose = require("mongoose"); // npm i mongoose
const morgan = require("morgan"); // npm i morgan
const bodyParser = require('body-parser'); // npm i body-parser
const dotenv = require("dotenv"); // npm i dotenv
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
app.use(bodyParser.json()); 
app.use("/", postRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Node js API is listing on port: ${port}`);
});
