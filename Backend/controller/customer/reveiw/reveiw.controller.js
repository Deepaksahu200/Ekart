const connection = require('../../../model/connetion.database');

//GET method:::::::::::::::::::::
let review = (req, res) => {
    let sqlquery = "SELECT * FROM review";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let review_post = (req, res) => {
    let data = req.body
    let query = connection.query("INSERT INTO review SET?", data, (error, output, field) => {
        if (error) {
            res.send({ Error: error.sqlMessage })
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}


//patch Method ::::::::::::::::

let review_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.cid
        let query = connection.query("UPDATE review SET ? WHERE cid = ?", [data, id], (error, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let review_destroy = (req, res) => {
    try {
        let id = req.params.cid;
        let query = connection.query("DELETE FROM review WHERE cid = ?", id, (error, result, field) => {
            if (error) {
                res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { review, review_post, review_update, review_destroy }
