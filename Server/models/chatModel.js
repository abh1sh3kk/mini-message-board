const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    message: {
        type: String,
        required: true,
        maxLength: 50,
    },
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
    },
    chatDate: {
        type: String,
    },
    colorBG: {
        type: String,
    },
});

const chatModel = mongoose.model("Public Chats", chatSchema);

module.exports = chatModel;
