var express = require('express');
var app = express();
const serverless = require("serverless-http");
const path = require('path')


const router = express.Router();
app.use("/",express.static("public"));

router.get("/", (req, res) => {
  console.log('dirname: ',__dirname)
  let myArr=__dirname.split('\\')
  myArr.pop()
  let newDir=myArr.join('/')
  let StaticFileLoc='views/index.html'
  res.sendFile(newDir+"/"+StaticFileLoc)
});

router.get("/something", (req, res) => {
  res.json({
    hello: "somethingelse!"
  });
});


app.use(`/.netlify/functions/myApp`, router);

module.exports = app;
module.exports.handler = serverless(app);
