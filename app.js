const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const successRoutes = require('./routes/success');
const path = require('path')

const errorControllers = require('./controllers/error')

const app =express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.use(successRoutes);
app.use(adminRoutes);
app.use(contactRoutes);

app.use(shopRoutes);


app.use(errorControllers.errorControllers)


app.listen(3000)

// const server = http.createServer(app)
    
// server.listen(3000)