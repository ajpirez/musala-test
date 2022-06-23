const {createContainer, asClass, asValue, asFunction} = require("awilix");
const mongoose = require("mongoose");

//  config
const config = require("../config");

const app = require(".");
// services
const {
    UserService,
    AuthService,
    RolService,
    GatewayService,
    DeviceService
} = require("../services");

// controllers
const {
    UserController,
    AuthController,
    RolController,
    GatewayController,
    DeviceController
} = require("../controllers");

// routes
const {
    UserRoutes,
    AuthRoutes,
    RolRoutes,
    GatewayRoutes,
    DeviceRoutes
} = require("../routes/index.routes");
const Routes = require("../routes");

// models
const {User, Rol, Gateway, Device} = require("../models");

// schemas

const {UserSchema, RolSchema, GatewaySchema, DeviceSchema,GatewayUpdateSchema} = require('../schemas/index')

// repositories
const {
    UserRepository,
    RolRepository,
    GatewayRepository,
    DeviceRepository
} = require("../repositories");

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config),
        mongoose: asValue(mongoose)
    })
    .register({
        UserService: asClass(UserService).singleton(),
        AuthService: asClass(AuthService).singleton(),
        RolService: asClass(RolService).singleton(),
        GatewayService: asClass(GatewayService).singleton(),
        DeviceService: asClass(DeviceService).singleton(),
    })
    .register({
        UserController: asClass(UserController.bind(UserController)).singleton(),
        AuthController: asClass(AuthController.bind(AuthController)).singleton(),
        RolController: asClass(RolController.bind(RolController)).singleton(),
        GatewayController: asClass(GatewayController.bind(GatewayController)).singleton(),
        DeviceController: asClass(DeviceController.bind(DeviceController)).singleton(),
    })
    .register({
        UserRoutes: asFunction(UserRoutes).singleton(),
        AuthRoutes: asFunction(AuthRoutes).singleton(),
        RolRoutes: asFunction(RolRoutes).singleton(),
        GatewayRoutes: asFunction(GatewayRoutes).singleton(),
        DeviceRoutes: asFunction(DeviceRoutes).singleton(),
    })
    .register({
        User: asValue(User),
        Rol: asValue(Rol),
        Gateway: asValue(Gateway),
        Device: asValue(Device),
    })
    .register({
        UserSchema: asValue(UserSchema),
        RolSchema: asValue(RolSchema),
        GatewaySchema: asValue(GatewaySchema),
        DeviceSchema: asValue(DeviceSchema),
        GatewayUpdateSchema: asValue(GatewayUpdateSchema),
    })
    .register({
        UserRepository: asClass(UserRepository).singleton(),
        RolRepository: asClass(RolRepository).singleton(),
        GatewayRepository: asClass(GatewayRepository).singleton(),
        DeviceRepository: asClass(DeviceRepository).singleton(),
    });

module.exports = container;
