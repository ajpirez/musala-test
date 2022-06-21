class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async get(id) {
        return this.model.findById(id);
    }

    async getAll(pageSize = 5, pageNum = 1) {
        const skips = pageSize * (pageNum - 1);
        return this.model
            .find()
            .skip(skips)
            .limit(pageSize);
    }

    async create(entity, opts = undefined) {
        return this.model.create(entity, opts);
    }

    async update(id, entity, opts = undefined) {
        return this.model.findByIdAndUpdate(id, entity, {new: true, opts});
    }

    async delete(id) {
        await this.model.findOne({_id: id}, async function (err, model) {
           await model.remove();
        });
        return true
    }
}

module.exports = BaseRepository;
