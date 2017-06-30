var mongoose = require('mongoose');

// connect to mongodb
mongoose.createConnection('mongodb://localhost:27017/Topica_Uni');

// get all chuyen nganh
var _chuyen_nganh = new mongoose.Schema({
    Name: String,
    Image: String,
    Truong: Array,
    Id_subject: String
},{
    versionKey: false
});

// create a model  based a schema
module.exports = mongoose.model('chuyen_nganh', _chuyen_nganh);