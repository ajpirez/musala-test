let _gatewayService = null;

class GatewayController {
    constructor({GatewayService}) {
        _gatewayService = GatewayService;
    }

    async get(req, res) {
        const {gatewayId} = req.params;
        const gateway = await _gatewayService.get(gatewayId);
        return res.send(gateway);
    }

    async getAll(req, res) {
        const {pageSize, pageNum} = req.query;
        const gateway = await _gatewayService.getAll(pageSize, pageNum);
        return res.send(gateway);
    }

    async create(req, res) {
        const {body} = req;
        const gateway = await _gatewayService.create(body);
        return res.status(201).send(gateway);
    }

    async update(req, res) {
        const {body} = req;
        const {gatewayId} = req.params;
        const updateGateway = await _gatewayService.update(gatewayId, body);
        return res.send(updateGateway);
    }

    async delete(req, res) {
        const {gatewayId} = req.params;
        const deletedGateway = await _gatewayService.delete(gatewayId);
        return res.send(deletedGateway);
    }

}

module.exports = GatewayController;
