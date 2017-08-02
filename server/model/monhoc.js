var mongoose = require('mongoose');

// connect to mongodb
// mongoose.createConnection('mongodb://192.168.99.100:27017/Topica_Uni');
mongoose.createConnection('mongodb://210.211.116.79:52025/Topica_Uni');

// get all mon hoc
var _mon_hoc = new mongoose.Schema({
    Id_subject: String,
    Name: String,
    Image_url: String,
    Image_baner: String,
    Id_class: String,
    From_day: String,
    To_day: String,
    Manager: String,
    Teacher: String,
    Status: Boolean
},{
    versionKey: false
});

// create a model  based a schema
module.exports = mongoose.model('mon_hoc', _mon_hoc);