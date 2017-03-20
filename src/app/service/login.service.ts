import { Injectable } from '@angular/core';
import { UserEntity, UserModel, syncDB } from '../entity';
import { LoginModel, ValidationResult } from '../viewModel';
import { cryptoHelper } from '../util';
import * as BlueBird from 'bluebird';

const LOGIN_KEY: string = "loginUser";

@Injectable()
export class LoginService {
  currentUser: UserEntity;

  protected saveUser(loginModel: LoginModel):void {
    localStorage.setItem(LOGIN_KEY, JSON.stringify(loginModel));
  }

  logOn(loginModel: LoginModel): BlueBird<ValidationResult> {
    if (loginModel.loginName.trim() == '') {
      return BlueBird.resolve(ValidationResult.fail('登录名不能为空'));
    }
    if (loginModel.password.trim() == '') {
      return BlueBird.resolve(ValidationResult.fail('密码不能为空'));
    }

    let result = UserModel.findOne({ where: { "loginName": loginModel.loginName } })
      .then(user => {
        if (user == null) {
          return ValidationResult.fail('用户名不存在');
        }
        else {
          let cryptedPwd = cryptoHelper.encode(loginModel.password);
          if (user.password != cryptedPwd) {
            return ValidationResult.fail('密码不正确');
          } else {
            this.saveUser(loginModel);
            this.currentUser = user;
            return ValidationResult.success();
          }
        }
      })
      .catch(error => {
        return ValidationResult.fail('登录异常');
      });

    return result;
  }

  resetPassword(loginName: string, password: string): BlueBird<ValidationResult> {
    if (loginName.trim() == '') {
      return BlueBird.resolve(ValidationResult.fail('登录名不能为空'));
    }
    if (password.trim() == '') {
      return BlueBird.resolve(ValidationResult.fail('新密码不能为空'));
    }

    let result = UserModel.findOne({ where: { "loginName": loginName } })
      .then(user => {
        if (user == null) {
          return ValidationResult.fail('用户名不存在');
        }
        else {
          let newPwd = cryptoHelper.encode(password);
          user.password = newPwd;
          return user.save()
            .then(x => {
              return ValidationResult.success();
            })
            .catch(error => {
              return ValidationResult.fail('密码重置失败');;
            });
        }
      })
      .catch(error => {
        return ValidationResult.fail('系统异常');
      });

    return result;
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
