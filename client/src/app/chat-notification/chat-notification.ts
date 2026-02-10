import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-chat-notification',
    imports: [],
    templateUrl: './chat-notification.html',
    styleUrl: './chat-notification.css',
})
export class ChatNotification {
    @Input() text!: string;
}
