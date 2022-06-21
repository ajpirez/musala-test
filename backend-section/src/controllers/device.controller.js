let _deviceService = null;

class DeviceController {
    constructor({DeviceService}) {
        _deviceService = DeviceService;
    }

    async get(req, res) {
        const {deviceId} = req.params;
        const device = await _deviceService.get(deviceId);
        return res.send(device);
    }

    async getAll(req, res) {
        const {pageSize, pageNum} = req.query;
        const device = await _deviceService.getAll(pageSize, pageNum);
        return res.send(device);
    }

    async addDeviceToGateway(req, res) {
        const {gatewayId} = req.params;
        const {body} = req;
        const device = await _deviceService.addDeviceToGateway(gatewayId, body);
        return res.status(200).send(device);
    }

    async deleteDeviceFromGateway(req, res) {
        const {gatewayId} = req.params;
        const {deviceId} = req.body
        const deletedDevice = await _deviceService.deleteDeviceFromGateway(gatewayId, deviceId);
        return res.status(200).send(deletedDevice);
    }

}

module.exports = DeviceController;
