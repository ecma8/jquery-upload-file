(function($){
	$.fn.extend({
		uploadFile:function(obj){
			return this.each(function(){
				var type=obj.type?obj.type:'POST';
				var url=obj.url?obj.url:'';//必填;
				var dataType=obj.dataType?obj.dataType:'json';
				var returnSuccess=obj.returnSuccess;
				var returnError=obj.returnError;
				$(this).on('change',function(){
					var formdata=new FormData();
					formdata.append("file",$(this)[0].files[0]);
					$.ajax({
						type : type,
						url : url,
						data : formdata,
						cache : false,
						processData : false,
						contentType : false,
						dataType:dataType,
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
	})
})(jQuery)
