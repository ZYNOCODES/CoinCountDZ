const express = require('express');
const {
    GetByWeek,
    GetByMonth,
    GetByYear
} = require('../controller/DashboardController');
const router = express.Router();

router.get('/current/week', GetByWeek);
router.get('/current/month', GetByMonth);
router.get('/current/year', GetByYear);

module.exports = router;