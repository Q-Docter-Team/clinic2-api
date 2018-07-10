const userRoutes = require('./users/users.routes');
const symptomRoutes = require('./symptoms/symptoms.routes');
const reserationRoutes = require('./reserations/reserations.routes');
const profilepatentRoutes = require('./profilepatents/profilepatents.routes');

module.exports = (app) => {
    userRoutes(app);
    symptomRoutes(app);
    reserationRoutes(app);
    profilepatentRoutes(app);
}