const connection = require('../../../model/connetion.database');

//GET method:::::::::::::::::::::
let category = (req, res) => {
    let sqlquery = "SELECT * FROM product_category";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let category_post = (req, res) => {
    try {
        let data = req.body
        let query = connection.query("INSERT INTO product_category SET?", data, (error, output, field) => {
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

let category_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.cid
        let query = connection.query("UPDATE product_category SET ? WHERE cid = ?", [data, id], (error, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let category_destroy = (req, res) => {
    try {
        let id = req.params.cid;
        let query = connection.query("DELETE FROM product_category WHERE cid = ?", id, (error, result, field) => {
            if (error) {
                res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { category, category_post, category_update, category_destroy }
