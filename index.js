var path = require('path'),
    findRoot = require('find-root'),
    transformTools = require('browserify-transform-tools');

function getReplacement(file, currentPath) {
    if(file.charAt(0) === '^') {
        return findRoot(currentPath) + '/' + file.slice(1);
    }

    return null;
}

function transform(args, opts, done) {
    var file = args[0],
        result = null;


    if (file != null) {
        var replacement = getReplacement(file, opts.file);

        if (replacement != null) {
            if (replacement.relative != null) {
                replacement = replacement.relative;
            } else if (/^\./.test(replacement)) {
                var fileDir = path.dirname(opts.file);
                replacement = './' + (path.relative(fileDir, replacement));
            }

            if (/^[a-zA-Z]:\\/.test(replacement)) {
                replacement = replacement.replace(/\\/gi, '\\\\');
            } else {
                replacement = replacement.replace(/\\/gi, '/');
            }

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