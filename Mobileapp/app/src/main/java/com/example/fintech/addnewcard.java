package com.example.fintech;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import com.example.fintech.Database.wallet;

public class addnewcard extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_addnewcard);

        EditText CARDID=findViewById(R.id.newcarrdid);

        EditText CARDEXP=findViewById(R.id.newcardexp1);

        EditText CARDEXP2=findViewById(R.id.newcardexp2);

        CardView add=findViewById(R.id.buttonsubmit);


        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                WalletFragment.mywallet.add(new wallet(23000,CARDEXP.getText().toString()+" / "+CARDEXP2.getText().toString(),CARDID.getText().toString()));
                double augbal=Home.balance+23000;
                Home.balance=augbal;
            }
        });



    }
}