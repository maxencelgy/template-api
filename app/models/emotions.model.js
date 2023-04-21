const mongoose = require("mongoose");

const Emotions = mongoose.model(
    "Emotions",
    new mongoose.Schema({
            name: String,
            description: String,
    })
);

module.exports = Emotions;
