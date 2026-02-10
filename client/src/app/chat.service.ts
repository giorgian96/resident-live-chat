import { Injectable } from '@angular/core';
import { Message } from './message';
import { Socket } from 'ngx-socket-io';

@Injectable({
    providedIn: 'root',
})
export class ChatService {
    constructor(private socket: Socket) { }

    transmitMessageToServer(username: string, message: string) {
        const theMessage: Message = {
            username: username,
            text: message,
            timestamp: new Date(),
            isOwnMessage: true
        };

        this.socket.emit('chat message', theMessage);
    }

    getMessagesFromServer() {
        return this.socket.fromEvent<Message>('chat message');
    }
}
