package com.example.fintech.Database;

public class UserModel {



        private String firstName;
        private String lastName;
        private String region;
        private String telephone;
        private String address;
        private String email;
        private String password;
        private long wallet;
        private String creditCardNumber;
        private String expiryDate;
        private String cardNumber;

        private String Code;

        public UserModel() {
            // Default constructor
        }

    public UserModel(String firstName, String lastName, String telephone, String email, String password,String Code) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.telephone = telephone;
        this.email = email;
        this.password = password;
        this.Code=Code;

        //this.id=id;
    }

    // Getters and setters for each property



        public String getFirstName() {
            return firstName;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public String getRegion() {
            return region;
        }

        public void setRegion(String region) {
            this.region = region;
        }

        public String getTelephone() {
            return telephone;
        }

        public void setTelephone(String telephone) {
            this.telephone = telephone;
        }

        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public long getWallet() {
            return wallet;
        }

        public void setWallet(long wallet) {
            this.wallet = wallet;
        }

        public String getCreditCardNumber() {
            return creditCardNumber;
        }

        public void setCreditCardNumber(String creditCardNumber) {
            this.creditCardNumber = creditCardNumber;
        }

        public String getExpiryDate() {
            return expiryDate;
        }

        public void setExpiryDate(String expiryDate) {
            this.expiryDate = expiryDate;
        }

        public String getCardNumber() {
            return cardNumber;
        }

        public void setCardNumber(String cardNumber) {
            this.cardNumber = cardNumber;
        }

    public String getCode() {
        return Code;
    }

    public void setCode(String code) {
        Code = code;
    }
}
