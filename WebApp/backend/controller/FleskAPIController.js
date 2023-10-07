const axios = require("axios");
const flaskServerURL = "http://127.0.0.1:5000";

// Function to fetch budget recommendation
async function getBudgetRecommendation(user_id) {
  try {
    const response = await axios.post(`${flaskServerURL}/budget/${user_id}`);
    return response.data.budgetRecommendation;
  } catch (error) {
    throw error;
  }
}

// Function to generate financial advice
async function generateFinancialAdvice(user_id) {
  try {
    const response = await axios.post(`${flaskServerURL}/advice/${user_id}`);
    return response.data.financialAdvice;
  } catch (error) {
    throw error;
  }
}

// Function for Endpoint to classify expenses
async function classifyExpenses(user_id) {
  try {
    const response = await axios.post(`${flaskServerURL}/expense/${user_id}`);
    return response.data.expenseClassification;
  } catch (error) {
    throw error;
  }
}


module.exports = {
  getBudgetRecommendation,
  generateFinancialAdvice,
  classifyExpenses,
};
