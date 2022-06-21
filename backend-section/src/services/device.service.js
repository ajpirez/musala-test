const BaseService = require("./base.service");
let _deviceRepository = null;
let _gatewayRepository = null;
let _mongoose = null

class DeviceService extends BaseService {
    constructor({DeviceRepository, GatewayRepository, mongoose}) {
        super(DeviceRepository);
        _deviceRepository = DeviceRepository;
        _gatewayRepository = GatewayRepository
        _mongoose = mongoose
    }

    async addDeviceToGateway(GatewayId, device) {
        const session = await _mongoose.startSession();
        try {
            await session.withTransaction(async () => {
                await _deviceRepository.addDeviceToGateway(GatewayId, device, {session: session})
                await session.commitTransaction();
                await session.endSession();
            })
            return _gatewayRepository.get(GatewayId)
        } catch (error) {
            throw error
        }
    }

    async deleteDeviceFromGateway(GatewayId, deviceId) {
        const session = await _mongoose.startSession();
        try {
            await session.withTransaction(async () => {
                await _deviceRepository.deleteDeviceFromGateway(GatewayId, deviceId, {session: session})
                await session.commitTransaction();
                await session.endSession();
            })
            return _gatewayRepository.get(GatewayId)
        } catch (error) {
            throw error
        }
    }

}

module.exports = DeviceService;
