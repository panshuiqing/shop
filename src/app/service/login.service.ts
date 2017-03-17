import { Injectable } from '@angular/core';
import { UserEntity, UserModel } from '../entity';
import { LoginModel, ValidationResult } from '../viewModel';
import { cryptoHelper } from '../util';

const LOGIN_KEY: string = "loginUser";

@Injectable()
export class LoginService {
  currentUser: UserEntity;

  logOn(loginModel: LoginModel): ValidationResult {
    if (loginModel.loginName.trim() == '') {
      return ValidationResult.fail('登录名不能为空');
    }
    if (loginModel.password.trim() == '') {
      return ValidationResult.fail('密码不能为空');
    }

    let result = UserModel.findOne({ where: { "loginName": loginModel.loginName } })
      .value();
    if (result != null) {
      let cryptedPwd = cryptoHelper.encode(loginModel.password);
      if (result.password != cryptedPwd) {
        return ValidationResult.fail('密码不正确');
      }
      else {
        this.currentUser = result;
        localStorage.setItem(LOGIN_KEY, JSON.stringify(loginModel));
        return ValidationResult.success();
      }
    }
    else {
      return ValidationResult.fail('用户名不存在');
    }
  }

  loadSavedUser(): LoginModel {
    let val = localStorage.getItem(LOGIN_KEY);
    if (val && val.length > 0) {
      return JSON.parse(val);
    }
    else {
      return null;
    }
  }
}
