const express = require("express"); 
const app = express();
const port = 3001; 
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); 

var connection = mysql.createConnection({
    host : "localhost",
    username: "sbsst",
    password: "sbs123414",
    database : "ubi", 
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send('코딩 중!')
})

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})