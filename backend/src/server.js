require("dotenv").config();

const app = require("./app");
const pool = require('./config/db')


const PORT = process.env.PORT || 5000;

let server;

pool.query('SELECT NOW()', (err, res) => {
    if(err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Database connected successfully');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})