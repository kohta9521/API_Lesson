const { request } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post("/booklog", (req, res) => {
    const booklog = req.body
    res.json({
        "OK": true,
        "booklog": booklog
    })
});


app.listen(port, () => {
    console.log(`{pp listening at http:..localhost:${port}`);
});