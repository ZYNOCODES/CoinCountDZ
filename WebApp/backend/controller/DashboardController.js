const Transaction = require('../model/TransactionModel');
const { Op } = require('sequelize');
const moment = require('moment');
const Sequelize = require('sequelize');

//get Transaction by week
const GetByWeek = async (req, res) => {
    try {
        // Check if today is Saturday
        if (moment().day() === 6) {
            // If today is Saturday, set the start date to today and end date to next Friday
            const startDate = moment().format('YYYY-MM-DD');
            const endDate = moment().clone().day(13).format('YYYY-MM-DD'); 
            
            await Transaction.findAll({
                where: {
                    createdAt: {
                      [Sequelize.Op.between]: [startDate, endDate],
                    },
                    Type: {
                      [Sequelize.Op.or]: ['shop', 'Send'],
                    },
                },
            })
            .then((spendings) => {
                if (spendings && spendings.length > 0) {
                    const data = calculateDailyTransactionData(spendings)
                    res.status(200).json({ Transaction: data,
                        week: [moment().format('YYYY-MM-DD'), moment().clone().day(12).format('YYYY-MM-DD')]});
                } else {
                    res.status(404).json({ message: 'No Transaction data found for this week',
                    week: [moment().day(-1).format('YYYY-MM-DD'), moment().day(5).format('YYYY-MM-DD')] });
                }
            }).catch((err) => {
                console.error('Error fetching spending data:', err);
            });
            
        } else {
            // If today is not Saturday, find data from last Saturday to Friday
            const startDate = moment().clone().day(-1).format('YYYY-MM-DD'); // Last Saturday
            const endDate = moment().clone().day(5).format('YYYY-MM-DD'); // This Friday
        
            await Transaction.findAll({
                where: {
                    createdAt: {
                      [Sequelize.Op.between]: [startDate, endDate],
                    },
                    Type: {
                      [Sequelize.Op.or]: ['shop', 'Send'],
                    },
                },
            })
            .then((spendings) => {
                if (spendings && spendings.length > 0) {
                    res.status(200).json({ Transaction: spendings,
                        week: [moment().day(-1).format('YYYY-MM-DD'), moment().day(5).format('YYYY-MM-DD')]});
                } else {
                    res.status(404).json({ message: 'No Transaction data found for this week',
                    week: [moment().day(-1).format('YYYY-MM-DD'), moment().day(5).format('YYYY-MM-DD')] });
                }
            }).catch((err) => {
                console.error('Error fetching spending data:', err);
            });
            
        }      
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting Transaction by week');
    }
}

//get Transaction by month
const GetByMonth = async (req, res) => {
    try{
        // find data from January of the current year to December of the current year
        const startDate = moment().clone().startOf('year').format('YYYY-MM-DD');
        const endDate = moment().clone().endOf('year').format('YYYY-MM-DD');
        
        const TransactionData = await Transaction.findAll({
            where: {
                createdAt: {
                    [Sequelize.Op.between]: [startDate, endDate]
                },
                Type: {
                  [Sequelize.Op.or]: ['shop', 'Send'],
                },
            }
        });
        if (TransactionData && TransactionData.length > 0) {
            const data = calculateMonthlyTransactionData(TransactionData);
            res.status(200).json({ Transaction: data,
                week: [moment().clone().startOf('year').format('YYYY-MM-DD'), moment().clone().endOf('year').format('YYYY-MM-DD')]});
        } else {
            res.status(404).json({ message: 'No Transaction data found for this year' });
        }
    }catch (error) {
        console.error(error);
        res.status(500).send('Error getting Transaction by month');
    }
}

//get Transaction by year
const GetByYear = async (req, res) => {
    try{
        // Get the current year
        const currentYear = moment().year();
        const fiveYearsAgoYear = currentYear - 5;

        // Create the start date as January 1st of the five years ago year
        const startDate = moment(`${fiveYearsAgoYear}-01-01`);

        // Create the end date as December 31st of the current year
        const endDate = moment(`${currentYear}-12-31`);

        const TransactionData = await Transaction.findAll({
            where: {
                createdAt: {
                    [Sequelize.Op.between]: [startDate.toDate(), endDate.toDate()] 
                },
                Type: {
                  [Sequelize.Op.or]: ['shop', 'Send'],
                },
            }
        });
        if (TransactionData && TransactionData.length > 0) {
            const data = calculateYearlyTransactionData(TransactionData);
            res.status(200).json({ Transaction: data,
                week: [startDate.toDate(), endDate.toDate()]});
        } else {
            res.status(404).json({ message: 'No Transaction data found for this year' });
        }
    }catch (error) {
        console.error(error);
        res.status(500).send('Error getting Transaction by year');
    }
}

// Construct the dayly Transaction data
function calculateDailyTransactionData(TransactionData) {
    const dailyData = {};
    for (const entry of TransactionData) {
        // Extract the date from the 'createdAt' field
        const createdAt = moment(entry.createdAt);
        const date = createdAt.format('YYYY-MM-DD');

        // If the date doesn't exist in dailyData, initialize it
        if (!dailyData[date]) {
            dailyData[date] = {
                id: Object.keys(dailyData).length + 1,
                Amount: 0,
                day: createdAt.format('D'),
            };
        }
        dailyData[date].Amount -= entry.Amount;
    }

    // Convert the dailyData object to an array
    const TransactionDaily = Object.values(dailyData);

    return TransactionDaily;
}

// Construct the monthly Transaction data
function calculateMonthlyTransactionData(TransactionData) {
    const monthlyData = {};
    // Loop through the TransactionData array
    for (const entry of TransactionData) {
        // Extract the month and year from the 'createdAt' field
        const createdAt = moment(entry.createdAt);
        const monthYear = createdAt.format('YYYY-MM');

        // If the monthYear doesn't exist in monthlyData, initialize it
        if (!monthlyData[monthYear]) {
            monthlyData[monthYear] = {
                id: Object.keys(monthlyData).length + 1,
                Amount: 0,
                month: createdAt.format('M'),
            };
        }
        monthlyData[monthYear].Amount -= entry.Amount;
    }

    // Convert the monthlyData object to an array
    const TransactionMonthly = Object.values(monthlyData);

    return TransactionMonthly;
}

// Construct the yearly Transaction data
function calculateYearlyTransactionData(TransactionData) {
    const yearlyData = {};
    // Loop through the TransactionData array
    for (const entry of TransactionData) {
        // Extract the year from the 'createdAt' field
        const createdAt = moment(entry.createdAt);
        const year = createdAt.year();

        // If the year doesn't exist in yearlyData, initialize it
        if (!yearlyData[year]) {
            yearlyData[year] = {
                Amount: 0,
                year: year,
            };
        }

        yearlyData[year].Amount -= entry.Amount;
        
    }

    // Convert the yearlyData object to an array
    const TransactionYearly = Object.values(yearlyData);

    return TransactionYearly;
}

module.exports = {
    GetByWeek,
    GetByMonth,
    GetByYear
}