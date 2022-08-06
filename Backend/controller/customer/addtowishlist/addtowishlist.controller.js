const connection = require('../../../model/connetion.database');

//GET method:::::::::::::::::::::
let addtowishlist = (req, res) => {
    let sqlquery = "SELECT * FROM addtowishlist";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let addtowishlist_post = (req, res) => {
    let data = req.body
    let query = connection.query("INSERT INTO addtowishlist SET?", data, (error, output, field) => {
        if (error) {
            res.send({ Error: error.sqlMessage })
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}


//patch Method ::::::::::::::::

let addtowishlist_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.c_mobile;
        let query = connection.query("UPDATE addtowishlist SET ? WHERE c_mobile = ?", [data, id], (error, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let addtowishlist_destroy = (req, res) => {
    try {
        let id = req.params.c_mobile;
        let query = connection.query("DELETE FROM addtowishlist WHERE c_mobile = ?", id, (error, result, field) => {
            if (error) {
                res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { addtowishlist, addtowishlist_post, addtowishlist_update, addtowishlist_destroy }
