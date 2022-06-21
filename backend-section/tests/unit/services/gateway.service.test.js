const {GatewayService} = require("../../../src/services");
const {GatewayRepositoryMock} = require("../../mocks");
const {
    GatewayModelMock:{gateways,gateway}
} = require("../../mocks");

describe("Gateway Service Tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Should find a gateway by id", async () => {
        const GatewayRepository = GatewayRepositoryMock;
        GatewayRepository.get.mockReturnValue(gateway);

        const _gatewayService = new GatewayService({GatewayRepository});
        const expected = await _gatewayService.get(gateway._id);
        expect(expected).toMatchObject(gateway);
    });

    it("Should return a gateway collection", async () => {
        const GatewayRepository = GatewayRepositoryMock;

        GatewayRepository.getAll.mockReturnValue(gateways);

        const _gatewayService = new GatewayService({GatewayRepository});
        const expected = await _gatewayService.getAll();
        expect(expected).toMatchObject(gateways);
    });

    it("Should create a gateway", async () => {
        const GatewayRepository = GatewayRepositoryMock;
        GatewayRepository.create.mockReturnValue(gateway);

        const _gatewayService = new GatewayService({ GatewayRepository });
        const expected = await _gatewayService.repository.create(gateway);
        expect(expected).toMatchObject(gateway);
    });

    it("Should update a gateway by id", async () => {
        const GatewayRepository = GatewayRepositoryMock;
        GatewayRepository.update.mockReturnValue(gateway);

        const _gatewayService = new GatewayService({ GatewayRepository });
        const expected = await _gatewayService.repository.update(gateway._id, gateway);
        expect(expected).toMatchObject(gateway);
    });

    it("Should delete a user by id", async () => {
        const GatewayRepository = GatewayRepositoryMock;
        GatewayRepository.delete.mockReturnValue(true);

        const _gatewayService = new GatewayService({ GatewayRepository });

        const expected = await _gatewayService.repository.delete(gateway._id);
        expect(expected).toEqual(true);
    });

});
