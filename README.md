# css-inline

Inline css into html dom

> It is very simple right now

It is based on [fritx/css-obj](https://github.com/fritx/css-obj)

## Usage

Source:

```html
<!-- only one tag that wraps -->
<!-- to which body/html will be
  implicitly auto-parented
  while inlining -->
<div class="box">
  <img src="xxx">
</div>
```

```css
.box {
  background-color: blue;
}
body > .box {
  color: red;
}
.box img {
  width: 100%;
  height: auto;
}
```

Inlining:

```js
var inlineCss = require('css-inline')
inlineCss(html, css, function(err, inlined){
  console.log(inlined)
})
```

Outputs:

```html
<div class="box" style="background-color:blue;color:red;">
  <img src="xxx" style="width:100%;height:auto;">
</div>
```