var express = require('express');
var app = express();

// get chuyenganh model
var _chuyenganh_model = require('../model/chuyennganh');

// function create chuyen nganh
function create_chuyen_nganh(_name, _image, _truong, _id_subject) {
    var _create = new _chuyenganh_model({
        Name: _name,
        Image: _image,
        Truong: _truong,
        Id_subject: _id_subject
     });
    _create.save(function (err) {
        if (err) console.log(err);
    });
}

module.exports = {
    create_chuyenganh: function (req, res) {
        _chuyenganh_model.find(function (err, data) {
            if (err) {
                response = { 'error': true, 'message': 'error fetching data' };
            } else {
                create_chuyen_nganh(req.body.Name, req.body.Image, req.body.Truong, req.body.Id_subject);
                response = { 'error': false, 'message': 'monhoc create complete !' }
            }
            res.status(200).json(response);
        });
    },
    Get_all: function (req, res) {
        _chuyenganh_model.find({}, function (err, data) {
            if (err) {
                response = { 'error': true, 'message': 'error fetching data' };
            } else {
                response = { 'error': false, 'chuyennganh': data };
            }
            res.status(200).json(response);
        });
    }
}


