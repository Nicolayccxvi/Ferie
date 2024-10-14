const GoalModel = require('../models/GoalModel');

class GoalController {
    // Add a new goal
    async addGoal(req, res) {
        const { userId, type, targetDate } = req.body;
        const goal = new GoalModel(userId, type, targetDate);
        await goal.saveGoal();
        res.json({ message: "Goal added successfully!" });
    }

    // Update goal status
    async updateGoalStatus(req, res) {
        const { goalId, status } = req.body;
        let goal = new GoalModel();
        await goal.updateGoalStatus(goalId, status);
        res.json({ message: "Goal status updated!" });
    }
}

module.exports = new GoalController();
