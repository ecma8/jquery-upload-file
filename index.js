var express = require('express');                                                                                                                                                                                                                                           
var router = express.Router();
var app=express()
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');

/* 上传页面 */
app.get('/index', function (req, res) {
    res.sendFile( __dirname + "/index.html" );
})
/* 上传*/
app.post('/uploading', function(req, res, next){
  //生成multiparty对象，并配置上传目标路径
  var form = new multiparty.Form({uploadDir: './public_img/'});
  //上传完成后处理
  form.parse(req, function(err, fields, files) {
    var filesTmp = JSON.stringify(files,null,2);
    if(err){
      console.log('parse error: ' + err);
    } else {
      // console.log('parse files: ' + filesTmp);
      var inputFile = files.file[0];
      console.log(files);
      var uploadedPath = inputFile.path;
      // var dstPath = './public_img/' + inputFile.originalFilename;
      // fs.rename(uploadedPath, dstPath, function(err) {
      //   if(err){
      //     console.log('rename error: ' + err);
      //   } else {
      //     console.log('rename ok');
      //   }
      // });
    }
    res.header("Content-Type", "application/json;charset=utf-8");
    res.end(filesTmp);
 });
});

app.use('/src',express.static(__dirname+'/src'));

app.use('/public_img',express.static(__dirname+'/public_img'));
var server = app.listen(8081, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
module.exports = router;