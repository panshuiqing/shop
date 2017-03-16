import { Injectable } from '@angular/core';
import { syncDB } from '../entity';
import * as fs from 'fs';

@Injectable()
export class LoginService {
  logined: boolean = false;

  logOn(userName: string, password: string) {
    syncDB(true);
    console.log('aaaa');
  }
}