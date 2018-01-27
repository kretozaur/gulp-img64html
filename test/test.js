var base64 = require("../index");
var path = require('path');
var gutil = require('gulp-util');
var fs = require('fs');

describe('in buffer mode', function() {

	it('should replace images in DOM with base64 data', function(done) {

		var filename = path.join(__dirname, '/fixtures/test-1.html');

		var input = new gutil.File({
			base: path.dirname(filename),
			path: filename,
			contents: new Buffer(fs.readFileSync(filename, 'utf8'))
		});

		var stream = base64();

		stream.on('data', function(newFile) {
			done();
		});

		stream.write(input);

	});
});