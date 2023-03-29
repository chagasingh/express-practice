const rootDir = require('../util/path');
const path = require('path')

exports.errorControllers = (req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','page-error.html'))
}