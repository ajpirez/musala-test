const BaseRepository = require("./base.repository");
const {validateIpv4Adress} = require("../helpers/validate")

let _gateway = null;

class GatewayRepository extends BaseRepository {
    constructor({Gateway}) {
        super(Gateway);
        _gateway = Gateway;
    }

    async update(id,gateway) {
        if (!validateIpv4Adress(gateway.address)) {
            const error = new Error();
            error.status = 400;
            error.message = "Invalid IPv4 address";
            throw error;
        }
        return this.model.findByIdAndUpdate(id, gateway, {new: true})
    }
}

module.exports = GatewayRepository;
