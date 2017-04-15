## 响应式布局初步

CSS技术选型

- [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)

```css
	@media screen  
	and (min-width: 320px) 
  	and (max-width: 480px){
  		background: yellow

  	}

```

- float 流式布局


```css
	.clear-fix{
		content:'';
		display:block;
		clear:both
	}
	.panel{
		float:left
	}
```