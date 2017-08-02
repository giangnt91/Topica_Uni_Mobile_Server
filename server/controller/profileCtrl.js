var express = require('express');
var app = express();

// get profile model
var _profile_model = require('../model/sign');


// function login
module.exports = {
	_update: function (req, res) {
		var response = {};
		var tmp_info = JSON.parse(req.body.info);
		_profile_model.findOne({
			user_name: req.body.user_name
		}, function (err, data) {
			if (err) {
				response = {
					'error': true,
					'message': 'error fetching data'
				};
			} else {
				if (data === null) {
					response = {
						'error': true,
						'message': 'username do not exits'
					};
				} else {
					data.info = tmp_info;
					//save data to database
					data.save(function (err) {
						if (err) {
							response = {
								'error': true,
								'message': 'error updating data'
							};
						}
					});
					response = {
						'error': false,
						'profile': data
					};
				}
			}
			res.status(200).json({
				'profile': response,
				'status': true
			});
		});
	},
	_avatar: function (req, res, server_url) {
		var response = {};
		var path = '';
		_profile_model.findOne({ user_name: req.body.auth }, function (err, data) {
			if (err) {
				response = {
					'error': true,
					'message': 'error fetching data'
				};
			} else {
				if (data === null) {
					response = {
						'error': true,
						'message': 'username do not exits'
					};
				} else {
					data.image_url = server_url + req.file.filename;
					//save data to database
					data.save(function (err) {
						if (err) {
							response = {
								'error': true,
								'message': 'error updating data'
							};
						}
					});
					res.status(200).json(response);
				}
			}
		})
	}
};