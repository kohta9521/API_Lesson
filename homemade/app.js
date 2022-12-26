const { request } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post("/booklog", (req, res) => {
    res.json({
        "OK": true
    })
});


app.listen(port, () => {
    console.log(`{pp listening at http:..localhost:${port}`);
});