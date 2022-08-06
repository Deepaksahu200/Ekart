const joi = require('joi');

const schema = joi.object({

    Cartid: joi.number().integer().min(1).max(100).required(),
    pid: joi.required(),
    c_mobile: joi.required(),
    quantity: joi.required(),
    AddOn: joi.required(),
    Payment_status: joi.required(),
    Price: joi.required()
})

const validate = async (req, res, next) => {
    const value = await schema.validate(req.body)
    if (value.error) {
        res.send({ error: value.error.details[0] })

    } else {
        next();
    }
}

module.exports = validate;