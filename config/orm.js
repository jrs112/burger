var connection = require('../config/connection.js');

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(tableInput, colToSearch, valOfCol, cb) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      cb(result);
    });
  },
   insertOne: function(tableInput, column, some_val, cb){
    connection.query('INSERT INTO ' + tableInput + ' ( ' + column + ' ) ' + ' VALUES (?)', [some_val], function(err, result){
      cb(result);
    });
  },
  updateOne: function(tableInput, column, set_val, col_param, val_param, cb){
    connection.query('UPDATE ' + tableInput + ' SET ' + column + ' = ? WHERE ' + col_param + ' = ?', [set_val, val_param], function(err, result){
      cb(result);
    });
  }
};

module.exports = orm;