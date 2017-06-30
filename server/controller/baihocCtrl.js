var express = require('express');
var app = express();

// get reset model
var _baihoc_model = require('../model/baihoc');

// function create bai hoc
function create_baihoc(_id_subject, _noidung) {
    var _create = new _baihoc_model({
        Id_subject: _id_subject,
        Noi_dung: Array
    });
    _create.save(function (err) {
        if (err) console.log(err);
    });
}

module.exports = {
    create_bai_hoc: function (req, res) {
        _baihoc_model.find(function (err, data) {
            var response = {};
            if (err) {
                response = { 'error': true, 'message': 'error fetching data' };
            } else {
                create_baihoc(req.body.Id_subject, req.body.Noi_dung);
                response = { 'error': false, 'message': 'monhoc create complete !' }
            }
            res.status(200).json(response);
        });
    },
    get_by_Id: function (req, res) {
        _baihoc_model.find({ Id_subject: req.body.Id_subject }, function (err, data) {
            var response = {};
            if (err) {
                response = { 'error': true, 'message': 'error fetching data' };
            } else {
                if (data.length > 0) {
                    response = { 'error': false, 'baihoc': data };
                } else {
                    response = { 'error': true, 'message': 'Id monhoc incorrect' };
                }
            }
            res.status(200).json(response);
        });
    }
}