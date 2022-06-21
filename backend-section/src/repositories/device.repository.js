const BaseRepository = require("./base.repository");
let _device = null;
let _gateway = null;

class DeviceRepository extends BaseRepository {
    constructor({Device, Gateway}) {
        super(Device);
        _device = Device;
        _gateway = Gateway;

    }

    async addDeviceToGateway(GatewayId, device, opts = undefined) {
        let findPeripheralDeviceAssociate = await _device.find({
            GatewayId: GatewayId
        });

        if (findPeripheralDeviceAssociate.length >= 10) {
            const error = new Error();
            error.status = 400;
            error.message = "Maximum peripheral devices for this gateway";
            throw error;
        }

        let gateway = await _gateway.findById(GatewayId)
        if (!gateway) {
            const error = new Error();
            error.status = 400;
            error.message = "Gateway doesn't exist";
            throw error;
        }

        let deviceCreated = await _device.create([{...device, GatewayId: GatewayId}], opts)

        return _gateway.findByIdAndUpdate(GatewayId, {$push: {devices: deviceCreated[0]._id}}, opts)
    }

    async deleteDeviceFromGateway(GatewayId, deviceId, opts = undefined) {
        let gateway = await _gateway.findById(GatewayId)
        if (!gateway) {
            const error = new Error();
            error.status = 400;
            error.message = "gateway doesn't exist";
            throw error;
        }
        let existsDevice = await _device.findOne({GatewayId: GatewayId, _id: deviceId})
        if (!existsDevice) {
            const error = new Error();
            error.status = 400;
            error.message = "The device doesnt belongs to this gateway";
            throw error;
        }
        await _gateway.findByIdAndUpdate(GatewayId, {$pull: {devices: deviceId}}, opts)
        return _device.findByIdAndDelete(deviceId, opts);
    }

}


module.exports = DeviceRepository;
