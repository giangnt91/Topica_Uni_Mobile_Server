var mongoose = require('mongoose');

// connect to mongodb
// mongoose.createConnection('mongodb://192.168.99.100:27017/Topica_Uni');
mongoose.createConnection('mongodb://210.211.116.79:52025/Topica_Uni');

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