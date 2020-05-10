/* add package */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const fs = require("fs")
const session = require('express-session');
const flash = require("connect-flash");

var indexRouter = require('./routes/router');
var usersRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

const app = express()
app.use(cors());
// const router = require('./routes/router.js')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setup admin lte
app.use("/adminlte",
    express.static(path.join(__dirname, "/node_modules/admin-lte/"))
)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', cookie: {} }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

// app.use(function (req, res, next) {
//     res.locals.stuff = {
//         url: req.originalUrl
//     }
//     next();
// });

app.use('/', indexRouter);

// router api v1
app.get("/api/v1", (req, res) => {
    fs.readFile("config/apiDocs.json", (err, data) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        }
        const docs = JSON.parse(data);
        res.json(docs);
    });
});

app.use('/api/v1', usersRouter)

// cek url active
app.use(function (req, res, next) {
    res.locals.stuff = {
        url: req.originalUrl
    }
    next();
});

// app.use('/', usersRouter);

// router admin
app.use('/', adminRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.status(err.status || 500).json({ message: err.message });
    // "res.render('error');"
});



module.exports = app