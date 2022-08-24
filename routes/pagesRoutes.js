const express = require("express");
var router = express.Router();
const pageController = require("../controllers/pageController");
const bodyParser = require("body-parser");  //allows Express to read the body and then parse it into a Json object that we can understand.
router.use(bodyParser.json());

module.exports = () =>{
    router
    .route("/")
    .get(pageController.IndexPage);

    router
    .route("/time")
    .get(pageController.Time)

    return router
}