var mongoose = require('mongoose');

// connect to mongodb
// mongoose.createConnection('mongodb://192.168.99.100:27017/Topica_Uni');
mongoose.createConnection('mongodb://210.211.116.79:52025/Topica_Uni');

// get all mon hoc
var _bai_hoc = new mongoose.Schema({
    Id_subject: String,
    Noi_dung: Array
},{
    versionKey: false
});

// create a model  based a schema
module.exports = mongoose.model('bai_hoc', _bai_hoc);