const connection = require('../../../model/connetion.database');

//GET method:::::::::::::::::::::
let customer_registration = (req, res) => {
    let sqlquery = "SELECT * FROM customer_registration";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let customerreg_post = (req, res) => {
    let data = req.body
    let query = connection.query("INSERT INTO customer_registration SET?", data, (error, output, field) => {
        if (error) {
            res.send({ Error: error.sqlMessage })
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}


//patch Method ::::::::::::::::

let customerreg_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.mobile
        let query = connection.query("UPDATE customer_registration SET ? WHERE mobile = ?", [data, id], (data, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let customerreg_destroy = (req, res) => {
    try {
        let id = req.params.mobile;
        let query = connection.query("DELETE FROM customer_registration WHERE mobile = ?", id, (error, result, field) => {
            if (error) {
                res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { customer_registration, customerreg_post, customerreg_update, customerreg_destroy }
