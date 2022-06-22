const mongoose = require("mongoose");
const {Schema} = mongoose;
const GatewaySchema = new Schema({
    serialNumber: {
        type: String,
        required: [true, 'Serial number is required'],
        unique: [true, 'Serial number must be unique']
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: [true, 'Ipv4 address is required'],
        validate: {
            validator: function (str) {
                let istrue = str.split('.');
                if (istrue.length != 4)
                    return false;
                for (i in istrue) {
                    if (!/^\d+$/g.test(istrue[i])
                        || +istrue[i] > 255
                        || +istrue[i] < 0
                        || /^[0][0-9]{1,2}/.test(istrue[i]))
                        return false;
                }
                return true
            },
            message: props => `${props.value} is not a valid Ipv4 address`
        },
    },
    devices: [
        {
            type: Schema.Types.ObjectId,
            ref: "device",
            required: true,
            autopopulate: true
        }
    ]
});

GatewaySchema.pre('remove', function (next) {
    this.model('device').deleteMany({GatewayId: this._id}, next);
    next();
});

GatewaySchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("gateway", GatewaySchema);
