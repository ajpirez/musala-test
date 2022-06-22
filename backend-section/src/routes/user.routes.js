const {Router} = require("express");
const {
    AuthMiddleware,
    ParseIntMiddleware,
    RolMiddleware,
    CacheMiddleware,
    ValidateData
} = require("../middlewares");
const {CACHE_TIME} = require("../helpers");

module.exports = function ({UserController, UserSchema}) {
    const router = Router();

    router.get("", AuthMiddleware, RolMiddleware.ensureHasRol('Admin'), /*[ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_MINUTE)],*/UserController.getAll);
    router.get("/:userId",AuthMiddleware, RolMiddleware.ensureHasRol('Admin'),  UserController.get);
    router.patch("/:userId", AuthMiddleware, RolMiddleware.ensureHasRol('Admin'), UserController.update);
    router.delete("/:userId", AuthMiddleware, RolMiddleware.ensureHasRol('Admin'), UserController.delete);

    return router;
};
