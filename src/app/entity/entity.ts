/**
 * the base ORM model object
 */
export abstract class Entity {
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
  updatedBy?: number
}