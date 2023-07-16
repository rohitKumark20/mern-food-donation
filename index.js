const express = require('express');
const dotenv = require('dotenv')
const Connection  = require('./database/db.js')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express();


dotenv.config()
const routes = require('./routes/authRoute.js')
Connection();

app.use(express.json())
app.use(cookieParser())
app.use('/',routes)

app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*',function(_,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'),function(err){
        res.status(500).send(err)
    })
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`))