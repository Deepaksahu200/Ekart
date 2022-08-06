const connection = require('../../../model/connetion.database');

//GET method:::::::::::::::::::::
let shops = (req, res) => {
    let sqlquery = "SELECT * FROM shops";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let shops_post = (req, res) => {
    let data = req.body
    let query = connection.query("INSERT INTO shops SET?", data, (error, output, field) => {
        if (error) {
            res.send({ Error: error.sqlMessage })
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}


//patch Method ::::::::::::::::

let shops_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.mobile
        let query = connection.query("UPDATE shops SET ? WHERE mobile = ?", [data, id], (error, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let shops_destroy = (req, res) => {
    try {
        let id = req.params.mobile;
        let query = connection.query("DELETE FROM shops WHERE mobile = ?", id, (error, result, field) => {
            if (error) {
                res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { shops, shops_post, shops_update, shops_destroy }
