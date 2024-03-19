const express = require("express");
let app = express();
const cors=require('cors')
const db = require ("./db/index.js")
const ProductRoutes = require('./routes/Product.routes.js');
const UserRoute = require('./routes/User.routes.js');
app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
app.use(cors())
app.use('/api/users', UserRoute);
app.use('/api/product', ProductRoutes);
let port = 3000;


app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
