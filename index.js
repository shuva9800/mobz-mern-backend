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
// app.use(
// 	cors({
// 		origin:"http://localhost:5173",
// 		credentials:true,
// 	})
// )
// const corsOptions = {
// 	origin: 'https://userdata-mern-project-pkcumau94-shuva9800s-projects.vercel.app', // Replace with your frontend URL
// 	optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
//   };
  
//   app.use(cors(corsOptions));
  

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
