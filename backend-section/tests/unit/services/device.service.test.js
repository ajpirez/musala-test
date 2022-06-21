const {DeviceService} = require("../../../src/services");
const {DeviceRepositoryMock, RolRepositoryMock} = require("../../mocks");
const {
    DeviceModelMock: {devices, device}, GatewayModelMock: {gateways, gateway}
} = require("../../mocks");

describe("Device Service Tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Should find a device by id", async () => {
        const DeviceRepository = DeviceRepositoryMock;
        DeviceRepository.get.mockReturnValue(device);

        const _deviceService = new DeviceService({DeviceRepository});
        const expected = await _deviceService.get(device._id);
        expect(expected).toMatchObject(device);
    });

    it("Should return a device collection", async () => {
        const DeviceRepository = DeviceRepositoryMock;
        DeviceRepository.getAll.mockReturnValue(devices);

        const _deviceService = new DeviceService({DeviceRepository});
        const expected = await _deviceService.getAll();
        expect(expected).toMatchObject(devices);
    });

    it("Should add a device to a gateway", async () => {
        const DeviceRepository = DeviceRepositoryMock;
        DeviceRepository.addDeviceToGateway.mockReturnValue(gateway);

        const _deviceService = new DeviceService({DeviceRepository});
        const expected = await _deviceService.repository.addDeviceToGateway(gateway._id, device);
        expect(expected).toMatchObject(gateway);
    });

    it("Should delete a device from a gateway", async () => {
        const DeviceRepository = DeviceRepositoryMock;
        DeviceRepository.deleteDeviceFromGateway.mockReturnValue(gateway);

        const _deviceService = new DeviceService({DeviceRepository});
        const expected = await _deviceService.repository.deleteDeviceFromGateway(gateway._id, device._id);
        expect(expected).toMatchObject(gateway);
    });
});
