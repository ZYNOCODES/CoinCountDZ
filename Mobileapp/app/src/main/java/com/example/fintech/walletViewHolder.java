package com.example.fintech;

import android.view.View;
import android.widget.TextView;

import androidx.annotation.NonNull;

public class walletViewHolder extends Viewholder{

    TextView balance;

    TextView id;

    TextView exp;
    public walletViewHolder(@NonNull View itemView) {
        super(itemView);

        balance=itemView.findViewById(R.id.balancecard);
        id=itemView.findViewById(R.id.idcard);
        exp=itemView.findViewById(R.id.expdate);
    }
}
