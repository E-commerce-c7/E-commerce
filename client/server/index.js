const express = require("express");
let app = express();
const cors=require('cors')
const db = require ("./db/index.js")
const ProductRoutes = require('./routes/Product.routes.js');
const UserRoute = require('./routes/User.routes.js')
const cartRoutes = require('./routes/Cart.routes.js');
const cloudinary = require('cloudinary');
const fileUpload = require('express-fileupload');
const { Resend } = require('resend');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);


cloudinary.v2.config({
  cloud_name: 'duekcetwe',
  api_key: '313496654712626',
  api_secret: 'LTs6VHjFAjSIorhnPJ-w8iqwffo',
  secure: true,
});

const mg = mailgun.client({username: 'api', key:'b4eb2427a8d2ee0b158eeda957585af4-309b0ef4-48888e93'});


app.use(fileUpload());
app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
app.use(cors())
app.use('/api/user', UserRoute);
app.use('/api/product', ProductRoutes);
app.use('/api/cart', cartRoutes);
app.post('/api/upload', async (req, res) => {
  try {
    const fileStr = req.files.file.data.toString('base64'); 
    const uploadResponse = await cloudinary.uploader.upload("data:image/jpeg;base64," + fileStr, { 
      upload_preset: 'enojnrjf',
    });
    res.json({ imageUrl: uploadResponse.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});
const resend = new Resend('re_MjRutJFg_P2FCzroX22R5HkNZ2bBwSuBz');

app.post('/api/email', async (req, res) => {
  let email = req.body.email
  let html = req.body.html
  
 await mg.messages.create('sandbox68ac0f54e4e8423fbe6f820780c7b910.mailgun.org', {
    from: "Excited User <mailgun@sandbox68ac0f54e4e8423fbe6f820780c7b910.mailgun.org>",
    to: ["r.7xell@gmail.com"],
    subject: "Hello",
    text: "Testing some Mailgun awesomeness!",
    html: "<h1>Testing some Mailgun awesomeness!</h1>"
  })

  .then(() => res.send('Email sent!'))
  .catch(err => res.status(500).send(err.message));
})
let port = 3000;


app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
