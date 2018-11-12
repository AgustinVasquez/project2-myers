package com.ex.mvcs.entities;

import javax.persistence.*;
import java.util.ArrayList;


/**
 *
 * @Author:AgustinVasquez
 *
 */
@Entity
@Table(name="blocked")
public class Blocked {
    @Id
    @Column(name="ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int blockId;

    @Column(name="blocked")
    private ArrayList<Integer> BlockedArray;

    public int getBlockId() {
        return blockId;
    }

    public void setBlockId(int blockId) {
        blockId = blockId;
    }

    public ArrayList<Integer> getBlockedArray() {
        return BlockedArray;
    }

    public void setBlockedArray(ArrayList<Integer> blockedArray) {
        BlockedArray = blockedArray;
    }

    public void appendBlockedArray(int blockedID){
        this.BlockedArray.add(blockedID);
    }
    public void removeBlockedArray(int blockedID){
        if(this.BlockedArray.contains(blockedID)){
            int index=this.BlockedArray.indexOf(blockedID);
            this.BlockedArray.remove(index);
        }
    }

    @Override
    public String toString() {
        return "User number: " + blockId +
                " Has Blocked Users: " + BlockedArray;
    }
}
