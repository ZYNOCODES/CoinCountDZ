const axios = require("axios");
const flaskApiUrl = "http://127.0.0.1:5000";

// get budget recommendations
const getBudgetRecommendation = async (req, res) => {
  axios
    .post("http://127.0.0.1:5000/budget_recommendation", req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

// get financial advice
const generateFinancialAdvice = async (req, res) => {
  axios
    .post("http://127.0.0.1:5000/financial_advice", req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

// classify expenses
const classifyExpenses = async (req, res) => {
  axios
    .post("http://127.0.0.1:5000/expense_classification", req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = {
  getBudgetRecommendation,
  generateFinancialAdvice,
  classifyExpenses,
};
