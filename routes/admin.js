const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin')



router.get('/add-product', adminController.adminController)

router.post('/add-product',adminController.postAdminController)

module.exports = router;