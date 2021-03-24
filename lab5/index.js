const express = require("express");
const app = express();
const prt = 3000;

const routeMessages = require('./routers/api/v1/messages');
const pug = require('pug');

app.set('view engine', 'pug'); 
app.get("/", (req, res) =>{ 
    res.render('index');
});
app.use("/api/v1/messages", routeMessages);

app.listen(prt, () => {
  console.log(`Example app listening at http://localhost:${prt}`)
})