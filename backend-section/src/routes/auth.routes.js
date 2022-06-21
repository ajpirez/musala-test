const { Router } = require("express");
const {ValidateData} = require('../middlewares')
module.exports = function({ AuthController,UserSchema }) {
  const router = Router();

  router.post("/signup", ValidateData(UserSchema),AuthController.signUp);
  router.post("/signin", AuthController.signIn);

  return router;
};
