const mongoose = require("mongoose");

const Break = mongoose.model(
    "Break",
    new mongoose.Schema({
        title: String,
        time: String,
    })
);

module.exports = Break;


