const express = require('express');
const router = express.Router();
const controllerTask = require('../controller/task');

router.get('/task', controllerTask.getAll);
router.post('/task', controllerTask.create);

module.exports = router;