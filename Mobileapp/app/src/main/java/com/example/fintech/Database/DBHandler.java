package com.example.fintech.Database;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

import com.example.fintech.Database.MySQLConnection;
import com.example.fintech.Database.UserModel;
import com.example.fintech.Login;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class DBHandler extends SQLiteOpenHelper {

    // creating a constant variables for our database.
    // below variable is for our database name.
    private static final String DB_NAME = "Fittechdb";

    // below int is our database version
    private static final int DB_VERSION = 1;

    // below variable is for our table name.
    private static final String TABLE_NAME = "Users";

    private static final String TABLE_NAME2 = "Waletts";

    // below variable is for our id column.
    private static final String ID_COL = "id";

    // below variable is for our course name column
    private static final String firstName_COL = "firstname";

    private static final String lastName_COL = "lastname";

    private static final String region_COL = "regionname";

    private static final String telephone_COL = "telephone";


    // below variable id for our course duration column.
    private static final String address_COL = "address";

    private static final String email_COL = "email";

    private static final String password_COL = "password";

    private static final String wallet_COL = "wallet";

    // below variable id for our course duration column.
    private static final String creditCardNumber_COL = "creditCardNumber";

    // below variable for our course description column.
    private static final String expiryDate_COL = "expiryDate";

    // below variable is for our course tracks column.
    private static final String cardNumber_COL = "cardNumber";

    // creating a constructor for our database handler.




    private static final String id_COL1 = "id";

    private static final String balance_COL1 = "balance";

    private static final String saving_COL = "savings";

    private static final String userid_COL1 = "userId";


    public DBHandler(Context context) {
        super(context, DB_NAME, null, DB_VERSION);
    }

    // below method is for creating a database by running a sqlite query
    @Override
    public void onCreate(SQLiteDatabase db) {
        // on below line we are creating
        // an sqlite query and we are
        // setting our column names
        // along with their data types.
        String query = "CREATE TABLE " + TABLE_NAME + " ("
                + ID_COL + " INTEGER PRIMARY KEY AUTOINCREMENT, "
                + firstName_COL + " TEXT,"
                + lastName_COL + " TEXT,"
                + region_COL + " TEXT,"
                + address_COL + " TEXT,"
                + telephone_COL + " TEXT,"
                + wallet_COL + " TEXT,"
                + creditCardNumber_COL + " TEXT,"
                + expiryDate_COL + " TEXT,"
                + cardNumber_COL + " TEXT,"
                + email_COL + " TEXT UNIQUE,"
                + password_COL + " TEXT)";



        String query2 = "CREATE TABLE " + TABLE_NAME2 + " ("
                + id_COL1 + " INTEGER PRIMARY KEY AUTOINCREMENT, "
                + balance_COL1 + " TEXT,"
                + saving_COL + " TEXT,"
                + userid_COL1 +" TEXT)";

        // at last we are calling a exec sql
        // method to execute above sql query
        db.execSQL(query);
        db.execSQL(query2);
    }

    // this method is use to add new course to our sqlite database.
    public void addNewuser(UserModel user) {

        // on below line we are creating a variable for
        // our sqlite database and calling writable method
        // as we are writing data in our database.
        SQLiteDatabase db = this.getWritableDatabase();

        // on below line we are creating a
        // variable for content values.
        ContentValues values = new ContentValues();

        // on below line we are passing all values
        // along with its key and value pair.
        //values.put(ID_COL, user.getId() ); // Replace 1 with the actual ID value
        values.put(firstName_COL, user.getFirstName()); // Replace "John" with the actual first name
        values.put(lastName_COL, user.getLastName()); // Replace "Doe" with the actual last name
        values.put(region_COL, ""); // Replace "Region" with the actual region
        values.put(address_COL, ""); // Replace "123 Main St" with the actual address
        values.put(telephone_COL, user.getTelephone()); // Replace "555-555-5555" with the actual telephone number
        values.put(wallet_COL,""); // Replace "Wallet" with the actual wallet value
        values.put(creditCardNumber_COL, ""); // Replace with actual credit card number
        values.put(expiryDate_COL, ""); // Replace "12/25" with the actual expiry date
        values.put(cardNumber_COL, user.getCode()); // Replace "7890" with the actual card number
        values.put(email_COL, user.getEmail()); // Replace with actual email address
        values.put(password_COL, user.getPassword());



        // after adding all values we are passing
        // content values to our table.
        long mytable=db.insert(TABLE_NAME, null, values);


        Log.d("inserting","code "+user.getCode());

        Log.e("iNSERT DATA","DATA INSERTED"+mytable);
        // at last we are closing our
        // database after adding database.
        db.close();
    }
    public Boolean checkuserexist(String email) {
        SQLiteDatabase MyDB = this.getWritableDatabase();
        Cursor cursor = MyDB.rawQuery("Select * from "+TABLE_NAME+" where email = ?",new String[]{email});
        if (cursor.getCount() > 0)
            return true;
        else
            return false;
    }

    public Boolean checkusercode(String code) {
        SQLiteDatabase MyDB = this.getWritableDatabase();
        String email= Login.userEmail;
        String[] selectionArgs = {email, code};
        Cursor cursor = MyDB.rawQuery("Select * from "+TABLE_NAME+" where email = ? AND cardNumber = ?",selectionArgs);
        if (cursor.getCount() > 0)
            return true;
        else
            return false;
    }


    public Boolean checkuser(String email,String password){
        SQLiteDatabase MyDB = this.getWritableDatabase();
        String[] selectionArgs = {email, password};
        Cursor cursor = MyDB.rawQuery("Select * from "+TABLE_NAME+" where email = ? AND password = ?",selectionArgs);

        if (cursor.getCount() > 0)
            return true;
        else
            return false;
    }

    public void adduserwallet(wallet wal){

        SQLiteDatabase db = this.getWritableDatabase();

        // on below line we are creating a
        // variable for content values.
        ContentValues values = new ContentValues();

        // on below line we are passing all values
        // along with its key and value pair.
        //values.put(ID_COL, user.getId() ); // Replace 1 with the actual ID value
        // Replace "John" with the actual first name
        values.put(balance_COL1, wal.getBalance()); // Replace "Doe" with the actual last name
        values.put(saving_COL, wal.getSavings()); // Replace "Region" with the actual region
        values.put(userid_COL1, wal.getUserId()); // Replace "123 Main St" with the actual address


        // after adding all values we are passing
        // content values to our table.
        long mytable=db.insert(TABLE_NAME2, null, values);

        Log.e("iNSERT DATA","DATA INSERTED"+mytable);
        // at last we are closing our
        // database after adding database.
        db.close();

    }



    public UserModel getUserById(String emailinput) {
        SQLiteDatabase db = this.getReadableDatabase();
        UserModel user = null;




        Log.d("DBHandler", "dbhendler: " + emailinput);

        Cursor cursor = db.rawQuery("Select * from "+TABLE_NAME+" where "+email_COL+" = ?",new String[]{emailinput});


            if (cursor != null && cursor.moveToFirst()) {
                user = new UserModel();
                int firstNameIndex = cursor.getColumnIndex(firstName_COL);
                if (firstNameIndex >= 0) {
                    user.setFirstName(cursor.getString(firstNameIndex));
                }

                int lastNameIndex = cursor.getColumnIndex(lastName_COL);
                if (lastNameIndex >= 0) {
                    user.setLastName(cursor.getString(lastNameIndex));
                }

                int regionIndex = cursor.getColumnIndex("regionname");
                if (regionIndex >= 0) {
                    user.setRegion(cursor.getString(regionIndex));
                }

                int telephoneIndex = cursor.getColumnIndex(telephone_COL);
                if (telephoneIndex >= 0) {
                    user.setTelephone(cursor.getString(telephoneIndex));
                }

                int addressIndex = cursor.getColumnIndex("address");
                if (addressIndex >= 0) {
                    user.setAddress(cursor.getString(addressIndex));
                }

                int emailIndex = cursor.getColumnIndex(email_COL);
                if (emailIndex >= 0) {
                    user.setEmail(cursor.getString(emailIndex));
                }

                int passwordIndex = cursor.getColumnIndex(password_COL);
                if (passwordIndex >= 0) {
                    user.setPassword(cursor.getString(passwordIndex));
                }

                int walletIndex = cursor.getColumnIndex(wallet_COL);
                if (walletIndex >= 0) {
                    user.setWallet(cursor.getLong(walletIndex));
                }

                int creditCardNumberIndex = cursor.getColumnIndex(creditCardNumber_COL);
                if (creditCardNumberIndex >= 0) {
                    user.setCreditCardNumber(cursor.getString(creditCardNumberIndex));
                }

                int expiryDateIndex = cursor.getColumnIndex("expiryDate");
                if (expiryDateIndex >= 0) {
                    user.setExpiryDate(cursor.getString(expiryDateIndex));
                }

                int cardNumberIndex = cursor.getColumnIndex("cardNumber");
                if (cardNumberIndex >= 0) {
                    user.setCode(cursor.getString(cardNumberIndex));
                }

            }



        db.close();

        return user;
    }


    public wallet retrievewalletOneRow(String email) {
        SQLiteDatabase db = this.getReadableDatabase();
        wallet result = null;

        Cursor cursor = db.rawQuery("Select * from "+TABLE_NAME2+" where "+userid_COL1+" = ?",new String[]{email});

        db.close();

        return result;
    }


    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        // this method is called to check if the table exists already.
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_NAME);
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_NAME2);
        onCreate(db);
    }
}