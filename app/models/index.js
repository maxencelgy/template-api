const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.break = require("./break.model");
db.exercices = require("./exercises.model");
db.emotions = require("./emotions.model");
db.sound = require("./sound.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;