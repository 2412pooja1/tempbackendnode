require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Use environment variables
const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT || 8001;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to mongodb"))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('running on localhost 8000');
});

const route = require('./route');
app.use('/', route);

app.listen(port, () => {
    console.log(`running on localhost ${port}`);
});
