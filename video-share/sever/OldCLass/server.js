const express = require('express'); 
const app = express();
const routerURL = require('./api/routes.js')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCES,()=>console.log('Database Connect!'))

app.use(express.json())
app.use('/api/routes', routerURL)

app.listen(5000,()=>console.log('Server is running...'))