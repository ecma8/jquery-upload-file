(function($){
    $.fn.extend({
        uploadFile:function(obj){
            return this.each(function(){
                var type=obj.type?obj.type:'POST';
                var url=obj.url?obj.url:'';
                var dataType=obj.dataType?obj.dataType:'json';
                var fileName=obj.fileName?obj.fileName:'file';
                var returnSuccess=obj.returnSuccess;
                var returnError=obj.returnError;
                var fileSize=obj.fileSize?obj.fileSize:10;
                var errorMsg=obj.errorMsg;
                var returnBeforeSend=obj.returnBeforeSend;
                var fileType=obj.fileType?obj.fileType:'ppt';
                $(this).on('change',function(){
                    var formdata=new FormData();
                    var file=$(this)[0].files[0];
                    var _fileType=file.name.split('.');
                    if(fileType.indexOf(_fileType[_fileType.length-1].toLowerCase())==-1)
                    {
                        errorMsg('上传文件类型不符');
                        return false
                    }
                    if((file.size/1024/1024)>fileSize){
                        errorMsg('文件大小不符');
                        return false
                    }
                    formdata.append(fileName,$(this)[0].files[0]);
                    $.ajax({
                        type : type,
                        url : url,
                        data : formdata,
                        cache : false,
                        processData : false,
                        contentType : false,
                        dataType:dataType,
                        beforeSend:function(data){
                            returnBeforeSend(data)
                        },
                        success : function(data){
                            returnSuccess(data);
                        },
                        error : function(data){
                            returnError(data);
                        }
                    })
                })
            })
        }
    });
})(jQuery);
