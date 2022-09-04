const express = require('express');
const morgan =  require('morgan');
const client = require('./db');
const bodyParser    = require('body-parser');
const app = express();
const guestRoute = require('./routes/guest.routes')
const cors = require('cors')


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(morgan('dev'))
app.use(express.json())
app.use(guestRoute)

client.connect(err => {
    if(err){
        console.log(err.message)
    }else{
        console.log("Connected")
    }
})

app.listen(3333, () => {
    console.log("Server running at 3333")
})