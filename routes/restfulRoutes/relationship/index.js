const User = require('../users/users.model');
const Symptom = require('../symptoms/symptoms.model');
const Reseration = require('../reserations/reserations.model');
const Profilepatent = require('../profilepatents/profilepatents.model');
const Period = require('../periods/periods.model');
const Medicine = require('../medicines/medicines.model')

User.hasMany(Symptom);
User.hasMany(Reseration);
User.hasMany(Profilepatent);

Period.hasMany(Reseration);
Medicine.hasMany(Profilepatent);