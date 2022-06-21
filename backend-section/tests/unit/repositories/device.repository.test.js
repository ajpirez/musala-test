const {DeviceRepository} = require("../../../src/repositories");
const mockingoose = require("mockingoose").default;
const {Gateway, Device} = require("../../../src/models");
let {
    GatewayModelMock: {gateways, gateway}, DeviceModelMock: {devices, device}
} = require("../../mocks");

describe("Device Repository Tests", () => {
    beforeEach(() => {
        mockingoose.resetAll();
        jest.clearAllMocks();
    });

    it("Should return a device by id", async () => {
        const _device = {...device};
        mockingoose(Device).toReturn(device, "findOne");
        const _deviceRepository = new DeviceRepository({Device});
        const expected = await _deviceRepository.get(_device._id);
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_device);
    });

    it("Should return a device collection", async () => {
        mockingoose(Device).toReturn(devices, "find");
        const _deviceRepository = new DeviceRepository({Device});
        const expected = await _deviceRepository.getAll();
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(devices);
    });

    it("Should add a device to gateway", async () => {
        const _gateway = {...gateway}
        mockingoose(Device)
            .toReturn(devices, "find")
        mockingoose(Gateway)
            .toReturn(gateway, "findOne")
            .toReturn(device, "save")
            .toReturn(gateway, "findOneAndUpdate")
        const _deviceRepository = new DeviceRepository({Device, Gateway});
        const expected = await _deviceRepository.addDeviceToGateway(_gateway._id, device);
        expect(JSON.parse(JSON.stringify(expected._doc))).toMatchObject(_gateway);
    });

    it("Should delete a device from a Gateway", async () => {
        const _device = {...device};
        const _gateway = {...gateway}
        mockingoose(Gateway)
            .toReturn(gateway, "findOne")
        mockingoose(Device)
            .toReturn(device, "findOne")
            .toReturn(gateway, "findOneAndUpdate")
            .toReturn(device, "findOneAndDelete")
        const _deviceRepository = new DeviceRepository({Device, Gateway});
        const expected = await _deviceRepository.deleteDeviceFromGateway(_gateway._id, _device._id);
        expect(JSON.parse(JSON.stringify(expected._doc))).toMatchObject(_device);
    });
});
