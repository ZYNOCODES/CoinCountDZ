const express = require("express");
const {
  getBudgetRecommendation,
  generateFinancialAdvice,
  classifyExpenses,
} = require("../controller/RecomandationSystem");
const router = express.Router();

router.post("/budgetsystem/:user_id", getBudgetRecommendation);
router.post("/advicesystem/:user_id", generateFinancialAdvice);
router.post("/expensesystem/:user_id", classifyExpenses);

module.exports = router;
