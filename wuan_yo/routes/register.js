var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('register', {});
});
router.post('/', function(req, res, next) {
    request.post({
        url: 'http://104.194.79.57/demo/?service=User.Reg',
        formData: {
            Email: req.param('email'),
            password: req.param('password'),
            nickname: req.param('nickname')
        }
    }, function optionalCallback(err, httpResponse, body) {
        if (err) {
            console.error('Login failed:', err);
            res.header('Content-type', 'application/json');
            res.header('Charset', 'utf8');
            res.send({
                err: err
            });
        }
        console.log('Register successful!  Server responded with:', body);
        res.header('Content-type', 'application/json');
        res.header('Charset', 'utf8');
        res.send(JSON.parse(body));
    });

});

module.exports = router;