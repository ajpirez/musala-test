const {Gateway} = require('../models/index')
const lookup = async (serialNumber) => {
    const gateway = await Gateway.findOne({serialNumber});
    if (gateway) {
        throw new Error('serialNumber must be unique');
    }
};

const Joi = require('@hapi/joi')

const schema = Joi.object({
    serialNumber: Joi.string().required().external(lookup),
    name: Joi.string().required(),
    address: Joi.string().required(),
    devices: Joi.string()
})

module.exports = schema