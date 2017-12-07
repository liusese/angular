import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  loggers: string[] = [];

  constructor() { }

  setLoggers(msg: string) {
    this.loggers.push(msg);
  }

  clear() {
    this.loggers = [];
  }
}
