const express= require('express');
const {dbconnect} = require("./config/database");
require("dotenv").config();
const http = require('http');
const route = require('./routs/userrouts');
const cors = require('cors');
const socketIo = require('socket.io');

const app = express();
const port= process.env.PORT ||4000;

//socket.io connetc
const server = http.createServer(app);
const io = socketIo(server, {
    cors:{
        origin: "http://localhost:5173/",
        methods : ['GET', 'POST']
    }
});

//body parser 
app.use(express.json());
app.use(cors());

  

//dbconnect
dbconnect();



//routing
app.use("/api/v1", route);
//iowala

const liveUsers = new Map();

io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
        liveUsers.delete(socket.id);
        io.to('liveUsers').emit('updateUsers', Array.from(liveUsers.values()));
    });

    socket.on('newUser', (user) => {
        liveUsers.set(socket.id, { name: user.name, email: user.email, socketId: socket.id });
        socket.join('liveUsers');
        io.to('liveUsers').emit('updateUsers', Array.from(liveUsers.values()));
    });
});

server.listen(port, ()=>{
    console.log(`app started at port ${port}`);
})

app.get('/',(req,res)=>{
    res.send(`<h1>successfully exicuted default route ,home page</h1>`)
})
