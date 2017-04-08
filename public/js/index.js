
require('../css/index.scss');
// const c = 'c';
require('highlight.js').initHighlightingOnLoad()

setTimeout(function(){
	$.ajax({
		url:'/user.action',
		method:'get',
		//返回数组
		success:function(arr){
			var liStr = arr.map(function(ele){
					return '<li>'+ele+'</li>'
				}).join('');

			$('#root').html(liStr);
		},
		error:function(error){
			console.log(error)
		}
	})
	//模拟post
	$.ajax({
		url:'/list.action',
		method:'post',
		headers:{
			'content-type':"application/json"
		},
		data:JSON.stringify(['zhongguo',"jrg"]),
		//返回数组
		success:function(arr){
			var liStr = arr.map(function(ele){
					return '<li>'+ele+'</li>'
				}).join('');

			$('#shop').html(liStr);
		},
		error:function(error){
			console.log(error)
		}
	})
},1000)
