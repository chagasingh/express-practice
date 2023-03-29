const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact')


router.get('/contact',contactController.contactController)

router.post('/contact',contactController.postContactController)

module.exports = router;