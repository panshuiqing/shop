import * as Sequilize from 'sequelize';
import { dbUtil, baseColumns } from './dbUtil';
import { Entity } from './entity';

export interface ProductEntity extends Entity {
  /**
   * 产品编码(条形码)
   */
  productCode?: string;

  /**
   * 商品名称
   */
  productName: string;
  
}
