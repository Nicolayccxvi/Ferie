const AIService = require('../services/AIService');
const CompanionModel = require('../models/CompanionModel');

class CompanionController {
    async talkToCompanion(req, res) {
        const { message, userId } = req.body;
        const response = await AIService.generateResponse(message, userId);

        // save the convo
        let Companion = new CompanionModel(userId);
        Companion.saveConversation({ message, response});

        res.json({ response });
    }

    // Load conversation history
    async getConversationHistory(req, res) {
        const { userId } = req.params;
        let Companion = new CompanionModel(userId);
        const history = await Companion.getMoodHistory(userId);
        res.json({ history });
    }

}

module.exports = new CompanionController();