import * as Sequilize from 'sequelize';
import { dbUtil, baseColumns } from './dbUtil';
import { Entity } from './entity';

export interface UserEntity extends Entity {
  loginName: string;
  username: string;
  password: string;
  /**
   * 用户类型：1系统管理员;2普通用户
   */
  userType?: string;
  email?: string;
  isBuilt?: boolean;
}

let loginName: Sequilize.DefineAttributeColumnOptions = {
  type: Sequilize.STRING(20),
  allowNull: false,
  field: 'loginName'
};

let username: Sequilize.DefineAttributeColumnOptions = {
  type: Sequilize.STRING(20),
  allowNull: false,
  field: 'username'
};

let password: Sequilize.DefineAttributeColumnOptions = {
  type: Sequilize.STRING(36),
  allowNull: false,
  field: 'password'
};

let userType: Sequilize.DefineAttributeColumnOptions = {
  type: Sequilize.STRING(2),
  allowNull: false,
  comment: '用户类型',
  field: 'userType',
  defaultValue: "2"
};

let email: Sequilize.DefineAttributeColumnOptions = {
  type: Sequilize.STRING(255),
  allowNull: true,
  comment: '电子邮件',
  field: 'email'
};

let isBuilt: Sequilize.DefineAttributeColumnOptions = {
  type: Sequilize.BOOLEAN,
  allowNull: true,
  defaultValue: false,
  comment: '是否内建',
  field: 'isBuilt'
};


let userColumns: Sequilize.DefineAttributes = {
  "loginName": loginName,
  "username": username,
  "password": password,
  "userType": userType,
  "email": email,
  "isBuilt": isBuilt
};

export let UserModel = dbUtil.define<UserEntity, UserEntity>('ax_user',
  Object.assign(userColumns, baseColumns),
  { comment: '用户表' });