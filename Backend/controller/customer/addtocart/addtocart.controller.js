const connection = require('../../../model/connetion.database');

//GET method:::::::::::::::::::::
let addtocart = (req, res) => {
    let sqlquery = "SELECT * FROM addtocart";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let addtocart_post = (req, res) => {
    let data = req.body
    let query = connection.query("INSERT INTO addtocart SET?", data, (error, output, field) => {
        if (error) {
            res.send({ Error: error.sqlMessage })
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}


//patch Method ::::::::::::::::

let addtocart_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.Cartid
        let query = connection.query("UPDATE addtocart SET ? WHERE Cartid = ?", [data, id], (error, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let addtocart_destroy = (req, res) => {
    try {
        let id = req.params.Cartid;
        let query = connection.query("DELETE FROM addtocart WHERE Cartid = ?", id, (error, result, field) => {
            if (error) {
                res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { addtocart, addtocart_post, addtocart_update, addtocart_destroy }
