import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ChatMessage } from '../chat-message/chat-message';
import { ChatNotification } from '../chat-notification/chat-notification';
import { ChatService } from '../chat.service';
import { Message } from '../message';

interface DisplayItem {
  type: 'message' | 'notification';
  timestamp: Date;
  message?: Message;
  notificationText?: string;
}

@Component({
    selector: 'app-chat-display',
    imports: [ChatMessage, ChatNotification],
    templateUrl: './chat-display.html',
    styleUrl: './chat-display.css',
})
export class ChatDisplay implements OnInit {
    displayItems: DisplayItem[] = [];

    constructor(
        private ChatService: ChatService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.ChatService.getMessagesFromServer().subscribe((message: Message) => {
            this.displayItems.push({
                type: 'message',
                timestamp: message.timestamp || new Date(),
                message: message
            });

            this.cdr.detectChanges();
        });

        this.ChatService.getNotificationsFromServer().subscribe((notification: string) => {
            this.displayItems.push({
                type: 'notification',
                timestamp: new Date(),
                notificationText: notification
            });

            this.cdr.detectChanges();
        });
    }
}
