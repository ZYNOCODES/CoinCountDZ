package com.example.fintech;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.fintech.Database.wallet;

import java.util.List;

public class WalletAdapter extends RecyclerView.Adapter<walletViewHolder> {
    Context context;

    List<wallet> My_wallet;

    public WalletAdapter(Context context, List<wallet> my_wallet) {
        this.context = context;
        My_wallet = my_wallet;
    }

    @NonNull
    @Override
    public walletViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.card, parent, false);
        return new walletViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull walletViewHolder holder, int position) {
        holder.id.setText("**** **** **** "+My_wallet.get(position).getUserId().toString());
        holder.balance.setText("Dzd "+Double.toString(My_wallet.get(position).getBalance()));
        holder.exp.setText("EXP "+Double.toString(My_wallet.get(position).getSavings()));
    }

    @Override
    public int getItemCount() {
        return My_wallet.size();
    }
}
