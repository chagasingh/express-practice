const rootDir = require('../util/path');
const path = require('path')

    exports.adminController = (req,res,next)=>{
        res.sendFile(path.join(rootDir,'views','add-product.html'))
    }

    exports.postAdminController = (req,res,next)=>{
        console.log(req.body);
        res.redirect('/');
    }