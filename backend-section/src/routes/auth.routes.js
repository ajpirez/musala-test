const {Router} = require("express");
const {ValidateData} = require('../middlewares')
module.exports = function ({AuthController, UserSchema}) {
    const router = Router();

    router.post("/signup", ValidateData(UserSchema), AuthController.signUp);
    router.post("/signin", AuthController.signIn);

    router.post('/seed', function (req, res, next) {
        require('../seed')
        return res.json({msg:'ok'})
    })

    return router;
};
