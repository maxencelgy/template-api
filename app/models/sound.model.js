const mongoose = require("mongoose");

const Sound = mongoose.model(
    "Sound",
    new mongoose.Schema({
        title: String,
        description: String,
        url: String,
        urlImg: String,
        category: String,
        time: String,
        created_at: Date,
        updated_at: Date,
    })
);

module.exports = Sound;
