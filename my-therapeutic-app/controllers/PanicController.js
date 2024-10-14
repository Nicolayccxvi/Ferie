class PanicController {
    // Trigger calming exercises
    async activatePanicMode(req, res) {
        // Return calming techniques (e.g., breathing exercises)
        res.json({
            message: "Take a deep breath. Let's practice box breathing together...",
            instructions: "Inhale for 4 seconds, hold for 4, exhale for 4, and hold for 4."
        });
    }
}

module.exports = new PanicController();
