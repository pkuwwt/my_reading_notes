
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

const resolve = f => path.resolve(__dirname, f);

const basic_express = (routes, port) => {
    var app = express();
    app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(morgan('combined', {
        stream: fs: createWriteStream(resolve('access.log'), {flags: 'a'})
    });
    app.use(morgan('common', {
        stream: fs.createWriteStream(resolve('error.log'), {flags: 'a'}),
        skip: (req, res) => res.statusCode < 400,
    });
    routes.forEach(route => {
        if(route.method==='post') {
            app.post(route.path, route.callback);
        }
        else {
            app.get(route.path, route.callback);
        }
    });
    app.listen(port);
};

const get_ip = req => req.headers['x-forwarded-for'] || req.connection.remoteAddress;

