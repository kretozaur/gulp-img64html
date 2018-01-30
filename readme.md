# gulp-html-img64 [![Build Status](https://travis-ci.org/kretozaur/gulp-img64html.png)](https://travis-ci.org/kretozaur/gulp-img64html)

Convert and replace image in HTML to base64.

## Install

```
npm install gulp-html-img64 --save-dev
```

# Examples



## input
```html
<html>
    <body>
        <img src="1x1.png" />
    </body>
</html>
```

## output
```html
<html>
    <body>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=" />
    </body>
</html>
```

> Convert working with templates parser like : ejs, lodash

## input
```html
<html>
    <body>
	<% if(true){ %>
   		<img src="1x1.png" />
	<% } %>
	<% else{ %>
		<h1>bar</h1>
	<% } %>
    </body>
</html>
```

## output
```html
"<html>
    <body>
	<% if(true){ %>
   		<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=" />
	<% } %>
	<% else{ %>
		<h1>bar</h1>
	<% } %>
    </body>
</html>
```

# Gulp Task

```js
var gulp = require('gulp');
var htmlImg64 = require('gulp-html-img64');

gulp.task('default', function () {
	gulp.src('index.html')
	.pipe(htmlImg64())
	.pipe(gulp.dest('path'));
});
```

## gulpt task with options:

```js
var gulp = require('gulp');
var htmlImg64 = require('gulp-html-img64');

gulp.task('default', function () {
	gulp.src('index.html')
	.pipe(htmlImg64({
		imagesDir: '/images'
	}))
	.pipe(gulp.dest('path'));
});
```
## Options

  - `imagesDir`  (String)  
    If you have images in special folder you can specified path to this folder in this option.