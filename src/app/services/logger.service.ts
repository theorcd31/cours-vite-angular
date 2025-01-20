import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logErrorCustom(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
