

const Joi = require('@hapi/joi')

const schema = Joi.object({
    serialNumber: Joi.string(),
    name: Joi.string(),
    address: Joi.string(),
    devices: Joi.string()
})

module.exports = schema