const express = require('express');
const path = require('path');

const app = express();

// SETUP PUBLIC FILES
app.use(express.static(path.resolve('dist')));
app.use(express.static(path.resolve('public')));

// START APP
const port = process.env.PORT || 5000;
app.listen(port);
