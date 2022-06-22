const {Router} = require("express");
const {
    AuthMiddleware,
    ParseIntMiddleware,
    RolMiddleware,
    ValidateData,
    CacheMiddleware
} = require("../middlewares");

const {CACHE_TIME} = require("../helpers");

module.exports = function ({DeviceController, DeviceSchema}) {
    const router = Router();
    router.get("", /*[ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_MINUTE)], */DeviceController.getAll);
    router.get("/:deviceId", DeviceController.get);
    router.patch("/addDeviceToGateway/:gatewayId", AuthMiddleware, RolMiddleware.ensureHasRol("Admin"), ValidateData(DeviceSchema), DeviceController.addDeviceToGateway);
    router.patch("/deleteDeviceFromGateway/:gatewayId", AuthMiddleware, RolMiddleware.ensureHasRol("Admin"), DeviceController.deleteDeviceFromGateway);

    return router;
};
