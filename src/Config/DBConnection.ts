const mysql = require('mysql');
const keys = require('./ENV/keys');

export class DBConnection {
  private static pool: any;
  private constructor() {}

  static getInstance() {
    if (!DBConnection.pool) {
      DBConnection.pool = mysql.createPool(keys.dbConnection);

      DBConnection.pool.getConnection(function (err: any, connection: any) {
        if (err) throw err;

        connection.query('SELECT 1 + 1 AS solution',(error: any, results: any, fields: any) => {
          results ? console.log('Connected to Database') : console.log(error);
          connection.release();
          if (error) throw error;
        });
      });
    }

    return DBConnection.pool;
  }
}
