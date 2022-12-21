const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-second', 'root', '1234', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports=sequelize;

// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-second',
//     password: '1234'
// });

// module.exports = pool.promise();
