

const ejs = require('ejs');
const input = `<%- hello %>
<%- script %>`

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
let func = ejs.compile(input, {
    compileDebug:true
});

let output = func({
    hello:'world',
    script:'<script>console.log(1)</script>'
});
console.log(output)
