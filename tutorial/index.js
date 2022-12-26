const express = require('express');
const app = express();

app.listen(3000, console.log("サーバーが開始されました"));

app.get("/", (req, res) => {
    res.send("開始");
});

// 顧客情報をサーバーに置いておく
const customers = [
    { title: "田中", id: 1 },
    { title: "斎藤", id: 2 },
    { title: "橋本", id: 3 },
    { title: "鈴木", id: 4 },
    { title: "安藤", id: 5 },
]


// データの取得を可能にする(CRUD) (GETメソッド)
app.get("/api/customers", (req, res) => {
    res.send(customers);
})