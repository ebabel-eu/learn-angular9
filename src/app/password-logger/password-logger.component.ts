
import { Component, OnInit } from '@angular/core';

interface Message {
  timestamp: number;
  id: number;
}

@Component({
  selector: 'app-password-logger',
  templateUrl: './password-logger.component.html',
  styleUrls: ['./password-logger.component.css']
})
export class PasswordLoggerComponent implements OnInit {
  revealSecret: boolean = false;
  logMessages: Message[] = [];
  messageId: number = 0;

  constructor() {}
  ngOnInit(): void {}

  onRevealSecret(): void {
    this.revealSecret = !this.revealSecret;

    this.messageId = this.messageId + 1;

    const logMessage: Message = {
      timestamp: Date.now(),
      id: this.messageId,
    };

    this.logMessages.push(logMessage);
  }
}
