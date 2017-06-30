var express = require('express');
var app = express();

// get reset model
var _reset_model = require('../model/reset');

// function reset 
module.exports = {
    reset: function (req, res) {
        var response = {};

        _reset_model.findOne({ user_name: req.body.user_name }, function (err, data) {
            if (err) {
                response = { 'error': true, 'message': 'error fetching data' };
            } else {
                if (data === null) {
                    response = { 'error': true, 'message': 'username do not exits' };
                } else {
                    data.pass_word = req.body.pass_word;
                    //save data to database
                    data.save(function (err) {
                        if (err) {
                            response = { 'error': true, 'message': 'error updating data' };
                        }
                    });
                    response = { 'error': false, 'message': 'data is update for ' + req.body.user_name };
                }
            }
            res.status(200).json({
                'status': response
            });
        });
    },
    Changepass: function (req, res) {
        var response = {};
        _reset_model.findOne({ user_name: req.body.user_name }, function (err, data) {
            if (err) {
                response = { 'error': true, 'message': 'error fetching data' };
            } else {
                if (data === null) {
                    response = { 'error': true, 'message': 'username do not exits' };
                } else {
                    data.pass_word = req.body.pass_word;
                    data.save(function (err) {
                        if (err) {
                            response = { 'error': true, 'message': 'error updating data' };
                        }
                    });
                    response = { 'error': false, 'message': 'data is update for ' + req.body.user_name };
                }
            }
            res.status(200).json(response);
        });
    }
};