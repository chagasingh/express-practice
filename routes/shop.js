const express = require('express');
const fs = require('fs');

const router = express.Router();
const data = []

router.get('/',(req,res,next)=>{
    fs.readFile("username.txt",(err,data)=>{
        if(err){
            console.log(err)
            data = "no chat record"
        }

        res.send(`${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username') "action="/" method="POST"><input id="message" type="text" name="message" placeHolder="type your message" /><input id="username" type="hidden" name="username"/><button type="submit" > SEND MESSAGE </button></form>`)
    })
   
})

router.post('/',(req,res,next)=>{
    
    fs.writeFile("username.txt",`${req.body.username} : ${req.body.message} --`,{flag:'a'},(err)=>
        err ? console.log(err) : res.redirect('/')
    ) 
})

module.exports = router