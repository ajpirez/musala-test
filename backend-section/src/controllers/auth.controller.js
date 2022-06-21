let _authService = null;

class AuthController {
    constructor({AuthService}) {
        _authService = AuthService;
    }

    async signUp(req, res) {
        const {body} = req;
        const createdUser = await _authService.signUp(body);
        return res.status(201).json(createdUser);
    }

    async signIn(req, res) {
        // console.log(req.header)
        if (req.header('Authorization') && req.header('Authorization').startsWith('Basic')) {
            const usernamePassword = new Buffer.from(req.header('Authorization').split('Basic ')[1], 'base64')
                .toString()
                .split(':')
            req.body.username = usernamePassword[0]
            req.body.password = usernamePassword[1]
            const {body} = req;
            const creds = await _authService.signIn(body);
            return res.send(creds);
        }
    }
}

module.exports = AuthController;
