const express = require("express");
let app = express();
const cors=require('cors')
const db = require ("./db/index.js")
const ProductRoutes = require('./routes/Product.routes.js');
const UserRoute = require('./routes/User.routes.js')
const cartRoutes = require('./routes/Cart.routes.js');
const cloudinary = require('cloudinary');
const fileUpload = require('express-fileupload');

cloudinary.v2.config({
  cloud_name: 'duekcetwe',
  api_key: '313496654712626',
  api_secret: 'LTs6VHjFAjSIorhnPJ-w8iqwffo',
  secure: true,
});

app.use(fileUpload());
app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
app.use(cors())
app.use('/api/user', UserRoute);
app.use('/api/product', ProductRoutes);
app.use('/api/cart', cartRoutes);
app.post('/api/upload', async (req, res) => {
  try {
    const fileStr = req.files.file.data.toString('base64'); // Convert the file data to a base64 string
    const uploadResponse = await cloudinary.uploader.upload("data:image/jpeg;base64," + fileStr, { // Prepend the data URL media type
      upload_preset: 'enojnrjf',
    });
    res.json({ imageUrl: uploadResponse.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});
let port = 3000;


app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
