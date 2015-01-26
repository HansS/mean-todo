/**
 * Created by Hans on 26.01.2015.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://netxpert57:hans2008@ds027741.mongolab.com:27741/netxpertdb');
var db = mongoose.connection;

db.on('error',function(error){
  if (error) {
    console.log(error);
  }
});

db.once('open',function(){
  console.log('mean-todo open');
});

module.exports = db;
