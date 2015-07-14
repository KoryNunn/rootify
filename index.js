var path = require('path'),
    findRoot = require('find-root'),
    transformTools = require('browserify-transform-tools');

function getReplacement(file, currentPath) {
    if(file.charAt(0) === '^') {
        var filePath = file.slice(1),
            root = findRoot(currentPath);

        return path.join(path.relative(path.join(root, filePath), root), filePath);
    }

    return null;
}

function transform(args, opts, done) {
    var file = args[0],
        result = null;


    if (file != null) {
        var replacement = getReplacement(file, opts.file);

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