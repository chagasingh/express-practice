const express = require('express');

const router = express.Router();

router.get('/shop',(req,res,next)=>{
    res.send('hi bro your home')
})

module.exports = router