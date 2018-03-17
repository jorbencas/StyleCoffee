var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
 var User = mongoose.model('User');

var ComputerSchema = new mongoose.Schema({
  _id:Number,
  name:String,
  type:String,
  price:Number,
  status:String,
  date:String,
  marca:String,
  picture:String,
  shop: {
    name:String,
    latitude:Number,
    longitude:Number,
    stock:Number
  },
}, {timestamps: true});


ComputerSchema.methods.toJSONFor = function(){
  return {
    _id:this._id,
    name:this.name,
    type:this.type,
    price:this.price,
    status:this.status,
    date:this.date,
    marca:this.marca,
    picture:this.picture,
    shop:this.shop
  };
};

mongoose.model('Computer', ComputerSchema);
