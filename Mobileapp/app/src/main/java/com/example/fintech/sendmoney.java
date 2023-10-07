package com.example.fintech;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class sendmoney extends AppCompatActivity {



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sendmoney);

        EditText amount=findViewById(R.id.AmmounfrecevEdittext);

        CardView send=findViewById(R.id.sendmoney);

        send.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Home.balance=Home.balance-Double.parseDouble(amount.getText().toString());
                startActivity(new Intent(sendmoney.this,Home.class));
            }
        });



    }
}