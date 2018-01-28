var fs = require('fs');
var through = require('through2');
var cheerio = require('cheerio');
var mime = require('mime');
var path = require('path');

module.exports = function(options) {

    options = options || { imagesDir: null };

    const excludeMimeTypes = ['application/octet-stream'];

    return through.obj((file, enc, callback) => {

        let output = String(file.contents)
        
        const $ = cheerio.load(String(file.contents));
        
        $('img').each((index, img) => {
            output = convertImage(img, file, output);
        });

        file.contents = new Buffer(output);

		return callback(null, file);
    });

    function convertImage(img, file, output) {

        const src = img.attribs["src"];
    
        if (src) {

            if (options.imagesDir) {
                options.imagesDir = path.join(process.cwd(), options.imagesDir)
            }

            const fileBase = options.imagesDir || file.base;
            
            const imagePath = path.join(fileBase, src);
            const mimeType = mime.getType(imagePath);
    
            if (mimeType != 'application/octet-stream') {
    
                const base64 = createBase64(imagePath);
    
                output = output.replace(src, `data:${mimeType};base64,${base64}`);
            }
        }

        return output;
    }
    
    function createBase64(path) {
        return new Buffer(fs.readFileSync(path)).toString('base64');
    }
};