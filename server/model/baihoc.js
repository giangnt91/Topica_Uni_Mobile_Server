var mongoose = require('mongoose');

// connect to mongodb
mongoose.createConnection('mongodb://localhost:27017/Topica_Uni');

// get all mon hoc
var _bai_hoc = new mongoose.Schema({
    Id_subject: String,
    Noi_dung: Array
},{
    versionKey: false
});

// create a model  based a schema
module.exports = mongoose.model('bai_hoc', _bai_hoc);