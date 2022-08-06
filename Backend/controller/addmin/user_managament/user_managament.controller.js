const connection = require('../../../model/connetion.database');

//GET method:::::::::::::::::::::
let user_management = (req, res) => {
    let sqlquery = "SELECT * FROM user_management";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let user_management_post = (req, res) => {
    try {
        let data = req.body
        let query = connection.query("INSERT INTO user_management SET?", data, (error, output, field) => {
            if (error) {
                return({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": output }))
        })
    } catch (error) {
        res.send(error.message)
    }
}

//patch Method ::::::::::::::::

let user_management_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.user_id
        let query = connection.query("UPDATE  user_management SET ? WHERE user_id = ?", [data, id], (error, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let user_management_destroy = (req, res) => {
    try {
        let id = req.params.user_id;
        let query = connection.query("DELETE FROM  user_management WHERE user_id = ?", id, (error, result, field) => {
            if (error) {
                res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { user_management, user_management_post, user_management_update, user_management_destroy }
