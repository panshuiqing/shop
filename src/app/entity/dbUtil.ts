import * as Sequilize from 'sequelize';
import { dbConfig } from '../../configs';

export let dbUtil = new Sequilize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.driver,
  timezone: dbConfig.timezone
});

export function syncDB(force: boolean = false) {
  dbUtil.sync({ force: force })
    .then(
    s => console.log('sync database success.'),
    e => console.log(e)
    );
}

let createdBy: Sequilize.DefineAttributeColumnOptions = {
  type: Sequilize.INTEGER,
  allowNull: true,
  comment: '创建人',
  field: 'createdBy'
};

let updatedBy: Sequilize.DefineAttributeColumnOptions = {
  type: Sequilize.INTEGER,
  allowNull: true,
  comment: '修改人',
  field: 'updatedBy'
};

let enabled: Sequilize.DefineAttributeColumnOptions = {
  type: Sequilize.BOOLEAN,
  allowNull: true,
  comment: '是否可用',
  field: 'enabled',
  defaultValue: true
};

export let baseColumns : Sequilize.DefineAttributes = {
  "createdBy": createdBy,
  "updatedBy": updatedBy,
  "enabled": enabled
};