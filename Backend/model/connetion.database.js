const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "ecommerce",
    password: ""
});


connection.connect((err) => {
    if (err) {
        console.log(err.sqlMessage)
    }
    else {
        console.log("Connect to database ::")
    }
})

module.exports = connection 