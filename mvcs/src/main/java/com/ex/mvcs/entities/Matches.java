package com.ex.mvcs.entities;


import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name="myerconnect")
public class Matches {
    @Id
    @Column(name="myerkey")
    private String myerkey;

    @Column(name="myermatch")
    private ArrayList<String> MatchArray;

    public String getMyer_id() {
        return myerkey;
    }

    public ArrayList<String> getMatchArray() {
        return MatchArray;
    }

//    @Override
//    public String toString() {
//        return "Myers Type :" + myerkey +
//                " Has Ideal Matches with: " + MatchArray;
//    }


    @Override
    public String toString() {
        return "Matches{" +
                "myerkey='" + myerkey + '\'' +
                ", MatchArray=" + MatchArray +
                '}';
    }
}
