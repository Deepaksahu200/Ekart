const connection = require('../../../model/connetion.database');

//GET method:::::::::::::::::::::
let specification = (req, res) => {
    let sqlquery = "SELECT * FROM product_specificaton";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let specification_post = (req, res) => {
    let data = req.body
    let query = connection.query("INSERT INTO product_specificaton SET?", data, (error, output, field) => {
        if (error) {
            res.send({ Error: error.sqlMessage })
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}


//patch Method ::::::::::::::::

let specification_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.pid
        let query = connection.query("UPDATE product_specificaton SET ? WHERE pid = ?", [data, id], (error, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let specification_destroy = (req, res) => {
    try {
        let id = req.params.pid;
        let query = connection.query("DELETE FROM product_specificaton WHERE pid = ?", id, (error, result, field) => {
            if (error) {
                res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { specification, specification_post, specification_update, specification_destroy }
