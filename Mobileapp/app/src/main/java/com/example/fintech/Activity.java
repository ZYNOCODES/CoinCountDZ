package com.example.fintech;

public class Activity {

    String id;

    String date;

    String Price;

    public Activity(String id, String date, String price) {
        this.id = id;
        this.date = date;
        Price = price;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getPrice() {
        return Price;
    }

    public void setPrice(String price) {
        Price = price;
    }
}
