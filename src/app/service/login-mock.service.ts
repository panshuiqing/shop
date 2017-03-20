import { Injectable } from '@angular/core';
import { UserEntity } from '../entity';
import { LoginModel, ValidationResult } from '../viewModel';
import { cryptoHelper } from '../util';
import * as BlueBird from 'bluebird';
import { LoginService } from './login.service';

@Injectable()
export class LoginMockService extends LoginService {
  currentUser: UserEntity;

  logOn(loginModel: LoginModel): BlueBird<ValidationResult> {
    if (loginModel.loginName.trim() == '') {
      return BlueBird.resolve(ValidationResult.fail('登录名不能为空'));
    }
    if (loginModel.password.trim() == '') {
      return BlueBird.resolve(ValidationResult.fail('密码不能为空'));
    }

    this.saveUser(loginModel);
    let cryptedPwd = cryptoHelper.encode(loginModel.password);
    this.currentUser = { loginName:loginModel.loginName, password:cryptedPwd, 
        username:loginModel.loginName, enabled:true };
        
    return BlueBird.resolve(ValidationResult.success());
  }

  resetPassword(loginName: string, password: string): BlueBird<ValidationResult> {
    if (loginName.trim() == '') {
      return BlueBird.resolve(ValidationResult.fail('登录名不能为空'));
    }
    if (password.trim() == '') {
      return BlueBird.resolve(ValidationResult.fail('新密码不能为空'));
    }

    return BlueBird.resolve(ValidationResult.success());
  }
}
