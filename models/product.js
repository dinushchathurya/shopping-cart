var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath:{type:String, required:true},
    title:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, Required:true}
});

module.export = mongoose.model('Product', schema);