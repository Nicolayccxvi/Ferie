const express = require('express');
const router = express.Router();
const PanicController = require('../controllers/PanicController');

// GET: Trigger panic mode
router.get('/panic/activate', PanicController.activatePanicMode);

module.exports = router;
