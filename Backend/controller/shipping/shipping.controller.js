const connection = require('../../model/connetion.database')

//GET method:::::::::::::::::::::
let shipping = (req, res) => {
    let sqlquery = "SELECT * FROM shipping";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let shipping_post = (req, res) => {
    let data = req.body
    let query = connection.query("INSERT INTO shipping SET?", data, (error, output, field) => {
        if (error) {
            res.send({ Error: error.sqlMessage })
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}


//patch Method ::::::::::::::::

let shipping_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.ShipId
        let query = connection.query("UPDATE shipping SET ? WHERE  = ?", [data, id], (error, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let shipping_destroy = (req, res) => {
    try {
        let id = req.params.ShipId;
        let query = connection.query("DELETE FROM shipping WHERE ShipId = ?", id, (error, result, field) => {
            if (error) {
                res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { shipping, shipping_post, shipping_update, shipping_destroy }
