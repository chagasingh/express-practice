const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')


const app =express()

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send("<h1>PAGE NOT FOUND 404</h>")
})


app.listen(3000)

// const server = http.createServer(app)
    
// server.listen(3000)