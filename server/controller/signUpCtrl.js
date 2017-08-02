var express = require('express');
var app = express();
// var router = express.Router();

//get sign up model
var _signUp_model = require('../model/sign');

// function create new user
function create_user(_username, _password, _fullname, _studymail, _class, _birthday, _sex, _info, _provider) {
    if (_info !== undefined) {
        var tmp_info = JSON.parse(_info);
    } else {
        tmp_info = null;
    }

    var _create = new _signUp_model({ user_name: _username, pass_word: _password, full_name: _fullname, study_email: _studymail, class: _class, birthday: _birthday, sex: _sex, info: tmp_info, provider: _provider });
    _create.save(function (err) {
        if (err) console.log(err);
    });
}

// api function
module.exports = {
    create_new_user: function (req, res) {
        _signUp_model.find({ user_name: req.body.user_name }, function (err, data) {
            if (err) {
                response = { 'error': true, 'message': 'error fetching data' };
            } else {
                if (data.length > 0) {
                    response = { 'error': true, 'profile': 'username already exists, retry with another username' };
                } else {
                    create_user(req.body.user_name, req.body.pass_word, req.body.full_name, req.body.study_email, req.body.class, req.body.birthday, req.body.sex, req.body.info, req.body.provider);
                    response = { 'error': false, 'message': 'account create complete !' }
                }
            }
            res.status(200).json({
                'profile': response,
                'status': true
            });
        });
    }
};
