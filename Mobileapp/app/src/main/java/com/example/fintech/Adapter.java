package com.example.fintech;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class Adapter extends RecyclerView.Adapter<Viewholder> {


    Context context;

    List<Activity> activities;

    public Adapter(Context context, List<Activity> activities) {
        this.context = context;
        this.activities = activities;
    }

    @NonNull
    @Override
    public Viewholder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.spendmoney, parent, false);
        return new Viewholder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull Viewholder holder, int position) {
        Activity currentEmp = activities.get(position);
        holder.id.setText(activities.get(position).getId().toString());
        holder.date.setText(activities.get(position).getDate().toString());
        holder.price.setText(activities.get(position).getPrice().toString());
    }

    @Override
    public int getItemCount() {
        return activities.size();
    }
}
