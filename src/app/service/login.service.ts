import { Injectable } from '@angular/core';
import { syncDB, UserEntity } from '../entity';
import { LoginModel } from '../viewModel';
import * as fs from 'fs';

const LOGIN_KEY: string = "loginUser";

@Injectable()
export class LoginService {

  logOn(loginModel: LoginModel): boolean {
    localStorage.setItem(LOGIN_KEY, JSON.stringify(loginModel));
    return true;
  }

  loadStorage(): LoginModel {
    let val = localStorage.getItem(LOGIN_KEY);
    if (val && val.length > 0) {
      return JSON.parse(val);
    }
    else {
      return null;
    }
  }
}
