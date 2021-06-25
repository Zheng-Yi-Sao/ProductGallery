require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: 'root',
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

connection.connect((err) => {
  if (err) {
    console.log('FAILED TO CONNECT TO MYSQL: ', err);
    return;
  }
  console.log('CONNECTED TO MYSQL!');
});