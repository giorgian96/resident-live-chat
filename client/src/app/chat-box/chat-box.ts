import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
    selector: 'app-chat-box',
    imports: [],
    templateUrl: './chat-box.html',
    styleUrl: './chat-box.css',
})
export class ChatBox {
    @ViewChild('usernameInput') usernameInput!: ElementRef;
    @ViewChild('messageInput') messageInput!: ElementRef;

    constructor(private ChatService: ChatService) { }

    sendMessage() {
        const username = this.usernameInput.nativeElement.value.trim();
        const message = this.messageInput.nativeElement.value.trim();

        if (username && message) {
            this.ChatService.transmitMessageToServer(username, message);
            this.messageInput.nativeElement.value = ''; // Clear it after sending
        } else {
            alert('Vă rugăm adăugați un username și un mesaj');
        }
    }
}
