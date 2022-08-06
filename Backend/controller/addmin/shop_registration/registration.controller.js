const connection = require('../../../model/connetion.database');

//GET method:::::::::::::::::::::
let reg = (req, res) => {
    let sqlquery = "SELECT * FROM shop_registration";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let post = (req, res) => {
    let data = {
        reg_No: req.body.reg_No,
        shopID: req.body.shopID,
        shopName: req.body.shopName,
        Address: req.body.Address,
        State: req.body.State,
        City: req.body.City,
        Pin: req.body.Pin,
        contact: req.body.contact,
        Owner: req.body.Owner,
        Type: req.body.Type,
        Email: req.body.Email,
        URL: req.body.URL,
        GST: req.body.GST,
        Trunover: req.body.Trunover,
        Description: req.body.Description,
        Term_Condition: req.body.Term_Condition,
        status: req.body.status
    }
    let query = connection.query("INSERT INTO shop_registration SET?", data, (error, output, field) => {
        if (error) {
            res.send({ Error: error.sqlMessage })
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}


//patch Method ::::::::::::::::

let update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.shopID
        let query = connection.query("UPDATE shop_registration SET ? WHERE shopID = ?", [data, id], (data, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let destroy = (req, res) => {
    try {
        let id = req.params.shopID;
        let query = connection.query("DELETE FROM shop_registration WHERE shopID = ?", id, (error, result, field) => {
            if (error) {
                res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { reg, post, update, destroy }
