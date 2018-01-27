var fs = require('fs');
var through = require('through2');
var cheerio = require('cheerio');
var mime = require('mime');
var path = require('path');

module.exports = function(options) {

    return through.obj(function(file, enc, callback) {
        
        let output = String(file.contents)
        
        const $ = cheerio.load(String(file.contents));
        
        $('img').each(function(index, img) {

            const src = $(this).attr("src");

            if (src) {
                const imagePath = path.join(file.base, src);
                const mimeType = mime.getType(imagePath);

                if (mimeType != 'application/octet-stream') {
       
                    const base64 = new Buffer(fs.readFileSync(imagePath)).toString('base64');

                    output = output.replace(src, `data:${mimeType};base64,${base64}`);
                }
            }
        });

        file.contents = new Buffer(output);

		return callback(null, file);
    });
};