package com.example.fintech.Database;

public class wallet{

        private Long id;

        private double balance;

        private double savings;

        private String exp;

        private String userId;

    public wallet(double balance, double savings, String userId) {
        this.balance = balance;
        this.savings = savings;
        this.userId = userId;
    }

    public wallet(double balance, String exp, String userId) {
        this.balance = balance;
        this.exp = exp;
        this.userId = userId;
    }


    public void setId(long id) {
        this.id = id;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public double getSavings() {
        return savings;
    }

    public void setSavings(Long savings) {
        this.savings = savings;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
