import { Injectable } from '@angular/core';
declare var Stomp;
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public stompClient;
  public msg = [];

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8080/chat';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/topic/messages', (message) => {
        if (message.body) {
          that.msg.push(message.body);
        }
      });
    });
  }

  // showMessageOutput(messageOutput) {

  //   const response = document.getElementById('response');
  //   const p = document.createElement('p');
  //   p.style.wordWrap = 'break-word';
  //   p.appendChild(document.createTextNode(messageOutput.from + ": " + messageOutput.text + " (" + messageOutput.time + ")"));
  //   response.appendChild(p);
  // }

  sendMessage(message) {
    this.stompClient.send('/app/chat', {}, message);
  }
}
