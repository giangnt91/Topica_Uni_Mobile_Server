var mongoose = require('mongoose');

// connect to mongodb
mongoose.createConnection('mongodb://localhost:27017/Topica_Uni');

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