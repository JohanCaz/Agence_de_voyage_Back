const journeyRoutes = require('./journey');
//const journeyAvailabilityRoutes = require('./journey-availability');


// Exporter les routes
module.exports = function(app) {
    app.use('/', journeyRoutes);
   app.use('/', journeyAvailabilityRoutes);
};