var express = require('express');
var app = express();
const serverless = require("serverless-http");
const path = require('path')


const router = express.Router();

router.get("/", (req, res) => {
  // let absolutePath = __dirname + "views/index.html"
  // res.sendFile(absolutePath)
  // var str = __dirname;
  // var path = str.split("/");
  // console.log(path);
  // return
  // let x = __dirname.toString()

  // let y= x.split("/")
  // .slice(0, -1).join("/")+"/"
  // res.send(y)
  // console.log('x :', y)
  res.send('hi')
});

router.get("/something", (req, res) => {
  res.json({
    hello: "somethingelsenew u!"
  });
});


app.use(`/.netlify/functions/myApp`, router);

module.exports = app;
module.exports.handler = serverless(app);
