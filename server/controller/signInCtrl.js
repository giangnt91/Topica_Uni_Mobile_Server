var express = require('express');
var app = express();

// get sign in model
var _signIn_model = require('../model/sign');

// function login 
module.exports = {
    signIn: function (req, res) {
        var response = {};
        _signIn_model.find({ user_name: req.body.user_name, pass_word: req.body.pass_word }, function (err, data) {
            if (err) {
                response = { 'error': true, 'message': 'error fetching data' };
            } else {
                if (data.length > 0) {
                    response = { 'error': false, 'profile': data };
                } else {
                    response = { 'error': true, 'message': 'username or password incorrect' };
                }
            }
            res.status(200).json({
                'profile': response,
                'status': true
            });
        });
    }
};