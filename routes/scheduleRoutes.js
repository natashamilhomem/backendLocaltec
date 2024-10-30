const express = require('express');
const { createSchedule, getUserSchedules } = require('../controllers/scheduleController');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/', auth, createSchedule);
router.get('/', auth, getUserSchedules);

module.exports = router;
