const userRoutes = require('./users/users.routes');
const symptomRoutes = require('./symptoms/symptoms.routes');
const reserationRoutes = require('./reserations/reserations.routes');
const profilepatentRoutes = require('./profilepatents/profilepatents.routes');
const periodRoutes = require('./periods/periods.routes');
const medicineRoutes = require('./medicines/medicines.routes');

module.exports = (app) => {
    userRoutes(app);
    symptomRoutes(app);
    reserationRoutes(app);
    profilepatentRoutes(app);
    periodRoutes(app);
    medicineRoutes(app);
}