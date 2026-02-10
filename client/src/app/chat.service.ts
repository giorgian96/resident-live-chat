import { Injectable } from '@angular/core';
import { Message } from './message';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ChatService {
    constructor(private socket: Socket) { }

    private myUsername: string = '';

    transmitMessageToServer(username: string, message: string) {
        this.myUsername = username;

        const theMessage: Message = {
            username: username,
            text: message,
            timestamp: new Date()
        };

        this.socket.emit('chat message', theMessage);
    }

    getMessagesFromServer() {
        return this.socket.fromEvent<Message>('chat message').pipe(
            map(message => ({
                ...message,
                isOwnMessage: message.username === this.myUsername
            }))
        );
    }

    getNotificationsFromServer() {
        return this.socket.fromEvent<string>('notification');
    }
}
