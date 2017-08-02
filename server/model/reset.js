var mongoose = require('mongoose');

// connect to mongodb
// mongoose.createConnection('mongodb://192.168.99.100:27017/Topica_Uni');
mongoose.createConnection('mongodb://210.211.116.79:52025/Topica_Uni');

// reset password
var _reset_pass = new mongoose.Schema({
    user_name: String,
    pass_word: String,
    full_name: String,
    study_email: String,
    class: String,
    birthday: String,
    sex: Boolean,
    info: Array
},{
    versionKey: false
});

// create a model  based a schema
module.exports = mongoose.model('Users', _reset_pass);