import * as Sequilize from 'sequelize';
import { dbUtil, baseColumns } from './dbUtil';
import { Entity } from './entity';

export class UserEntity extends Entity {
  username: string;
  password: string;
  salt?: string;
  email?: string;
  isBuilt?: boolean;
}

let username: Sequilize.DefineAttributeColumnOptions = {
  type: Sequilize.STRING(50),
  allowNull: false,
  comment: '用户名',
  field: 'username'
};

let password: Sequilize.DefineAttributeColumnOptions = {
  type: Sequilize.STRING(50),
  allowNull: false,
  comment: '密码',
  field: 'password'
};

let email: Sequilize.DefineAttributeColumnOptions = {
  type: Sequilize.STRING(255),
  comment: '电子邮件'
};

let salt: Sequilize.DefineAttributeColumnOptions = {
  type: Sequilize.STRING(50),
  allowNull: true
};

let isBuilt: Sequilize.DefineAttributeColumnOptions = {
  type: Sequilize.BOOLEAN,
  allowNull: true,
  defaultValue: false,
  comment: '是否内建',
  field: 'isBuilt'
};


let userColumns: Sequilize.DefineAttributes = {
  "username": username,
  "password": password,
  "email": email,
  "salt": salt,
  "isBuilt": isBuilt
};

export let UserModel = dbUtil.define<UserEntity, UserEntity>('ax_user',
  Object.assign(userColumns, baseColumns),
  { comment: '用户表' });