const express = require('express');
const router = express.Router();

const { registerLimiter } = require('../../../helpers/limiter');

const guard = require('../../../helpers/guard');

const ctrls = require('../../../controllers/users.js');

const {
  validateSignupUser,
  validateLoginUser,
  validateUpdateSubscription,
} = require('../users/validation-user');

router.patch('/', validateUpdateSubscription, guard, ctrls.updateSubscription);
router.post('/signup', validateSignupUser, registerLimiter, ctrls.signup);
router.post('/login', validateLoginUser, ctrls.login);
router.post('/logout', guard, ctrls.logout);
router.get('/current', guard, ctrls.current);

module.exports = router;