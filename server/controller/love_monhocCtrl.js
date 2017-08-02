var express = require('express');
var app = express();

// get reset model
var _monhoc_model = require('../model/love_monhoc');

// function create mon hoc
function create_monhoc(_auth, _id_subject, _name, _image_url, _img_baner, _id_class, _from_day, _today, _manager, _teacher, _status) {
    var _create = new _monhoc_model({
        Auth: _auth,
        Id_subject: _id_subject,
        Name: _name,
        Image_url: _image_url,
        Image_baner: _img_baner,
        Id_class: _id_class,
        From_day: _from_day,
        To_day: _today,
        Manager: _manager,
        Teacher: _teacher,
        Status: _status
     });
    _create.save(function (err) {
        if (err) console.log(err);
    });
}

module.exports = {
    create_mon_hoc: function (req, res) {
        _monhoc_model.find({Id_subject: req.body.Id_subject}, function (err, data) {
            if (err) {
                response = { 'error': true, 'message': 'error fetching data' };
            } else {
                if(data.length > 0){
                    response = { 'error': false, 'message': 'monhocyeuthich create complete !' }
                }else{
                    create_monhoc(req.body.Auth, req.body.Id_subject, req.body.Name, req.body.Image_url, req.body.Image_baner, req.body.Id_class, req.body.From_day, req.body.To_day, req.body.Manager, req.body.Teacher, req.body.Status);
                    response = { 'error': false, 'message': 'monhocyeuthich create complete !' }
                }
            }
            res.status(200).json(response);
        });
    },
    Get_all: function (req, res) {
        _monhoc_model.find({Auth: req.body.Auth}, function (err, data) {
            if (err) {
                response = { 'error': true, 'message': 'error fetching data' };
            } else {
                response = { 'error': false, 'monhoc': data };
            }
            res.status(200).json(response);
        });
    }
}