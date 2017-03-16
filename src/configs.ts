export interface DbConfig {
  /**
   * the login username
   */
  username: string;
  /**
   * the login password
   */
  password: string;
  /**
   * the host . default localhost
   */
  host?: string;
  /**
   * the port
   */
  port?: number;
  /**
   * the database
   */
  database: string;
  /**
   * the database driver: mysql, sqlite, oracle etc.
   */
  driver: string;

  /**
   * the timezone to format js date
   */
  timezone?: string;
}

export let dbConfig: DbConfig = {
  username: 'root',
  password: '123456',
  host: 'localhost',
  port: 3306,
  database: 'score',
  driver: 'mysql',
  timezone: '+08:00'
};