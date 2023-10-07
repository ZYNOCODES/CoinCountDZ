package com.example.fintech;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.fintech.Database.DBHandler;
import com.example.fintech.Database.UserModel;

import java.util.Random;

public class GeneratecodeSignin extends AppCompatActivity {

    TextView Generate;

    EditText code1place,code2place,code3place,code4place;

    CardView confirm;
    DBHandler DB;

    int code1,code2,code3,code4;

    String codeGenerated;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_generatecode_signin);

        Bundle extra=getIntent().getExtras();
        DB=new DBHandler(GeneratecodeSignin.this);


        Generate=findViewById(R.id.generatecode);
        confirm=findViewById(R.id.ConfirmGeneratecodeBtn);

        code1place=findViewById(R.id.code1textenter);
        code2place=findViewById(R.id.code2textenter);
        code3place=findViewById(R.id.code3textenter);
        code4place=findViewById(R.id.code4textenter);


        Random rand = new Random();
        // Setting the upper bound to generate the
        // random numbers in specific range
        int upperbound = 10;
        // Generating random values from 0 - 24
        // using nextInt()

        Generate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                code1 = rand.nextInt(upperbound);

                code2 = rand.nextInt(upperbound);

                code3 = rand.nextInt(upperbound);

                code4 = rand.nextInt(upperbound);



                String code1string=Integer.toString(code1);
                String code2string=Integer.toString(code2);
                String code3string=Integer.toString(code3);
                String code4string=Integer.toString(code1);

                code1place.setText(code1string);
                code2place.setText(code2string);
                code3place.setText(code3string);
                code4place.setText(code4string);



                Toast.makeText(GeneratecodeSignin.this,"Code generated",Toast.LENGTH_LONG).show();

            }
        });

        confirm.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                codeGenerated=code1place.getText().toString()+code2place.getText().toString()+code3place.getText().toString()+code4place.getText().toString();
                if(extra!=null)
                {

                    DB.addNewuser(new UserModel(
                            (String) extra.get(Signup.NAME),
                            (String) extra.get(Signup.NAME),
                            extra.getString(Signup.PHONE),
                            (String)extra.get(Signup.EMAIL),
                            (String)extra.get(Signup.PASSWORD),
                            codeGenerated
                    ));
                    Intent i=new Intent(GeneratecodeSignin.this, Home.class);
                    Login.setUserEmail((String)extra.get(Signup.EMAIL));
                    startActivity(i);
                }
            }
        });


    }
}