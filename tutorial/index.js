const express = require('express');
const app = express();

app.listen(3000, console.log("サーバーが開始されました"));

app.get("/", (req, res) => {
    res.send("開始");
})

