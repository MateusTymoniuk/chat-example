package br.com.mateus.chatexample.model;

import lombok.Data;

@Data
public class Message {
    private String from;
    private String text;
}
