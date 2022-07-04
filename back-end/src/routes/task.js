const express = require('express');
const router = express.Router();
const controllerTask = require('../controller/task');
const validation = require('../middleware/task');

router.get('/task', controllerTask.getAll);
router.post('/task', validation.validationTask, controllerTask.create);
router.put('/task/:id', validation.validationTask, controllerTask.update);
router.delete('/task/:id', controllerTask.deleteTask);

module.exports = router;