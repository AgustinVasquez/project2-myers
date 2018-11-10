package com.ex.mvcs.entities;


import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name="myer_connect")
public class Matches {
    @Id
    @Column(name="myer_key")
    private String myer_id;

    @Column(name="myer_match")
    private ArrayList<String> MatchArray;

    public String getMyer_id() {
        return myer_id;
    }

    public ArrayList<String> getMatchArray() {
        return MatchArray;
    }

    @Override
    public String toString() {
        return "Myers Type :" + myer_id +
                " Has Ideal Matches with: " + MatchArray;
    }
}
