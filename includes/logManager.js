// server/includes/logManager.js
const dbGateway = require('./databaseGateway');

module.exports = {
    async log(type, message) {
        let admin = await dbGateway.getAdmin();
        let logs = admin.logs || [];
        logs.push({
            time: new Date(),
            type: type.name,
            message
        });

        await dbGateway.updateAdmin({
            logs: JSON.stringify(logs)
        });

        console.log(type.name, message);
    },

    async getLogs() {
        let admin = await dbGateway.getAdmin();
        return JSON.parse(admin.logs || '[]').sort((a, b) => new Date(b.time) - new Date(a.time));
    }
}
