var mongoose = require('mongoose');

// connect to mongodb
// mongoose.connect('mongodb://192.168.99.100:27017/Topica_Uni');
mongoose.connect('mongodb://210.211.116.79:52025/Topica_Uni');

// create user
var _user_test = new mongoose.Schema({
    user_name: String,
    pass_word: String,
    full_name: String,
    image_url: String,
    study_email: String,
    class: String,
    birthday: String,
    sex: Boolean,
    info: Array,
    provider: Number
},{
    versionKey: false
});

// create a model  based a schema
module.exports = mongoose.model('User', _user_test);