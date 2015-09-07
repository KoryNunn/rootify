var transformTools = require('browserify-transform-tools'),
    caroot = require('caroot');

function transform(args, opts, done) {
    var file = args[0],
        result = null;


    if (file != null) {
        var replacement = caroot(file, opts.file);

        if (replacement != null) {
            result = 'require("' + replacement + '")';
        }
    }

    return done(null, result);
}

module.exports = transformTools.makeRequireTransform(
    'rootify',
    {
        jsFilesOnly: true
    },
    transform
);