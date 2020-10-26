'use strict';

import express from 'express';
import dotenv from 'dotenv';

//process.title = process.env.TITLE;

dotenv.config();

process.title = process.env.TITLE;

console.log(process);

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
