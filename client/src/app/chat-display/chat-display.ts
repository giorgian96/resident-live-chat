import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ChatMessage } from '../chat-message/chat-message';
import { ChatNotification } from '../chat-notification/chat-notification';
import { ChatService } from '../chat.service';
import { Message } from '../message';

@Component({
    selector: 'app-chat-display',
    imports: [ChatMessage, ChatNotification],
    templateUrl: './chat-display.html',
    styleUrl: './chat-display.css',
})
export class ChatDisplay implements OnInit {
    messages: Message[] = [];
    notifications: string[] = [];

    constructor(
        private ChatService: ChatService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.ChatService.getMessagesFromServer().subscribe((message: Message) => {
            this.messages.push(message);
            this.cdr.detectChanges();
        });

        this.ChatService.getNotificationsFromServer().subscribe((notification: string) => {
            this.notifications.push(notification);
            this.cdr.detectChanges();
        });
    }
}
