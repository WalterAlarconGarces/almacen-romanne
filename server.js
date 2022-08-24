const express = require('express');
const { engine } = require("express-handlebars");   //required in order to use handlebars system
const exphbs = require("express-handlebars");   //
require('dotenv').config(); //required in order to use .env file
const port = process.env.PORT || 3000;
const app = express()
const database = require('./config/database'); //calls database configuration
const pagesRoutes = require('./routes/pagesRoutes');    //manages the HTML paths and methods, with respect to the "/pages" path.
const bodyParser = require("body-parser");  //allows Express to read the body and then parse it into a Json object that we can understand.


app.use(express.json());    //recognizes the incoming request object as a JSON object
app.use(bodyParser.urlencoded({ extended: false }));  //parses the text as URL-encoded data (which is the way browsers tend to send form data from regular forms set to POST) and exposes the resulting object (containing the keys and values) in req.
app.use("/",pagesRoutes())
app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/partials",
  })
)
app.use("/assets", express.static(__dirname + "/assets"));
app.use("/public", express.static(__dirname + "/public"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))