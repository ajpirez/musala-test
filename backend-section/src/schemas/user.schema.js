const Joi = require('@hapi/joi')

const schema = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    rols: Joi.string()
})

module.exports = schema