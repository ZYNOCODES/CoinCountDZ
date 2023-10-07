package com.example.fintech;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.TextView;

import com.example.fintech.Database.DBHandler;
import com.example.fintech.Database.MySQLConnection;
import com.example.fintech.Database.UserModel;

import java.sql.Connection;

public class Signup extends AppCompatActivity {

    EditText name,email,phone,password;

    TextView statue;

    ImageButton signin;

    DBHandler DB;

    Connection connection;

    static String NAME="NAME";
    static String EMAIL="EMAIL";
    static String PASSWORD="PASSWORD";
    static String PHONE="PHONE";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);


        DB=new DBHandler(Signup.this);

        name=findViewById(R.id.NamesignnEdittext);
        email=findViewById(R.id.EmailsignnEdittext);
        phone=findViewById(R.id.PhoneignEdittext);
        password=findViewById(R.id.PasswordsignEdittext);
        statue=findViewById(R.id.statue);

        signin=findViewById(R.id.signinbtn);

        signin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                boolean ifexist=DB.checkuserexist(email.getText().toString());

                if (ifexist==true){
                    statue.setText("Email already exist");
                }else{
                    Intent i=new Intent(Signup.this, GeneratecodeSignin.class);
                    i.putExtra(NAME,name.getText().toString());
                    i.putExtra(EMAIL,email.getText().toString());
                    i.putExtra(PHONE,phone.getText().toString());
                    i.putExtra(PASSWORD,password.getText().toString());
                    startActivity(i);

                }
                /**/



            }
        });




    }
}