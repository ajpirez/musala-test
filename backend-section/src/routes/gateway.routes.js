const {Router} = require("express");
const {AuthMiddleware, RolMiddleware, ParseIntMiddleware, CacheMiddleware, ValidateData} = require("../middlewares");

const {CACHE_TIME} = require("../helpers");


module.exports = function ({GatewayController, GatewaySchema}) {
    const router = Router();
    router.get("", /*[ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_MINUTE)],*/ GatewayController.getAll);
    router.get("/:gatewayId", GatewayController.get);
    router.post("/", AuthMiddleware, RolMiddleware.ensureHasRol('Admin'), ValidateData(GatewaySchema), GatewayController.create);
    router.patch("/:gatewayId", AuthMiddleware, RolMiddleware.ensureHasRol('Admin'), ValidateData(GatewaySchema), GatewayController.update);
    router.delete("/:gatewayId", AuthMiddleware, RolMiddleware.ensureHasRol('Admin'), GatewayController.delete);
    return router;
};
