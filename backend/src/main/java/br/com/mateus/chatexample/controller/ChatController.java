package br.com.mateus.chatexample.controller;

import br.com.mateus.chatexample.model.Message;
import br.com.mateus.chatexample.model.OutputMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.time.LocalDateTime;

@Controller
public class ChatController {

//    @MessageMapping("/chat")
//    @SendTo("/topic/messages")
//    public OutputMessage send(Message message) throws Exception {
//        return new OutputMessage(message.getFrom(), message.getText(), LocalDateTime.now().toString());
//    }

    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public OutputMessage send(String message) throws Exception {
        return new OutputMessage("", message, LocalDateTime.now().toString());
    }
}
