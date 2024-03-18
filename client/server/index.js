const express = require("express");
let app = express();
const cors=require('cors')
const db = require ("./db/index.js")
// const route = require('./models/routes/index');

app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
app.use(cors())

// app.use('/api', route);
let port = 3000;

// app.get("/api",function(req,res){
//   res.send("hello Word")
//   })
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
