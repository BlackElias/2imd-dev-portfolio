const express = require("express");
const app = express();
const prt = 3000;

const routeMessages = require('./routers/api/v1/messages');
const pug = require('pug');