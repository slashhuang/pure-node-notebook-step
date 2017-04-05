webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {
__webpack_require__(1);
setTimeout(function () {
	$.ajax({
		url: '/user.action',
		method: 'get',
		//返回数组
		success: function (arr) {
			var liStr = arr.map(function (ele) {
				return '<li>' + ele + '</li>';
			}).join('');

			$('#root').html(liStr);
		},
		error: function (error) {
			console.log(error);
		}
	});
	//模拟post
	$.ajax({
		url: '/list.action',
		method: 'post',
		headers: {
			'content-type': "application/json"
		},
		data: JSON.stringify(['zhongguo', "jrg"]),
		//返回数组
		success: function (arr) {
			var liStr = arr.map(function (ele) {
				return '<li>' + ele + '</li>';
			}).join('');

			$('#shop').html(liStr);
		},
		error: function (error) {
			console.log(error);
		}
	});
}, 1000);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
],[2]);
//# sourceMappingURL=index.js.map