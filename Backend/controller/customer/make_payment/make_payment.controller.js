const connection = require('../../../model/connetion.database');

//GET method:::::::::::::::::::::
let make_payment = (req, res) => {
    let sqlquery = "SELECT * FROM make_payment";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let make_payment_post = (req, res) => {
    let data = req.body
    let query = connection.query("INSERT INTO make_payment SET?", data, (error, output, field) => {
        if (error) {
            res.send({ Error: error.sqlMessage })
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}


//patch Method ::::::::::::::::

let make_payment_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.transactionID
        let query = connection.query("UPDATE make_payment SET ? WHERE transactionID = ?", [data, id], (error, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let make_paymentr_destroy = (req, res) => {
    try {
        let id = req.params.transactionID;
        let query = connection.query("DELETE FROM make_payment WHERE transactionID = ?", id, (error, result, field) => {
            if (error) {
                res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { make_payment, make_payment_post, make_payment_update, make_paymentr_destroy }
