const express = require('express');
const app = express();
app.use(express.json()); // json ファイルの指定

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


// find関数　理解しておく
app.get("/api/customers/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    res.send(customer);
});

// データを送信 (作成) POST メソッド
app.post("/api/customers", (req, res) => {
    const customer = {
        title: req.body.title,
        id: customers.length + 1,
    };
    customers.push(customer);
    res.send(customers);
});

// データを更新する (PUT)
app.put("/api/customers/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    customers.title = req.body.title;
    res.send(customer);
});

