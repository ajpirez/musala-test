const BaseService = require("./base.service");
let _gatewayRepository = null;

class GatewayService extends BaseService {
    constructor({GatewayRepository}) {
        super(GatewayRepository);
        _gatewayRepository = GatewayRepository;
    }
}

module.exports = GatewayService;
