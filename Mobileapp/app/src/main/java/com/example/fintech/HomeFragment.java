package com.example.fintech;

import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.example.fintech.Database.DBHandler;
import com.example.fintech.Database.UserModel;

import java.util.ArrayList;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link HomeFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class HomeFragment extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public HomeFragment() {
        // Required empty public constructor
    }


    String user;

    UserModel UserLog;

    DBHandler db;

    TextView code;

    TextView name;

    TextView homebal;

    LinearLayout gotoDetail;



    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment HomeFragment.
     */
    // TODO: Rename and change types and number of parameters
    public static HomeFragment newInstance(String param1, String param2) {
        HomeFragment fragment = new HomeFragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_home, container, false);

        // Retrieve data from the arguments bundle
        Bundle args = getArguments();
        if (args != null) {
            user = args.getString("USEREMAIL");

        }
        // Inflate the layout for this fragment
        return view;
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        db=new DBHandler(getContext());



        ArrayList<Activity> Activities=new ArrayList<Activity>();

        Activities.add(new Activity("89876556","18/08/2023","2343.99"));
        Activities.add(new Activity("89876556","18/08/2023","2343.99"));
        Activities.add(new Activity("89876556","18/08/2023","2343.99"));
        Activities.add(new Activity("89876556","18/08/2023","2343.99"));
        Activities.add(new Activity("89876556","18/08/2023","2343.99"));

        LinearLayout sendmoney=view.findViewById(R.id.sendmoneybtn);

        TextView creditcardname=view.findViewById(R.id.creditcardname);
        gotoDetail=view.findViewById(R.id.Details);

        TextView homebal=view.findViewById(R.id.balancetext);
        homebal.setText(Double.toString(Home.balance));

        Log.d("DBHandler", "home f: " + user);

        UserLog=db.getUserById(Login.userEmail);

        name=view.findViewById(R.id.creditcardname);

        code=view.findViewById(R.id.creditcardnumber);

        name.setText(UserLog.getFirstName()+" "+UserLog.getLastName());

        code.setText("**** **** **** "+UserLog.getCode());


        gotoDetail.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getContext(), Details.class));
            }
        });


        //creditcardname.setText(UserLog.getFirstName().toString()+" "+UserLog.getLastName());



        Adapter itemAdapter = new Adapter(getContext(),Activities);

        // Set the LayoutManager that
        // this RecyclerView will use.
        RecyclerView recyclerView = view.findViewById(R.id.recyclerView); // Replace 'R.id.recyclerView' with the actual ID of your RecyclerView in your layout XML.

        if (recyclerView != null) {
            RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(getContext());
            recyclerView.setLayoutManager(layoutManager);
            // Now you can set the adapter and other properties for your RecyclerView.
        }// Replace 'R.id.recyclerView' with the actual ID of your RecyclerView in your layout XML.


        // adapter instance is set to the
        // recyclerview to inflate the items.
        recyclerView.setAdapter(itemAdapter);

        sendmoney.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i=new Intent(getContext(),com.example.fintech.sendmoney.class);
                startActivity(i);
            }
        });
    }
}