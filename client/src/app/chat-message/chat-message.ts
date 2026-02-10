import { Component, Input } from '@angular/core';
import { Message } from '../message';

@Component({
    selector: 'app-chat-message',
    imports: [],
    templateUrl: './chat-message.html',
    styleUrl: './chat-message.css',
})
export class ChatMessage {
    @Input() message!: Message; // non-null assertion operator

    formatTimestamp(timestamp: Date | undefined): string {
        if (!timestamp) {
            return '';
        }

        const date = new Date(timestamp);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${hours}:${minutes}`;
    }
}
