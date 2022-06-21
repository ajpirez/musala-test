const {Device} = require('../models/index')
const lookup = async (uid) => {
    const device = await Device.findOne({uid});
    if (device) {
        throw new Error('uid must be unique');
    }
};

const Joi = require('@hapi/joi')

const schema = Joi.object({
    uid: Joi.number().required().external(lookup),
    vendor: Joi.string(),
    status: Joi.string().valid('online', 'offline').default('offline'),
    GatewayId: Joi.string()
})

module.exports = schema