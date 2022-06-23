const Joi = require('@hapi/joi')

const schema = Joi.object({
    name: Joi.string().min(3),
    username: Joi.string().min(3),
    password: Joi.string().min(3),
    rols: Joi.string()
})

module.exports = schema