const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine","ejs");
app.use(require("./routes"));

app.listen(port,() => {
    console.log(`Running on port ${port}`)
});