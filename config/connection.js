var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 6603,
  user: 'root',
  password: 'root',
  database: 'burgers_db'
})

connection.connect(err => {
  if (err) {
    console.error('error connecing ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;