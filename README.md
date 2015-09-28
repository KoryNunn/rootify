# rootify

Allow root-of-project (closest package.json) requires in browserify with `^`

## Usage

rootify is a browserify transform.

```
npm i --save-dev rootify
```

and in your package.json:

```
  "browserify": {
    "transform": [ "rootify" ]
  }
```

And optionally..

```
  "rootify": {
    "rootPath": "./someRelativePath"
  }
```

And then, instead of:

```
var something = require('../../../../../something');
```

You can use:

```
var something = require('^something');
```