//const { request, response } = require('express')
const { response } = require('express')
const express = require('express')
const router =express.Router()

const signUpTemplateCopy =require('../models/SignUpModels')


router.post('/signup', (request,response)=>{
     const signupUser =new signUpTemplateCopy({
         fullName:request.body.fullName,
         userName:request.body.userName,
         email:request.body.email,
         password:request.body.password
     })
     signupUser.save()
     .then(data =>
        response.json(data))
    })
    .catch(error =>{
        response.json(error)
    })

    module.exports=router