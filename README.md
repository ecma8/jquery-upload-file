# jquery-upload-file 基于jquery的文件上传
## 本插件功能 
* 原生file上传文件
## 插件配置 
### JS相关引入
```html
<script src="src/jquery-1.11.3.js"></script>
<script src="src/jquery-upload-file.js"></script>
```
### JS插件配置
```html
$('#file').uploadFile({
    url:'/uploading',
    returnSuccess:function(data){
        console.log(data.file[0])
        $('img').attr('src',data.file[0].path)
    },
    returnError:function(data){
        
    }
})
```  
### DOM相关
```html
<input type="file" name="file" id="file" value="" />
<img src="" alt="" style="width: 100px;height: 100px">
```
