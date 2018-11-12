package com.ex.mvcs.service;


import com.ex.mvcs.data.MessageDao;
import com.ex.mvcs.entities.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Optional;

@Service
@Transactional
public class MessageService {
    MessageDao messageDao;

    @Autowired
    public MessageService(MessageDao messageDao){this.messageDao = messageDao;}

    @Transactional
    public ArrayList<Message> getMessages(int sender, int receiver, Timestamp date) {
        Optional<ArrayList<Message>> u = messageDao.getMessageBySenderAndReceiverAndTimeAfter(sender, receiver, date);

        if (u.isPresent()) {
            return u.get();
        } else {
            return null;
        }
    }

    @Transactional
    public void submitMessage(Message m){ messageDao.save(m);}
}