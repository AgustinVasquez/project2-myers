package com.ex.mvcs.data;
import com.ex.mvcs.entities.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface MessageDao extends JpaRepository<Message, Integer>{
    public Optional<ArrayList<Message>> getMessageBySenderAndReceiverAndTimeAfter(int sender, int receiver, Timestamp date);

}