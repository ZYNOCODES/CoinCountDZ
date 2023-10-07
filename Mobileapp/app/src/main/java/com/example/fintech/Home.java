package com.example.fintech;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.os.Bundle;
import android.util.Log;
import android.view.MenuItem;

import com.example.fintech.Database.DBHandler;
import com.example.fintech.Database.UserModel;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.android.material.navigation.NavigationBarView;

public class Home extends AppCompatActivity {

    BottomNavigationView bottomNavigationView;

    HomeFragment homeF;

    WalletFragment walletF;

    ProfilFragment profilF;

    public static DBHandler DB;

    public static String USERLOG="USERLOG";

    UserModel userlog;

    String user;

    public static double balance;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        DB=new DBHandler(Home.this);






        Log.d("DBHandler", "home: " + user);
        Bundle tofram=new Bundle();
        tofram.putString("USEREMAIL",Login.getUserEmail());

        bottomNavigationView=findViewById(R.id.bottomNavbar);



        homeF=new HomeFragment();
        homeF.setArguments(tofram);
        walletF=new WalletFragment();

        profilF=new ProfilFragment();

        FragmentManager Fm=getSupportFragmentManager();
        FragmentTransaction Fg=Fm.beginTransaction().replace(R.id.body,homeF);
        Fg.commit();



        bottomNavigationView.setOnItemSelectedListener(new NavigationBarView.OnItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                int itemId = item.getItemId();
                if (itemId == R.id.home) {
                    homeF.setArguments(tofram);
                    getSupportFragmentManager()
                            .beginTransaction()
                            .replace(R.id.body, homeF)
                            .commit();
                    return true;
                } else if (itemId == R.id.wallet) {
                    getSupportFragmentManager()
                            .beginTransaction()
                            .replace(R.id.body, walletF)
                            .commit();
                    return true;
                } else if (itemId == R.id.profil) {
                    getSupportFragmentManager()
                            .beginTransaction()
                            .replace(R.id.body, profilF)
                            .commit();
                    return true;
                }
                return false;
            }
        });


        }

        public void returnuser(){
            returnuser();
        }
    }