const express = require('express');
const app = express();
const port = 3000;
const chalkx = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

app.use(morgan('combined'));
app.get("/" , (req,res) =>{
    res.send('hello nantapong somsukwang');
})
app.listen(port,() =>{
    debug("listen on port"+chalkx.red(port));
})