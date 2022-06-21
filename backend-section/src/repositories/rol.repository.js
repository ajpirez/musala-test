const BaseRepository = require("./base.repository");
let _rol = null;
let _user = null;

class RolRepository extends BaseRepository {
    constructor({Rol, User}) {
        super(Rol, User);
        _rol = Rol;
        _user = User;
    }

    async addRoleToUser(username, rolName, opts = undefined) {
        let user = await _user.findOne({username});
        if (!user) {
            const error = new Error();
            error.status = 400;
            error.message = "username doesn't exist";
            throw error;
        }
        let existsRol = await _rol.findOne({UserId: user._id, type: rolName})
        if (existsRol) {
            const error = new Error();
            error.status = 400;
            error.message = "The rol belongs to this user";
            throw error;
        }
        let rolCreated = await _rol.create(
            [{
                UserId: user._id,
                type: rolName,
            }],
            opts
        )
        return await _user.findByIdAndUpdate(user._id, {$push: {rols: rolCreated}}, opts)
    }

    async deleteRoleToUser(username, rolName, opts = undefined) {
            let user = await _user.findOne({username});
            if (!user) {
                const error = new Error();
                error.status = 400;
                error.message = "username doesn't exist";
                throw error;
            }
            let existsRol = await _rol.findOne({UserId: user._id, type: rolName})
            if (!existsRol) {
                const error = new Error();
                error.status = 400;
                error.message = "The rol doesn't exist to this user";
                throw error;
            }

            await _user.findByIdAndUpdate(user._id, {$pull: {rols: existsRol._id}}, opts)
            return _rol.findByIdAndDelete(existsRol._id, opts);
    }
}

module.exports = RolRepository;
