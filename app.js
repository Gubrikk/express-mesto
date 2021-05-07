const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
  req.user = {
    _id: '608b1d3c9bd7e1479097ad1c',
  };

  next();
});

const router = require('./routes');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(router);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
