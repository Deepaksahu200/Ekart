const connection = require('../../../model/connetion.database');

//GET method:::::::::::::::::::::
let categorysub = (req, res) => {
    let sqlquery = "SELECT * FROM product_subcategory";
    let query = connection.query(sqlquery, (error, output, field) => {
        if (error) {
            console.log("error found");
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
}

//POST method::::::::::::::::::

let categorysub_post = (req, res) => {
    try{
    let data = req.body
    let query = connection.query("INSERT INTO product_subcategory SET?", data, (error, output, field) => {
        if (error) {
            return({ Error: error.sqlMessage })
        }
        res.send(JSON.stringify({ "status": 200, "response": output }))
    })
   }catch(error){
    res.send(error.message)
   }
}


//patch Method ::::::::::::::::

let categorysub_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.ccid
        let query = connection.query("UPDATE product_subcategory SET ? WHERE ccid = ?", [data, id], (error, result, field) => {
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}

//Delete method ::::::::::::::::

let categorysub_destroy = (req, res) => {
    try {
        let id = req.params.ccid;
        let query = connection.query("DELETE FROM product_subcategory WHERE ccid = ?", id, (error, result, field) => {
            if (error) {
                res.send({ Error: error.sqlMessage })
            }
            res.send(JSON.stringify({ "status": 200, "response": result }))
        })
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = { categorysub, categorysub_post, categorysub_update, categorysub_destroy }
