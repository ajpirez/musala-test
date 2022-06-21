let ObjectID = require("mongodb").ObjectID
class BaseService {
    constructor(repository) {
        this.repository = repository;
    }

    async get(id) {
        if (!id) {
            const error = new Error();
            error.status = 400;
            error.message = "id must be sent";
            throw error;
        }
        if(!ObjectID.isValid(id)){
            const error = new Error();
            error.status = 400;
            error.message = "Invalid format sent";
            throw error;
        }
        const currentEntity = await this.repository.get(id);

        if (!currentEntity) {
            const error = new Error();
            error.status = 404;
            error.message = "entity does not found";
            throw error;
        }

        return currentEntity;
    }

    async getAll(pageSize, pageNum) {
        return this.repository.getAll(pageSize, pageNum);
    }

    async create(entity, opts) {
        return this.repository.create(entity, opts);
    }

    async update(id, entity, opts) {
        await this.get(id)

        return this.repository.update(id, entity, opts);
    }

    async delete(id) {
        if (!id) {
            const error = new Error();
            error.status = 400;
            error.message = "id must be sent";
            throw error;
        }

        return this.repository.delete(id);
    }
}

module.exports = BaseService;
