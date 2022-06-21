const mongoose = require("mongoose");
const {Schema} = mongoose;

const DeviceSchema = new Schema({
        uid: {
            type: Number,
            required: [true, "uid is required"],
            unique: true
        },
        vendor: {
            type: String,
        },
        status: {
            type: String,
            enum: ["online", "offline"],
            default: "offline",
            message: '{VALUE} is not supported',
        },
        GatewayId:
            {
                type: Schema.Types.ObjectId,
                ref: "gateway",
                required: true,
                autopopulate: false,
            },
    },
    {timestamps: true}
);

DeviceSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("device", DeviceSchema);
