//CALLING DOTENV,EXPRESS,MONGOOSE
require('dotenv').config()

const express = require('express')
const app=express()
const mongoose=require('mongoose')

//ESTABLISHING A SERVER AND A CONNECTION
mongoose.connect(process.env.DATABASE_URL)
const database=mongoose.connection
database.on('error',(error)=>console.error(error))
database.once('open',()=>console.log('Connected To Database'))

//MAKING SERVER TO ACCEPT JSON VALUES
app.use(express.json())

const EventsRouter = require('./API/Version1/routes/events')
app.use('/events',EventsRouter)

app.listen(process.env.PORT_NUMBER,()=>console.log('Server Started'))