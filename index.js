var transformTools = require('browserify-transform-tools'),
    caroot = require('caroot');

function transform(args, opts, done) {
    return done(null, 'require("' + caroot(args[0], opts.file) + '")');
}

module.exports = transformTools.makeRequireTransform(
    'rootify',
    {
        jsFilesOnly: true
    },
    transform
);