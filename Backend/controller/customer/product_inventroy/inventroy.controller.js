const connection = require('../../../model/connetion.database');

//GET method:::::::::::::::::::::
let inventory = (req, res) => {
    let sqlquery = "SELECT * FROM product_ininventory";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let inventory_post = (req, res) => {
    let data = req.body
    let query = connection.query("INSERT INTO product_ininventory SET?", data, (error, output, field) => {
        if (error) {
            res.send({ Error: error.sqlMessage })
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}


//patch Method ::::::::::::::::

let inventory_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.pid
        let query = connection.query("UPDATE product_ininventory SET ? WHERE pid = ?", [data, id], (error, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let inventory_destroy = (req, res) => {
    try {
        let id = req.params.pid;
        let query = connection.query("DELETE FROM product_ininventory WHERE pid = ?", id, (error, result, field) => {
            if (error) {
                res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { inventory, inventory_post, inventory_update, inventory_destroy }
