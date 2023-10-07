package com.example.fintech;

import android.view.View;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

public class Viewholder extends RecyclerView.ViewHolder {
    TextView id;

    TextView date;

    TextView price;
    public Viewholder(@NonNull View itemView) {
        super(itemView);

        id= itemView.findViewById(R.id.trensaction_id);
        date= itemView.findViewById(R.id.trensaction_date);
        price=itemView.findViewById(R.id.trensaction_price);

    }
}
