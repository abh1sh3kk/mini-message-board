const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const chatModel = require("./models/chatModel");

// -----------------------------------------------------------------------------
require("./db");
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
// -----------------------------------------------------------------------------

app.get("/", (req, res) => {
    res.send("Welcome.");
});

app.get("/test", (req, res) => {
    console.log("I am being tested");
    res.redirect("/");
});

app.post("/new", async (req, res) => {
    const { username, message, chatDate, colorBG } = req.body;

    const receivedData = { username, message, chatDate, colorBG };

    try {
        const insertedData = await chatModel.create(receivedData);
        console.log("Inserted data are", insertedData);
        console.log("-*-Insertion successful-*-");

        // --------------------------------------
        try {
            const freshChats = await chatModel.find({});
            res.json(freshChats);
        } catch (e) {
            console.log("Error in fetching chats");
        }
        // --------------------------------------
    } catch (e) {
        console.log("Error in inserting and fetching the data in atlas. ");
    }
});

// -------For Testing Purpose--------------
app.get("/new", async (req, res) => {
    const { username, message, chatDate } = {
        username: "Abhishek",
        message: "Hi how are you?",
        chatDate: "2023-05-15T04:25:35.466Z",
    };

    const gotMessage = {
        username: username,
        message: message,
        chatDate: chatDate,
    };

    try {
        await chatModel.create(gotMessage);
        console.log("Insertion successful");
    } catch (e) {
        console.log("Error in inserting the data in atlas. ");
    }

    console.log("Testing is being done.");
    console.log(gotMessage);
    res.end();
});
// -------For Testing Purpose--------------

// -----------------------------------------------------------------------------
// Initial data
// -----------------------------------------------------------------------------
app.get("/chats", async (req, res) => {
    try {
        const chats = await chatModel.find({});
        res.json(chats);
    } catch (e) {
        console.log("Error in fetching chats");
    }
});
// -----------------------------------------------------------------------------

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`);
});
