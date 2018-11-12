package com.ex.mvcs.web;

import com.ex.mvcs.entities.Message;
import com.ex.mvcs.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 *
 * @Author:AgustinVasquez
 *
 */
@RestController
@RequestMapping("message-api")
public class MessageController {
    MessageService service;

    @Autowired
    MessageController(MessageService service){this.service = service;}

    @PostMapping(value = "/addMessage", consumes="application/json")
    public void addMessage(@RequestBody Message message){
        service.submitMessage(message);
    }

    @GetMapping(value = "/message/{sender}/{receiver}")
    public ArrayList<String> getMessages(@PathVariable int sender, @PathVariable int receiver){
        ArrayList<Message> messagesSent =service.getMessages(sender,receiver);
        ArrayList<Message> messagesReceived = service.getMessages(receiver,sender);
        int i;
//        for(i =0; i<messagesReceived.size()+messagesSent.size();i++){
////            messagesReceived;
////            if(messagesReceived[i].getTime>messagesSent[i].getTime){
////
////            }
////        }
        return null;
    }

}