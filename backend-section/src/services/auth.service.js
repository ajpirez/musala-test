const {generateToken} = require("../helpers/jwt.helper");
let _userService = null;
let _rolService = null;
let _mongoose = null

class AuthService {
    constructor({UserService, RolService, mongoose}) {
        _userService = UserService;
        _rolService = RolService;
        _mongoose = mongoose
    }

    async signUp(user) {
        const {username} = user;
        const userExist = await _userService.getUserByUsername(username);
        if (userExist) {
            const error = new Error();
            error.status = 400;
            error.message = "User already exist";
            throw error;
        }
        const session = await _mongoose.startSession();
        try {
            await session.withTransaction(async () => {
                let userCreated = await _userService.create([user], {session: session});
                let roleCreated = await _rolService.create([{UserId: userCreated[0]._id}], {session: session});
                await session.commitTransaction();
                await _userService.update(userCreated[0]._id, {$push: {rols: roleCreated[0]._id}}, {session: session});
                await session.commitTransaction();
                await session.endSession()
            });
            return _userService.getUserByUsername(username)
        } catch (error) {
            throw error
        }
    }

    async signIn(user) {
        const {username, password} = user;
        const userExist = await _userService.getUserByUsername(username);
        if (!userExist) {
            const error = new Error();
            error.status = 404;
            error.message = "User does not exist";
            throw error;
        }

        const validPassword = userExist.comparePasswords(password);
        if (!validPassword) {
            const error = new Error();
            error.status = 400;
            error.message = "Invalid Password";
            throw error;
        }

        const userToEncode = {
            username: userExist.username,
            id: userExist._id
        };

        const token = "Bearer " + generateToken(userToEncode);

        return {token, user: userExist};
    }
}

module.exports = AuthService;
