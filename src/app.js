'use strict';

const express = require("express");
const http = require('http');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.set('port', process.env.PORT || 5006);

// COMPRESSION
const compression = require('compression');

function shouldCompress (req, res) {
    return (req.header['x-no-compression']) ? compression.filter(req, res) : false;
}

app.use(compression({ filter: shouldCompress }));

// I18N
const i18n = require('i18n');

let i18nConfig = {
    locales: ['en', 'es'],
    directory: path.join(__dirname, 'locales'),
    defaultLocale: 'es'
};

i18n.configure(i18nConfig);

app.use(i18n.init);

// HANDLEBARS - Sistema de plantillas
var hdbConfig = {
    defaultLayout: 'main.hbs',
    LayoutsDir: path.join(app.get('views'), 'layouts'),
    PartialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: {
        __: function () {
            return i18n.__.apply(this, arguments);
        },
        __n: function () {
            return i18n.__n.apply(this, arguments);
        }
    }
};

const hbs = exphbs.create(hdbConfig);

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// ROUTERS - Rutas de acceso
const mainRouters = require('./routers/main.js');
// import {mainRouters} from './routers/main.js';
app.use('/', mainRouters);


// LOAD FILES
app.use(express.static(app.get('views')));
app.use(express.static(app.get('public')));

// 
app.enable('view cache');


// START SERVER
const server = http.createServer(app);

server.listen(app.get('port'), () =>
    console.log(`http://localhost:${app.get('port')}/`)
);