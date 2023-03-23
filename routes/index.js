const officeRoutes = require('./office');
const officeAvailabilityRoutes = require('./office-availability');


// Exporter les routes
module.exports = function(app) {
    app.use('/', officeRoutes);
    app.use('/', officeAvailabilityRoutes);
};