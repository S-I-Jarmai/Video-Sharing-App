const express = require('express');
const app = express()
const router = express.Router()
const signUpSchemaTemplete = require('../RouteModel/RouteModel.js')

router.post('/singup',(req, res)=>{
    const createUser = new signUpSchemaTemplete({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    createUser.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
})

module.exports = router