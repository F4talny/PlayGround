const express = require(`express`);
const router = express.Router();
const controllers = require(`./../controllers/controllers`);

router.get(`/say-something`, controllers.saySomething);
router.get(`/qwerty`, controllers.qwerty);

module.exports = router;