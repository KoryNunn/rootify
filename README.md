# rootify

allow root-of-project (closest package.json) requires in browserify with `^`

## Usage

reference the rootify transform however you'd like in your browserify flow, then, instead of:

```
var something = require('../../../../../something');
```

You can use:

```
var something = require('^something');
```

