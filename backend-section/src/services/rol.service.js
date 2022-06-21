const BaseService = require("./base.service");
let _rolRepository = null;
let _userRepository = null;
let _mongoose = null
class RolService extends BaseService {
    constructor({RolRepository, UserRepository, mongoose}) {
        super(RolRepository, UserRepository);
        _rolRepository = RolRepository;
        _userRepository = UserRepository;
        _mongoose = mongoose
    }

    async addRoleToUser(username, rolName) {
        const session = await _mongoose.startSession();
        try {
            await session.withTransaction(async () => {
                await _rolRepository.addRoleToUser(username, rolName, {session: session})
                await session.commitTransaction();
                await session.endSession();
            })
            return _userRepository.getUserByUsername(username)
        } catch (error) {
            throw error
        }
    }

    async deleteRoleToUser(username, rolName) {
        const session = await _mongoose.startSession();
        try {
            await session.withTransaction(async () => {
                await _rolRepository.deleteRoleToUser(username, rolName, {session: session})
                await session.commitTransaction();
                await session.endSession();
            })
            return _userRepository.getUserByUsername(username)
        } catch (error) {
            throw error
        }
    }
}

module.exports = RolService;
