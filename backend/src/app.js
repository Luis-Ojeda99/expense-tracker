const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test
app.get("/", (req, res, next) => {
    res.json({ message: "Exprense-tracker API is running "});
});

module.exports = app;