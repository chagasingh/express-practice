const rootDir = require('../util/path');
const path = require('path')

    exports.contactController = (req,res,next)=>{
        res.sendFile(path.join(rootDir,'views','contact.html'))
    }

    exports.postContactController = (req,res,next)=>{
        console.log(req.body);
        res.redirect('/success');
    }