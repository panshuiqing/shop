import * as sequelize from 'sequelize';

interface sequelizeEntity {
  changed?(key: string): boolean;
  changed?(): boolean | string[];

  increment?(fields: string | string[] | Object,
    options?: sequelize.InstanceIncrementDecrementOptions): Promise<this>;

  decrement?(fields: string | string[] | Object,
            options?: sequelize.InstanceIncrementDecrementOptions): Promise<this>;

  destroy?(options?: sequelize.InstanceDestroyOptions): Promise<void>;

  restore?(options?: sequelize.InstanceRestoreOptions): Promise<void>;

  reload?(options?: sequelize.FindOptions): Promise<this>;

  save?(options?: sequelize.InstanceSaveOptions): Promise<this>;

  update?(key: string, value: any, options?: sequelize.InstanceUpdateOptions): Promise<this>;

  update?(keys: Object, options?: sequelize.InstanceUpdateOptions): Promise<this>;
}

/**
 * the base ORM model object
 */
export interface Entity extends sequelizeEntity {
  /**
   * the key field
   */
  id?: number;

  /**
   * indicate the data is enabled
   */
  enabled: boolean;

  /**
   * created date
   */
  createdAt?: Date;

  /**
   * the creator
   */
  createdBy?: number;

  /**
   * updated date
   */
  updatedAt?: Date;

  /**
   * the modifier
   */
  updatedBy?: number;

}