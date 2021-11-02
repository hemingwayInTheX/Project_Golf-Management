const router = require('express').Router();
const middlewares = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/enroll:id', controller.enrollLecturer);

module.exports = router;