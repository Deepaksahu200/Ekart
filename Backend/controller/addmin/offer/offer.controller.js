const connection = require('../../../model/connetion.database');

//GET method:::::::::::::::::::::
let Offer = (req, res) => {
    let sqlquery = "SELECT * FROM offers";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let Offer_post = (req, res) => {
    try {
        let data = req.body
        console.log(req.body)
      
        let query = connection.query("INSERT INTO offers SET?", data, (error, output, field) => {
            if (error) {
                return res.json({ Error: error.sqlMessage })
            }
            
            res.send(JSON.stringify({ "status": 200, "response": output }))
        })
    } catch (error) {
        res.send(error.message)
    }
}


//patch Method ::::::::::::::::

let Offer_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.offer_id
        let query = connection.query("UPDATE offers SET ? WHERE offer_id = ?", [data, id], (error, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let Offer_destroy = (req, res) => {
    try {
        let id = req.params.offer_id;
        let query = connection.query("DELETE FROM offers WHERE offer_id = ?", id, (error, result, field) => {
            if (error) {
                return res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
            })
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { Offer, Offer_post, Offer_update, Offer_destroy }
