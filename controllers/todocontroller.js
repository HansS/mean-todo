/**
 * Created by Hans on 26.01.2015.
 */
var mongoose = require('mongoose');

require('../models/todo');
var Todo = mongoose.model('Todo');

var _ = require('underscore');




exports.post = function(req,res){
  var todo = new Todo(req.body);
  todo.save();
  res.jsonp(todo);

};

exports.get = function(req,res){
  Todo.find().exec(function(error,todos){
    res.jsonp(todos);
  });
};

exports.show = function(req,res){
  Todo.load(req.params.id,function(error,todo){
    res.jsonp(todo);
  });
};

exports.update = function(req,res){
  Todo.load(req.params.id,function(error,todo){
    todo = _.extend(todo,req.body);
    todo.save(function(error){
      res.jsonp(todo);
    });
  });
};


exports.delete = function(req,res){
  Todo.load(req.params.id,function(error,todo){
    todo.remove(function(error){
      res.jsonp(todo);
    });

  });
};