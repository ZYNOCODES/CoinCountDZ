package com.example.fintech;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.example.fintech.Database.DBHandler;
import com.example.fintech.Database.UserModel;

public class entercodelogin extends AppCompatActivity {

    EditText code1,code2,code3,code4;
    CardView confirmcode;

    DBHandler DB;

    UserModel user;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_entercodelogin);

        DB=new DBHandler(entercodelogin.this);

        code1=findViewById(R.id.code1textenter);
        code2=findViewById(R.id.code2textenter);
        code3=findViewById(R.id.code3textenter);
        code4=findViewById(R.id.code4textenter);


        //user=DB.getUserById(Login.userEmail);


        confirmcode=findViewById(R.id.confirmcode);



        confirmcode.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String Code=code1.getText().toString()+code2.getText().toString()+code3.getText().toString()+code4.getText().toString();
                Log.d("DBHandler", "enter code: " + Code);
                boolean res=DB.checkusercode(Code);
                if (res==true){
                    Intent i=new Intent(entercodelogin.this,Home.class);
                    startActivity(i);

                }else{
                    Toast.makeText(entercodelogin.this,"Invalide code",Toast.LENGTH_LONG).show();

                }



            }
        });
    }
}