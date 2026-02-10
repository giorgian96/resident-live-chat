import { Component, Input } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-chat-message',
  imports: [],
  templateUrl: './chat-message.html',
  styleUrl: './chat-message.css',
})
export class ChatMessage {
    @Input() message!: Message;
}
