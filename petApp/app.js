var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressJwt=require('express-jwt');
var bodyParser=require('body-parser');
var favicon=require('serve-favicon');
var cors=require('cors');
var indexRouter = require('./routes/index');


var usersRouter = require('./routes/user/users');
var petsRouter = require('./routes/pet/pets');
var dynamicRouter = require('./routes/user/dynamic');
var CommentRouter = require('./routes/user/comment');
var ArticleRouter = require('./routes/article/article');
var UploadRouter = require('./routes/user/upload');
var PetCateRouter = require('./routes/pet/pet-category');
var FollowRouter = require('./routes/user/follow');
var FansRouter = require('./routes/user/fans');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//使用中间件验证token合法性
app.use(expressJwt({ secret: 'secret' }).unless({
	path: ['/', '/api/user/register', '/api/user/login','/api/dynamic/list'] //除了这些地址，其他的URL都需要验证
}));
// 设置跨域资源分享CORS
app.use(cors());

app.use('/api', indexRouter);
app.use('/api/user', usersRouter);
app.use('/api/pet', petsRouter);
app.use('/api/dynamic', dynamicRouter);
app.use('/api/comment', CommentRouter);
app.use('/api/article', ArticleRouter);
app.use('/api/upload', UploadRouter);

app.use('/api/category', PetCateRouter);
app.use('/api/follow', FollowRouter);
app.use('/api/fans', FansRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// 处理401错误
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
      res.status(401).json({
          status: false,
          ...err,
      });
  }
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
