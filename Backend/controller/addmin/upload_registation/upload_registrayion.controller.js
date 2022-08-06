const connection = require('../../../model/connetion.database')

//GET method:::::::::::::::::::::
let upload_registration = (req, res) => {
    let sqlquery = "SELECT * FROM upload_registration";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let upload_registration_post = (req, res) => {
    let data = req.body
    let query = connection.query("INSERT INTO upload_registration SET?", data, (error, output, field) => {
        if (error) {
            res.send({ Error: error.sqlMessage })
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}


//patch Method ::::::::::::::::

let upload_registration_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.shopID
        let query = connection.query("UPDATE upload_registration SET ? WHERE shopID = ?", [data, id], (error, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let upload_registration_destroy = (req, res) => {
    try {
        let id = req.params.shopID;
        let query = connection.query("DELETE FROM upload_registration WHERE shopID = ?", id, (error, result, field) => {
            if (error) {
                res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { upload_registration, upload_registration_post, upload_registration_update, upload_registration_destroy }
