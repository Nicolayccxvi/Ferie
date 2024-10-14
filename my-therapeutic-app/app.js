const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Import routes
const companionRoutes = require('./routes/companionRoutes');
const goalRoutes = require('./routes/goalRoutes');
const panicRoutes = require('./routes/panicRoutes');

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Use routes
app.use(companionRoutes);
app.use(goalRoutes);
app.use(panicRoutes);

app.listen(3000, () => {
    console.log("Therapeutic app running on http://localhost:3000");
});
