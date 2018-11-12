package com.ex.mvcs.entities;
import javax.persistence.*;
import java.sql.Timestamp;


@Entity
@Table(name="text_chat")
public class Message {

    @Id
    @Column(name="chat_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name="sender")
    private int sender;

    @Column(name="receiver")
    private int receiver;

    @Column(name="message")
    private String message;

    @Column(name="sent")
    private Timestamp time;

    public int getSender() {
        return sender;
    }

    public void setSender(int sender) {
        this.sender = sender;
    }

    public int getReceiver() {
        return receiver;
    }

    public void setReceiver(int receiver) {
        this.receiver = receiver;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Timestamp getTime() {
        return time;
    }

    public void setTime(Timestamp time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return
                sender +
                " told" + receiver +
                " " + message +
                " at time " + time;
    }
}
