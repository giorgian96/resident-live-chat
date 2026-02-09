import { Component } from '@angular/core';
import { ChatMessage } from '../chat-message/chat-message';
import { ChatNotification } from '../chat-notification/chat-notification';

@Component({
  selector: 'app-chat-display',
  imports: [ChatMessage, ChatNotification],
  templateUrl: './chat-display.html',
  styleUrl: './chat-display.css',
})
export class ChatDisplay {

}
