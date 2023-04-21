const mongoose = require("mongoose");

const Exercices = mongoose.model(
    "Exercices",
    new mongoose.Schema({
        emotions_id:  Number,
        sound_id: Number,
        title: String,
        description: String,
        time: Number,
        created_at: Date,
        updated_at: Date,
    })
);

module.exports = Exercices;
