package com.example.fintech;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;

import com.example.fintech.Database.DBHandler;
import com.mysql.cj.log.Log;

public class Login extends AppCompatActivity {
    ImageButton Signinbtn;

    EditText emailtext;

    EditText passwordtext;

    TextView Signupbtn;

    public static DBHandler db;

    public static String  userEmail;
    static String EMAIL="EMAIL";



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        db=new DBHandler(Login.this);

        emailtext=findViewById(R.id.EmailLoginEdittext);
        passwordtext=findViewById(R.id.PasswordLoginEdittext);


        Signinbtn=findViewById(R.id.signinbtn);
        Signupbtn=findViewById(R.id.Signup);

        Signinbtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                boolean checklog=db.checkuser(emailtext.getText().toString(),passwordtext.getText().toString());

                if (checklog==true){
                    userEmail=emailtext.getText().toString();
                    Intent i=new Intent(Login.this,entercodelogin.class);
                    i.putExtra("EMAILLOG",userEmail);
                    startActivity(i);

                }else {
                    Toast.makeText(Login.this,"User not found",Toast.LENGTH_LONG).show();
                }


            }
        });

        Signupbtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i=new Intent(Login.this, Signup.class);
                startActivity(i);
            }
        });






    }

    public static String getUserEmail() {
        return userEmail;
    }

    public static void setUserEmail(String userEmail) {
        Login.userEmail = userEmail;
    }

}