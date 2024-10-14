const express = require('express');
const router = express.Router();
const CompanionController = require('../controllers/CompanionController');

// POST: User sends message to the companion
router.post('/companion/talk', CompanionController.talkToCompanion);

module.exports = router;