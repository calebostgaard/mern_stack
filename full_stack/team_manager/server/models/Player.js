const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player name is required"],
        minlength: [3,"Player name must be at least 3 characters"]
    },
    position: {type: String,},
}, { timestamps: true });

mongoose.model('Player', PlayerSchema);