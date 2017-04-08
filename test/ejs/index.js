const path =require('path');
const ejs = require('ejs');

//VUE
const html = `hello
    <% if(world.match('jjj')){ %>
    <%- world %>
    <% }%> 
    <%- include('./test') %>  
    <%= hhh %>`;

//==> (locals)=>'hello'+locals.world

//将字符串转换成function
const f1 = ejs.compile(html,{
  filename:path.resolve(__filename),
  compileDebug:true,
});
const finalStr = f1({
  world:'xxxx',
  hhh:'<script>alert(1)</script>'
});

/* 
 * <% %> 逻辑运算
 * <%- %> unescape
 * <%= %> escape  XSS  
 */

console.log('----',finalStr)


// let test = ()=>{
//     const ejs = require('ejs');
//     const input = `<%- $.hello %>
//     <%- include('test') %>
//     <!--hellowrold-->
//     <%- $.script %>`

    /* <%= %>的作用
     过滤敏感字符 比如<、>
     var _ENCODE_HTML_RULES = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&#34;',
      "'": '&#39;'
    };
     */
     /* <%- %>的作用
      不过滤敏感字符
     */
    // let func = ejs.compile(input, {
    //     compileDebug:true,
    //     _with:false,
    //     filename:path.resolve(__filename), //所有include的路径相对这个路径
    //     localsName:'$'
    // });

    // let output = func({
    //     hello:'world',
    //     script:'<script>console.log(1)</script>'
    // });
    // console.log(output);
// }

// setInterval(test,10000)

//解析

/*第一步:generateSouce函数
"    ; __append( hello )
    ; __append("\n    ")
    ; __line = 2
    ; __append( script )
"
*/
/*第二步 prepend
"  var __output = [], __append = __output.push.bind(__output);
*/


/* 第三步 append
 "  return __output.join("");

 */

/* 生成function

fn = new Function(opts.localsName + ', escapeFn, include, rethrow', src);

*/
























