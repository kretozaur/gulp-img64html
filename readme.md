# gulp-html-img64 [![Build Status](https://travis-ci.org/kretozaur/gulp-img64html.png)](https://travis-ci.org/kretozaur/gulp-img64html)

Convert and replace image in HTML to base64.

## Gulp Task:

```js
var gulp = require('gulp');
var img64Html = require('gulp-html-img64');

gulp.task('default', function () {
	gulp.src('index.html')
	.pipe(img64Html())
	.pipe(gulp.dest('path'));
});
```

```js
var gulp = require('gulp');
var img64Html = require('gulp-html-img64');

gulp.task('default', function () {
	gulp.src('index.html')
	.pipe(img64Html({
		imagesDir: '/images'
	}))
	.pipe(gulp.dest('path'));
});
```