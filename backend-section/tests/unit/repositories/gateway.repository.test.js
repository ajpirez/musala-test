const { GatewayRepository } = require("../../../src/repositories");
const mockingoose = require("mockingoose").default;
const { Gateway } = require("../../../src/models");
let {
  GatewayModelMock: { gateways, gateway }
} = require("../../mocks");

describe("Gateway Repository Tests", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it("Should return a gateway by id", async () => {
    const _gateway = { ...gateway };
    mockingoose(Gateway).toReturn(gateway, "findOne");
    const _gatewayRepository = new GatewayRepository({ Gateway });
    const expected = await _gatewayRepository.get(_gateway._id);
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_gateway);
  });

  it("Should return a gateway collection", async () => {
    mockingoose(Gateway).toReturn(gateways, "find");
    const _gatewayRepository = new GatewayRepository({ Gateway });
    const expected = await _gatewayRepository.getAll();
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(gateways);
  });

  it("Should save an especific gateway", async () => {
    const _gateway = { ...gateway };
    mockingoose(Gateway).toReturn(_gateway, "save");
    const _gatewayRepository = new GatewayRepository({ Gateway });
    const expected = await _gatewayRepository.create(gateway);
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_gateway);
  });

  it("Should update an especific gateway by id", async () => {
    const _gateway = { ...gateway };
    mockingoose(Gateway).toReturn(_gateway, "findOneAndUpdate");
    const _gatewayRepository = new GatewayRepository({ Gateway });
    const expected = await _gatewayRepository.update(gateway._id, gateway);
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_gateway);
  });

  it("Should delete an especific gateway by id", async () => {
    mockingoose(Gateway).toReturn(gateway, "findOneAndDelete");
    const _gatewayRepository = new GatewayRepository({ Gateway });
    const expected = await _gatewayRepository.delete(gateway._id);
    expect(JSON.parse(JSON.stringify(expected))).toEqual(true);
  });
});
