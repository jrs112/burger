var orm = require('../config/orm.js');

var burger_call = {
  insertOne: function(some_val, cb){
    orm.insert('burgers', 'burger_name', some_val, function(res){
      cb(res);
    });
  },
  selectAll: function(cb){
    orm.selectAll('burgers', function(res){
      cb(res);
    });
  },
  updateOne: function(user_id, cb){
    orm.update('burgers', 'devoured', 1 , 'id', user_id, function(res){
      cb(res);
    });
  }
}

module.exports = burger_call;