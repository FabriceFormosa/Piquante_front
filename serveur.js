const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname + '/dist/hot-takes'));
app.get('/*',function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/hot-takes/index.html'))

});
app.listen(process.env.PORT);
