const mysql = require('mysql');
const mybatisMapper = require('mybatis-mapper');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

// create the myBatisMapper from xml file
mybatisMapper.createMapper([ './fruits.xml' ]);

// SQL Parameters
var param = {
    category : 'apple',
    price : 100
}

// Get SQL Statement
var format = {language: 'sql', indent: '  '};
var query = mybatisMapper.getStatement('fruit', 'testBasic', param, format);

// Do it!
connection.query(query, function(err, results, fields) {
  console.log(results); 
  console.log(fields);
});