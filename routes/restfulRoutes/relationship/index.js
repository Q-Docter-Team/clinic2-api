const User = require('../users/users.model');
const Symptom = require('../symptoms/symptoms.model');
const Reseration = require('../reserations/reserations.model');

User.hasMany(Symptom);
User.hasMany(Reseration);