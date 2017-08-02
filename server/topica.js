var express = require('express');
var app = express();
port = process.env.port || 7006;
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('./avatar/'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// controller
var _signIn = require('./controller/signInCtrl');
var _signUp = require('./controller/signUpCtrl');
var _profile = require('./controller/profileCtrl');
var _reset = require('./controller/resetCtrl');
var _monhoc = require('./controller/monhocCtrl');
var _baihoc = require('./controller/baihocCtrl');
var _chuyenganh = require('./controller/chuyennganhCtrl');
var _love_monhoc = require('./controller/love_monhocCtrl');

app.use(function (req, res, next) {
    //allow connect
    var allowedOrigins = ['http://localhost:7006', 'http://localhost:8080'];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7006');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//-- API --//

// save file from upload
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './avatar/')
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, req.body.auth + '-' + file.fieldname + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
  }
})
var upload = multer({ storage: storage }).single('avatar');


//updata avatar
app.post('/avatar',function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            res.send({ 'error': true, 'message': err });
        } else {
            // var server_url = 'http://localhost:7006/';
            var server_url = 'http://210.211.116.79:7006/';
            _profile._avatar(req, res, server_url)
        }
    })
});

//update profile
app.post('/profile', function (req, res) {
    _profile._update(req, res);
});

//sign up
app.post('/signup', function (req, res) {
    _signUp.create_new_user(req, res);
});

//sign in
app.post('/signin', function (req, res) {
    _signIn.signIn(req, res);
});

//reset password
app.post('/reset', function (req, res) {
    _reset.reset(req, res);
});

//change password
app.post('/changepass', function (req, res) {
    _reset.Changepass(req, res);
})

//create mon hoc
app.post('/cmonhoc', function (req, res) {
    _monhoc.create_mon_hoc(req, res);
})

//get all monhoc
app.get('/monhocs', function (req, res) {
    _monhoc.Get_all(req, res);
})

//get mon hoc by id nganh
app.post('/monhocbyidcn', function (req, res) {
    _monhoc.Get_by_id_nganh(req, res);
})

//get monhoc by id mon
app.post('/mohocdetail', function (req, res) {
    _monhoc.Get_detail_by_id(req, res);
})

//create monhoc yeu thich
app.post('/cyeuthich', function (req, res) {
    _love_monhoc.create_mon_hoc(req, res);
})

//get monhoc yeu thich
app.post('/yeuthich', function (req, res) {
    _love_monhoc.Get_all(req, res);
})



//create bai hoc
app.post('/cbaihoc', function (req, res) {
    _baihoc.create_bai_hoc(req, res);
})

// get bai hoc by id monhoc
app.post('/baihocs', function (req, res) {
    _baihoc.get_by_Id(req, res);
})

//create chuyen nganh
app.post('/cchuyennganh', function (req, res) {
    _chuyenganh.create_chuyenganh(req, res);
})

//get all chuyen nganh
app.post('/chuyennganh', function (req, res) {
    _chuyenganh.Get_all(req, res);
})


app.listen(port);
console.log('server is running on port ' + port);



