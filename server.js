const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./api');
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

// HelmetJS
const helmet = require('helmet');
app.use(helmet());

// Session
const session = require('express-session');
app.use(session({ secret: process.env.SECRET }));

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.log(err.message);
});

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Serving the final build file from React/build
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.use('/api/', routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('We have a server running on PORT: ' + PORT);
});
