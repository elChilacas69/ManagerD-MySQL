const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.routes');
const clientManager = require('./includes/clientManager');
const consts = require('./includes/const');
const db = require('./config/db.config);

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

app.listen(consts.web_port, () => {
    console.log(`Server running on port ${consts.web_port}`);
});

module.exports = app;
