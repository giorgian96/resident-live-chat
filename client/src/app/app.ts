import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatDisplay } from './chat-display/chat-display';
import { ChatBox } from './chat-box/chat-box';

@Component({
  selector: 'app-root',
  imports: [ChatDisplay, ChatBox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Resident Live Chat');
}
