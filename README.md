# jquery-upload-file 基于jquery formdata的文件上传
## 本插件功能 
* 原生file上传文件
## 本插件弊端 
* 由于本插件使用formdata 不支持ie9以下浏览器
## 插件配置 
### JS相关引入
```html
<script src="src/jquery-1.11.3.js"></script>
<script src="src/jquery-upload-file.js"></script>
```
### JS插件配置
```html
$('#file').uploadFile({
    url:'/uploading',//上传URL
    type:'POST',//上传方式 默认POST 可不填
    dataType:'json',//返回数据格式类型 默认JSON 可不填
    fileType:['jpg','jpeg','png'],//上传图片类型 直接添加文件后缀名 大小写不限  默认为ppt
    fileName:'file',//默认是file 类似form上传的filename值
    fileSize:'3', //单位是M 默认10M
    returnSuccess:function(data){
        console.log(data.file[0])
        $('img').attr('src',data.file[0].path)
    },
    returnError:function(data){
        //上传返回的错误信息
    },
    returnBeforeSend:function(){
        //上传之前所执行的方法 比如弹出一个loading
    },
    errorMsg:function(data){
        //返回的本地错误信息 类型不符合 大小不符合
    }
})
```  
### DOM相关
```html
<input type="file" name="file" id="file" value="" />
<img src="" alt="" style="width: 100px;height: 100px">
```
### 测试demo运行
* 把项目下载到本地
* 把项目解压一下
* 进入到解压后目录
* 在当前窗口打开命令行
* 输入npm install 等待下载完成
* 下载完成后 输入node index.js
* 打开浏览器 输入127.0.0.1:8081/index 即可看到相关页面
