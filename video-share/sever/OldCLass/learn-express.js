const express = require('express');
const app = express()



app.get('/', (req,res)=>{
    res.send('<h1>Home Page</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<b>this is about it</b>')
})

app.listen(5000,()=>console.log('Server is running'))