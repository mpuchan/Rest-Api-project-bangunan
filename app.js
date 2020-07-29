/* add package */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const fs = require("fs")
var passport = require("passport");

/* Declare Express package */
const session = require('express-session');
const fileUpload = require("express-fileupload");
const flash = require("connect-flash");

/* Declare Router package */
var indexRouter = require('./routes/router');
const usersRouter = require('./routes/user');
const pengembangRouter = require('./routes/pengembang')
const adminRouter = require('./routes/admin');
const proyekRouter = require('./routes/proyek')
const satuanRouter = require('./routes/satuan');
const jenisRouter = require('./routes/jenis');
const materialRouter = require('./routes/material');
const superuserRouter = require('./routes/superuser');
const authRouter = require("./routes/auth");
const perhitunganbidangRouter = require("./routes/perhitunganbidang");
const perhitunganacianRouter = require("./routes/perhitunganacian");
const perhitunganplesteranRouter = require("./routes/perhitunganplesteran");
const perhitunganlantaiRouter = require("./routes/perhitunganlantai");
const perhitunganuruganRouter = require("./routes/perhitunganurugan");
const perhitunganpengecatanRouter = require("./routes/perhitunganpengecatan");
const perhitunganplafonRouter = require("./routes/perhitunganplafon");
const perhitunganpondasiRouter = require("./routes/perhitunganpondasi");
const perhitunganbetonRouter = require("./routes/perhitunganbeton");
const activateRouter = require("./routes/activateuser");
const profileRouter = require("./routes/profile");
const reportRouter = require("./routes/report");


var app = express()
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
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());


// app.use(function (req, res, next) {
//     res.locals.stuff = {
//         url: req.originalUrl
//     }
//     next();
// });
// Passport configuration
// For Passport
app.use(
    session({
        secret: "keyboard cat",
        resave: true,
        saveUninitialized: true
    })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

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
/* API Router */

app.use('/api/v1', pengembangRouter)
app.use('/api/v1', proyekRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1", perhitunganbidangRouter)
app.use("/api/v1", perhitunganlantaiRouter)
app.use("/api/v1", perhitunganacianRouter)
app.use("/api/v1", perhitunganplesteranRouter)
app.use("/api/v1", perhitunganuruganRouter)
app.use("/api/v1", perhitunganpengecatanRouter)
app.use('/api/v1', materialRouter)
app.use('/api/v1', perhitunganpondasiRouter)
app.use('/api/v1', perhitunganbetonRouter)
app.use('/api/v1', perhitunganplafonRouter)
app.use('/api/v1', reportRouter)



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
app.use('/', satuanRouter)
app.use('/', jenisRouter)
app.use('/', superuserRouter)
app.use('/', materialRouter)
app.use('/', activateRouter)
app.use('/', profileRouter)
app.use('/', usersRouter)

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