require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 5000;

let server;

app.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}`);
})