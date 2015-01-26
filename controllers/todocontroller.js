/**
 * Created by Hans on 26.01.2015.
 */
require('../models/todo');
var _ = require('underscore');

var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

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