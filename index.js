//importing dependencies
cons path = require('path')
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router();

//define dotenv
require('dotenv').config();

//define express
const app = express();

//parse jason bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//enable cors for all requests
app.use(cors());

//define endpoint for other endpoints
app.get('/',(req,res)=> {
  return res.status;
});

const PORT = 5000 || process.env.PORT

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})