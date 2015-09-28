var transformTools = require('browserify-transform-tools'),
    caroot = require('caroot');

function transform(args, opts, done) {
    done(null, 'require("' + caroot(args[0], opts.file, opts.config.rootPath) + '")');
}

module.exports = transformTools.makeRequireTransform(
    'rootify',
    {
        jsFilesOnly: true
    },
    transform
);