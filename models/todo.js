/**
 * Created by Hans on 26.01.2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  created:{
    type: Date,
    default: Date.now
  },
  title: String,
  done: Boolean,
  dueDate: Date
});

TodoSchema.statics ={
  load: function(id,cb){
    this.findOne({_id:id}).exec(cb);
  }
};

mongoose.model('Todo',TodoSchema);