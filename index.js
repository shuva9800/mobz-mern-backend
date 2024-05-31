const express= require('express');
const {dbconnect} = require("./config/database");
require("dotenv").config();
const route = require('./routs/userrouts');
const cors = require('cors');

const app = express();
const port= process.env.PORT ||4000;

//body parser 
app.use(express.json());
app.use(cors());

  

//dbconnect
dbconnect();

app.listen(port, ()=>{
    console.log(`app started at port ${port}`);
})

//routing
app.use("/api/v1", route);

app.get('/',(req,res)=>{
    res.send(`<h1>successfully exicuted default route ,home page</h1>`)
})
