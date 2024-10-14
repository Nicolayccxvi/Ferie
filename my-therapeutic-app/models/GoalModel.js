class GoalModel {
    constructor(userId, type, targetDate, status = false) {
        this.userId = userId;
        this.type = type;  // e.g., 'Sleep', 'Smoking Reduction'
        this.targetDate = targetDate;
        this.status = status;
    }

    saveGoal() {
        // Logic to save goal to DB
    }

    updateGoalStatus(goalId, status) {
        // Logic to update goal status in DB
    }
}
