const express = require('express');
const router = express.Router();
const GoalController = require('../controllers/GoalController');

// POST: Add a new goal
router.post('/goals/add', GoalController.addGoal);

module.exports = router;
