const express = require("express");
const cors = require("cors");
const {Client} = require("pg") ;


const app = express();
app.use(cors());
app.use(express.json());

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "141219",
    port: 5432
})

client.connect();


app.post('/signup',(req, res) => {

    let { name, password } = req.body;
    console.log({
        name, 
        password});

    
    client.query(`INSERT INTO login (name, password) VALUES ($1, $2)`, [name, password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    }) 
})

app.post('/login', (req, res) => {

    let { name, password } = req.body;
    console.log({
        name, 
        password});

    
    client.query(`SELECT * FROM login WHERE name = $1 AND password = $2`, [name, password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.rows.length > 0) {
            return res.json("Success"); 
        }
        else {
            return res.json("Failed");
        }
        
    }) 
})



app.listen(8081, ()=> {
    console.log("Listening");
})
